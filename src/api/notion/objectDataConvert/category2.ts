import { isFullPage } from "@notionhq/client";
import { Category2 } from "../notionDBDTO/category2";
import {
  convertCategory2DataFuncType,
  flatCategory2PropertiesArgs,
} from "./types";
import {
  extractCheckbox,
  extractNumber,
  extractRichText,
  extractTitle,
  extractUniqueId,
} from "../extractFromObject";

const dataKeys: (keyof Category2)[] = [
  "categoryId",
  "key",
  "title",
  "description",
  "href",
  "visible",
  "upperCategoryId",
];

export const convertCategory2Data: convertCategory2DataFuncType = (args) => {
  const { result } = args;
  let newDatas: Category2[] = [];
  const { results } = result;
  for (const resultItem of results) {
    if (!isFullPage(resultItem)) continue;
    const { properties } = resultItem;
    let result: Category2 = {
      categoryId: 0,
      key: "",
      title: "",
      description: "",
      href: "",
      upperCategoryId: 0,
      visible: false,
    };
    result = flatPropertiesData({ properties, curResult: result, idx: 0 });
    newDatas.push(result);
  }
  return newDatas;
};

const flatPropertiesData = (args: flatCategory2PropertiesArgs) => {
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
    curResult.upperCategoryId = value;
    return flatPropertiesData({ properties, curResult, idx: idx + 1 });
  }
  if (property.type === "unique_id") {
    const value = extractUniqueId({ property });
    curResult.categoryId = value;
    return flatPropertiesData({ properties, curResult, idx: idx + 1 });
  }
  return curResult;
};
