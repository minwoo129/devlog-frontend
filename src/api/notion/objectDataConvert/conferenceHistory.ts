import { isFullPage } from "@notionhq/client";
import { ConferenceHistory } from "../notionDBDTO/conferenceHistory";
import {
  convertConferenceHistoryDataFuncType,
  flatConferenceHistoryPropertiesArgs,
} from "./types";
import {
  extractCheckbox,
  extractDate,
  extractMultiSelect,
  extractRichText,
  extractTitle,
  extractURL,
} from "../extractFromObject";

const dataKeys: (keyof ConferenceHistory)[] = [
  "id",
  "title",
  "description",
  "openedAt",
  "keyTags",
  "conferenceURL",
  "visible",
];

export const convertConferenceHistoryData: convertConferenceHistoryDataFuncType =
  (args) => {
    const { result } = args;
    let newDatas: ConferenceHistory[] = [];

    for (const resultItem of result.results) {
      if (!isFullPage(resultItem)) continue;
      const { properties } = resultItem;

      let result: ConferenceHistory = {
        id: "",
        title: "",
        description: "",
        openedAt: "",
        keyTags: [],
        conferenceURL: "",
        conferenceType: "",
        visible: false,
      };

      result = flatPropertiesData({ properties, curResult: result, idx: 0 });
      newDatas.push(result);
    }
    return newDatas;
  };

const flatPropertiesData = (args: flatConferenceHistoryPropertiesArgs) => {
  const { properties, idx } = args;
  let { curResult } = args;

  if (idx === dataKeys.length) {
    return curResult;
  }
  const key = dataKeys[idx];
  const property = properties[key];

  if (property.type === "rich_text") {
    const value = extractRichText({ property });
    if (key === "title") {
      curResult.title = value;
    } else if (key === "description") {
      curResult.description = value;
    }
    return flatPropertiesData({ properties, curResult, idx: idx + 1 });
  }
  if (property.type === "title") {
    const value = extractTitle({ property });
    if (key === "id") {
      curResult.id = value;
    }
    const [_, __, conferenceTypeOri] = value.split("_");
    if (conferenceTypeOri === "google") {
      curResult.conferenceType = "google-io";
    } else {
      curResult.conferenceType = "toss-slash";
    }
    return flatPropertiesData({ properties, curResult, idx: idx + 1 });
  }
  if (property.type === "date") {
    const value = extractDate({
      property,
      type: "date",
      defaultDate: "2020-01-01",
    });
    curResult.openedAt = value;
    return flatPropertiesData({ properties, curResult, idx: idx + 1 });
  }
  if (property.type === "multi_select") {
    const value = extractMultiSelect({ property });
    curResult.keyTags = value;
    return flatPropertiesData({ properties, curResult, idx: idx + 1 });
  }
  if (property.type === "url") {
    const value = extractURL({ property });
    curResult.conferenceURL = value;
    return flatPropertiesData({ properties, curResult, idx: idx + 1 });
  }
  if (property.type === "checkbox") {
    const value = extractCheckbox({ property });
    curResult.visible = value;
    return flatPropertiesData({ properties, curResult, idx: idx + 1 });
  }
  return curResult;
};
