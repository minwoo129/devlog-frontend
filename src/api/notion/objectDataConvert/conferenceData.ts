import { isFullPage } from "@notionhq/client";
import { ConferenceData } from "../notionDBDTO/conferenceData";
import {
  convertConferenceDataFuncType,
  flatConferenceDataPropertiesArgs,
} from "./types";
import {
  extractCheckbox,
  extractNumber,
  extractRichText,
  extractSelect,
  extractTitle,
  extractUniqueId,
} from "../extractFromObject";

const dataKeys: (keyof ConferenceData)[] = [
  "conferenceId",
  "key",
  "title",
  "description",
  "publisher",
  "href",
  "introduceIcon",
  "visible",
  "upperCategoryId",
];

export const convertConferenceData: convertConferenceDataFuncType = (args) => {
  const { result } = args;
  let newDatas: ConferenceData[] = [];
  const { results } = result;
  for (const resultItem of results) {
    if (!isFullPage(resultItem)) continue;
    const { properties } = resultItem;
    let result: ConferenceData = {
      conferenceId: -1,
      key: "",
      title: "",
      description: "",
      href: "",
      publisher: "",
      introduceIcon: "none",
      upperCategoryId: -1,
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
    } else if (key === "title") {
      curResult.title = value;
    } else if (key === "description") {
      curResult.description = value;
    } else if (key === "key") {
      curResult.key = value;
    } else if (key === "publisher") {
      curResult.publisher = value;
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
  if (property.type === "number") {
    const value = extractNumber({ property, defaultValue: -1 });
    if (key === "upperCategoryId") {
      curResult.upperCategoryId = value;
    }
    return flatPropertiesData({ properties, curResult, idx: idx + 1 });
  }
  if (property.type === "unique_id") {
    const value = extractUniqueId({ property, defaultValue: -1 });
    if (key === "conferenceId") {
      curResult.conferenceId = value;
    }
    return flatPropertiesData({ properties, curResult, idx: idx + 1 });
  }
  return curResult;
};
