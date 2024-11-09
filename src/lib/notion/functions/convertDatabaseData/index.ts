import { isFullPage } from "@notionhq/client";
import { convertDBDataArgs, flatPropertiesArgs } from "./types";
import {
  extractCheckbox,
  extractDate,
  extractMultiSelect,
  extractNumber,
  extractRichText,
  extractSelect,
  extractTitle,
  extractUniqueId,
  extractURL,
} from "../convertNotionOriginalData";

export const convertDBData = <T>(args: convertDBDataArgs<T>) => {
  const {
    result: { results },
    initResult,
  } = args;
  let newDatas: T[] = [];

  for (const resultItem of results) {
    if (!isFullPage(resultItem)) continue;
    const { properties } = resultItem;
    let result = { ...initResult };
    result = flatProperties<T>({ properties, curResult: result });
    newDatas.push(result);
  }
  return newDatas;
};

const flatProperties = <T>(args: flatPropertiesArgs<T>) => {
  const { properties, defaultItemValues } = args;
  let { curResult } = args;

  for (const key in curResult) {
    const property = properties[key];
    let value;
    let def;

    if (defaultItemValues) {
      def = defaultItemValues[key];
    }

    if (property.type === "rich_text") {
      value = extractRichText({ property });
    } else if (property.type === "checkbox") {
      value = extractCheckbox({ property });
    } else if (property.type === "title") {
      value = extractTitle({ property });
    } else if (property.type === "url") {
      value = extractURL({ property, defaultValue: def as string | undefined });
    } else if (property.type === "date") {
      value = extractDate({
        property,
        type: "dateTime",
        defaultDate: def as string | undefined,
      });
    } else if (property.type === "multi_select") {
      value = extractMultiSelect({ property });
    } else if (property.type === "select") {
      value = extractSelect({
        property,
        defaultValue: def as string | undefined,
      });
    } else if (property.type === "unique_id") {
      value = extractUniqueId({ property });
    } else if (property.type === "number") {
      value = extractNumber({
        property,
        defaultValue: def as number | undefined,
      });
    } else {
      continue;
    }
    const insertValue: T[keyof T] = value as T[keyof T];
    curResult = {
      ...curResult,
      [key]: insertValue,
    };
  }
  return curResult;
};
