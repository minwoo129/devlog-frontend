import { isFullPage } from "@notionhq/client";
import { ConferenceData } from "../notionDBDTO/conferenceData";
import {
  convertConferenceDataFuncType,
  flatConferenceDataPropertiesArgs,
} from "./types";
import {
  extractCheckbox,
  extractRichText,
  extractSelect,
  extractTitle,
} from "../extractFromObject";

const dataKeys: (keyof ConferenceData)[] = [
  "key",
  "title",
  "description",
  "href",
  "introduceIcon",
  "visible",
];

export const convertConferenceData: convertConferenceDataFuncType = (args) => {
  const { result } = args;
  let newDatas: ConferenceData[] = [];
  const { results } = result;
  for (const resultItem of results) {
    if (!isFullPage(resultItem)) continue;
    const { properties } = resultItem;
    let result: ConferenceData = {
      key: "",
      title: "",
      description: "",
      href: "",
      publisher: "",
      introduceIcon: "none",
      upperCategory: "",
      visible: false,
    };
    result = flatPropertiesData({ properties, curResult: result, idx: 0 });
    newDatas.push(result);
  }
  return newDatas;
};

const flatPropertiesData = (args: flatConferenceDataPropertiesArgs) => {
  const { properties, idx } = args;
  let { curResult } = args;

  if (idx === dataKeys.length) {
    return curResult;
  }
  const key = dataKeys[idx];
  const property = properties[key];

  if (property.type === "rich_text") {
    const value = extractRichText({ property });
    if (key === "href") {
      curResult.href = value;
      const [_, __, upperCategory] = value.split("/");
      curResult.upperCategory = upperCategory;
    } else if (key === "title") {
      curResult.title = value;
    } else if (key === "description") {
      curResult.description = value;
    }
    return flatPropertiesData({ properties, curResult, idx: idx + 1 });
  }
  if (property.type === "select") {
    const oriValue = extractSelect({ property, defaultValue: "none" });
    if (oriValue === "none") {
      curResult.introduceIcon = "none";
    } else if (oriValue === "개최임박") {
      curResult.introduceIcon = "heldImminent";
    } else {
      curResult.introduceIcon = "held";
    }
    return flatPropertiesData({ properties, curResult, idx: idx + 1 });
  }
  if (property.type === "checkbox") {
    const value = extractCheckbox({ property });
    if (key === "visible") {
      curResult.visible = value;
    }
    return flatPropertiesData({ properties, curResult, idx: idx + 1 });
  }
  if (property.type === "title") {
    const value = extractTitle({ property });
    curResult.key = value;
    return flatPropertiesData({ properties, curResult, idx: idx + 1 });
  }
  return curResult;
};
