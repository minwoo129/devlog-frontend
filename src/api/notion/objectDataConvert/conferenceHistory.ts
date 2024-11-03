import { isFullPage } from "@notionhq/client";
import { ConferenceHistory } from "../notionDBDTO/conferenceHistory";
import {
  convertConferenceHistoryDataFuncType,
  flatConferenceHistoryPropertiesArgs,
} from "./types";
import { extractRichText } from "../extractFromObject/page";

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
    const value = extractRichText(property);
    if (key === "title") {
      curResult.title = value;
    } else if (key === "description") {
      curResult.description = value;
    }
    return flatPropertiesData({ properties, curResult, idx: idx + 1 });
  }
  if (property.type === "title") {
    const value = property.title[0].plain_text;
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
    const value = property.date?.start ?? "2000-01-01";
    curResult.openedAt = value;
    return flatPropertiesData({ properties, curResult, idx: idx + 1 });
  }
  if (property.type === "multi_select") {
    const value = property.multi_select.map((item) => item.name);
    curResult.keyTags = value;
    return flatPropertiesData({ properties, curResult, idx: idx + 1 });
  }
  if (property.type === "url") {
    const value = property.url;
    curResult.conferenceURL = value;
    return flatPropertiesData({ properties, curResult, idx: idx + 1 });
  }
  if (property.type === "checkbox") {
    const value = property.checkbox;
    curResult.visible = value;
    return flatPropertiesData({ properties, curResult, idx: idx + 1 });
  }
  return curResult;
};
