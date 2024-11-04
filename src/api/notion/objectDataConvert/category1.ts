import { Category1 } from "../notionDBDTO/category1";
import {
  convertCategory1DataFuncType,
  flatCategory1PropertiesArgs,
} from "./types";
import { isFullPage } from "@notionhq/client";
import {
  extractCheckbox,
  extractRichText,
  extractTitle,
} from "../extractFromObject";

const dataKeys: (keyof Category1)[] = ["href", "key", "title", "visible"];

export const convertCategory1Data: convertCategory1DataFuncType = (args) => {
  const { result } = args;
  const { results } = result;
  let newDatas: Category1[] = [];

  for (const resultItem of results) {
    if (!isFullPage(resultItem)) continue;
    const { properties } = resultItem;

    let result: Category1 = {
      href: "",
      key: "",
      title: "",
      visible: false,
    };

    result = flatPropertiesData({ properties, curResult: result, idx: 0 });
    newDatas.push(result);
  }
  return newDatas;
};

const flatPropertiesData = (args: flatCategory1PropertiesArgs) => {
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
