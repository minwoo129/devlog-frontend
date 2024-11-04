import { isFullPage } from "@notionhq/client";
import { LectureData } from "../notionDBDTO/LectureData";
import {
  convertLectureDataFuncType,
  flatLectureDataPropertiesArgs,
} from "./types";
import { extractRichText } from "../extractFromObject/page";
import dayjs from "dayjs";

const dataKeys: (keyof LectureData)[] = [
  "id",
  "title",
  "description",
  "originalLectureURL",
  "createdAt",
  "videoId",
  "href",
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
      id: "",
      title: "",
      description: "",
      conferenceType: "",
      originalLectureURL: "",
      createdAt: "",
      videoId: "",
      href: "",
      conferenceId: "",
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
    const value = extractRichText(property);
    if (key === "href") {
      curResult.href = value;
    } else if (key === "title") {
      curResult.title = value;
    } else if (key === "videoId") {
      curResult.videoId = value;
    } else if (key === "description") {
      curResult.description = value;
    }
    return flatPropertiesData({ properties, curResult, idx: idx + 1 });
  }
  if (property.type === "checkbox") {
    const value = property.checkbox;
    if (key === "visible") {
      curResult.visible = value;
    }
    return flatPropertiesData({ properties, curResult, idx: idx + 1 });
  }
  if (property.type === "url") {
    const value = property.url;
    if (key === "originalLectureURL") {
      curResult.originalLectureURL = value;
    }
    return flatPropertiesData({ properties, curResult, idx: idx + 1 });
  }
  if (property.type === "date") {
    const value = dayjs(property.date?.start ?? "").format(
      "YYYY-MM-DDTHH:mm:ss"
    );
    if (key === "createdAt") {
      curResult.createdAt = value;
    }
    return flatPropertiesData({ properties, curResult, idx: idx + 1 });
  }
  if (property.type === "title") {
    const value = property.title[0].plain_text;
    if (key === "id") {
      curResult.id = value;
    }
    const [_, year, publisher, id] = value.split("_");
    let conferenceType = "";
    let conferenceId = `ch_${year}_${publisher}`;
    if (publisher === "google") {
      conferenceType = "google-io";
    } else {
      conferenceType = "toss-slash";
    }
    curResult.conferenceType = conferenceType;
    curResult.conferenceId = conferenceId;
    return flatPropertiesData({ properties, curResult, idx: idx + 1 });
  }

  return curResult;
};
