import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import dayjs from "dayjs";
import {
  extractCheckboxArgs,
  extractDateArgs,
  extractMultiSelectArgs,
  extractNumberArgs,
  extractRichTextArgs,
  extractSelectArgs,
  extractTitleArgs,
  extractUniqueIdArgs,
  extractURLArgs,
} from "./types";

export const extractRichText = (args: extractRichTextArgs) => {
  const { property } = args;
  const item = property.rich_text[0];
  if (item.type !== "text") {
    return "";
  }
  return item.text.content;
};

export const extractCheckbox = (args: extractCheckboxArgs) => {
  const { property } = args;
  return property.checkbox;
};

export const extractTitle = (args: extractTitleArgs) => {
  const { property } = args;
  return property.title[0].plain_text;
};

export const extractURL = (args: extractURLArgs) => {
  const { property, defaultValue = "" } = args;
  return property.url ?? defaultValue;
};

export const extractDate = (args: extractDateArgs) => {
  const { property, type, defaultDate } = args;
  const dateV = dayjs(property.date?.start ?? defaultDate);
  if (type === "date") return dateV.format("YYYY-MM-DD");
  return dateV.format("YYYY-MM-DDTHH:mm:ss");
};

export const extractMultiSelect = (args: extractMultiSelectArgs) => {
  const { property } = args;
  return property.multi_select.map((item) => item.name);
};

export const extractSelect = (args: extractSelectArgs) => {
  const { property, defaultValue = "" } = args;
  return property.select?.name ?? defaultValue;
};

export const extractUniqueId = (args: extractUniqueIdArgs) => {
  const { property, defaultValue = 0 } = args;
  return property.unique_id.number ?? defaultValue;
};

export const extractUniqueIdForStr = (args: extractUniqueIdArgs) => {
  const { property, defaultValue = 0 } = args;
  const { prefix, number } = property.unique_id;
  if (!prefix) {
    return `${number ?? defaultValue}`;
  }
  return `${prefix}-${number ?? defaultValue}`;
};

export const extractNumber = (args: extractNumberArgs) => {
  const { property, defaultValue = 0 } = args;
  return property.number ?? defaultValue;
};
