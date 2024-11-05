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
  extractNumber,
  extractRichText,
  extractTitle,
  extractUniqueId,
  extractURL,
} from "../extractFromObject";

const dataKeys: (keyof ConferenceHistory)[] = [
  "conferenceId",
  "key",
  "title",
  "description",
  "openedAt",
  "keyTags",
  "conferenceURL",
  "visible",
  "conferenceType",
  "upperConferenceId",
];

export const convertConferenceHistoryData: convertConferenceHistoryDataFuncType =
  (args) => {
    const { result } = args;
    let newDatas: ConferenceHistory[] = [];

    for (const resultItem of result.results) {
      if (!isFullPage(resultItem)) continue;
      const { properties } = resultItem;

      let result: ConferenceHistory = {
        conferenceId: -1,
        key: "",
        title: "",
        description: "",
        openedAt: "",
        keyTags: [],
        conferenceURL: "",
        conferenceType: "",
        visible: false,
        upperConferenceId: -1,
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
    } else if (key === "conferenceType") {
      curResult.conferenceType = value;
    } else if (key === "key") {
      curResult.key = value;
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
  if (property.type === "unique_id") {
    const value = extractUniqueId({ property, defaultValue: -1 });
    curResult.conferenceId = value;
    return flatPropertiesData({ properties, curResult, idx: idx + 1 });
  }
  if (property.type === "number") {
    const value = extractNumber({ property, defaultValue: -1 });
    curResult.upperConferenceId = value;
    return flatPropertiesData({ properties, curResult, idx: idx + 1 });
  }
  return curResult;
};
