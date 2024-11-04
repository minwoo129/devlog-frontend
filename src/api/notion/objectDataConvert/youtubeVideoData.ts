import { isFullPage } from "@notionhq/client";
import { YoutubeVideoData } from "../notionDBDTO/youtubeVideoData";
import {
  convertYoutubeVideoDataFuncType,
  flatYoutubeVideoDataPropertiesArgs,
} from "./types";
import { extractRichText } from "../extractFromObject/page";
import dayjs from "dayjs";

const dataKeys: (keyof YoutubeVideoData)[] = [
  "youtubeVideoId",
  "title",
  "description",
  "thumbnailURL",
  "embedURL",
  "publishedAt",
  "accessURL",
  "videoType",
  "visible",
];

export const convertYoutubeVideoData: convertYoutubeVideoDataFuncType = (
  args
) => {
  const {
    result: { results },
  } = args;
  let newDatas: YoutubeVideoData[] = [];

  for (const resultItem of results) {
    if (!isFullPage(resultItem)) continue;
    const { properties } = resultItem;

    let result: YoutubeVideoData = {
      youtubeVideoId: "",
      title: "",
      description: "",
      thumbnailURL: "",
      embedURL: "",
      publishedAt: "",
      accessURL: "",
      videoType: "uploaded",
      visible: false,
    };

    result = flatPropertiesData({ properties, curResult: result, idx: 0 });
    newDatas.push(result);
  }

  return newDatas;
};

const flatPropertiesData = (args: flatYoutubeVideoDataPropertiesArgs) => {
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
  if (property.type === "checkbox") {
    const value = property.checkbox;
    if (key === "visible") {
      curResult.visible = value;
    }
    return flatPropertiesData({ properties, curResult, idx: idx + 1 });
  }
  if (property.type === "select") {
    const value = property.select?.name ?? "uploaded";
    if (key === "videoType") {
      curResult.videoType = value === "uploaded" ? "uploaded" : "live";
    }
    return flatPropertiesData({ properties, curResult, idx: idx + 1 });
  }
  if (property.type === "date") {
    const value = dayjs(property.date?.start ?? "").format(
      "YYYY-MM-DDTHH:mm:ss"
    );
    if (key === "publishedAt") {
      curResult.publishedAt = value;
    }
    return flatPropertiesData({ properties, curResult, idx: idx + 1 });
  }
  if (property.type === "url") {
    const value = property.url ?? "";
    if (key === "accessURL") {
      curResult.accessURL = value;
    } else if (key === "thumbnailURL") {
      curResult.thumbnailURL = value;
    } else if (key === "embedURL") {
      curResult.embedURL = value;
    }
    return flatPropertiesData({ properties, curResult, idx: idx + 1 });
  }
  if (property.type === "title") {
    const value = property.title[0].plain_text;
    if (key === "youtubeVideoId") {
      curResult.youtubeVideoId = value;
    }
    return flatPropertiesData({ properties, curResult, idx: idx + 1 });
  }
  return curResult;
};
