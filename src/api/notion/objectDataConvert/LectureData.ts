import { isFullPage } from "@notionhq/client";
import { LectureData } from "../notionDBDTO/LectureData";
import {
  convertLectureDataFuncType,
  flatLectureDataPropertiesArgs,
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

const dataKeys: (keyof LectureData)[] = [
  "lectureId",
  "key",
  "title",
  "description",
  "conferenceId",
  "upperConferenceId",
  "originalLectureURL",
  "createdAt",
  "videoId",
  "href",
  "keyTags",
  "visible",
];

export const convertLectureData: convertLectureDataFuncType = (args) => {
  const {
    result: { results },
  } = args;
  let newDatas: LectureData[] = [];

  for (const resultItem of results) {
    if (!isFullPage(resultItem)) continue;
    const { properties } = resultItem;
    let result: LectureData = {
      lectureId: -1,
      key: "",
      title: "",
      description: "",
      conferenceId: -1,
      upperConferenceId: -1,
      originalLectureURL: "",
      createdAt: "",
      videoId: "",
      href: "",
      visible: false,
    };
    result = flatPropertiesData({ properties, curResult: result, idx: 0 });
    newDatas.push(result);
  }
  return newDatas;
};

const flatPropertiesData = (args: flatLectureDataPropertiesArgs) => {
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
    } else if (key === "videoId") {
      curResult.videoId = value;
    } else if (key === "description") {
      curResult.description = value;
    } else if (key === "key") {
      curResult.key = value;
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
  if (property.type === "url") {
    const value = extractURL({ property });
    if (key === "originalLectureURL") {
      curResult.originalLectureURL = value;
    }
    return flatPropertiesData({ properties, curResult, idx: idx + 1 });
  }
  if (property.type === "date") {
    const value = extractDate({ property, type: "dateTime" });
    if (key === "createdAt") {
      curResult.createdAt = value;
    }
    return flatPropertiesData({ properties, curResult, idx: idx + 1 });
  }
  if (property.type === "unique_id") {
    const value = extractUniqueId({ property, defaultValue: -1 });
    curResult.lectureId = value;
    return flatPropertiesData({ properties, curResult, idx: idx + 1 });
  }
  if (property.type === "number") {
    const value = extractNumber({ property, defaultValue: -1 });
    if (key === "conferenceId") {
      curResult.conferenceId = value;
    } else if (key === "upperConferenceId") {
      curResult.upperConferenceId = value;
    }
    return flatPropertiesData({ properties, curResult, idx: idx + 1 });
  }
  if (property.type === "multi_select") {
    const value = extractMultiSelect({ property });
    if (key === "keyTags") {
      if (value.length > 0) {
        curResult.keyTags = value;
      }
    }
    return flatPropertiesData({ properties, curResult, idx: idx + 1 });
  }

  return curResult;
};
