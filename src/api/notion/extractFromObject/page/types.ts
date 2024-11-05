import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

type ExtractPropertyType<T> = Extract<
  PageObjectResponse["properties"][string],
  { type: T }
>;

interface commonExtractFuncArgs<T> {
  property: ExtractPropertyType<T>;
}

export interface extractRichTextArgs
  extends commonExtractFuncArgs<"rich_text"> {}

export interface extractCheckboxArgs
  extends commonExtractFuncArgs<"checkbox"> {}

export interface extractTitleArgs extends commonExtractFuncArgs<"title"> {}

export interface extractURLArgs extends commonExtractFuncArgs<"url"> {
  defaultValue?: string;
}

export interface extractDateArgs extends commonExtractFuncArgs<"date"> {
  type: "date" | "dateTime";
  defaultDate?: string;
}

export interface extractMultiSelectArgs
  extends commonExtractFuncArgs<"multi_select"> {}

export interface extractSelectArgs extends commonExtractFuncArgs<"select"> {
  defaultValue?: string;
}

export interface extractUniqueIdArgs
  extends commonExtractFuncArgs<"unique_id"> {
  defaultValue?: number;
}

export interface extractNumberArgs extends commonExtractFuncArgs<"number"> {
  defaultValue?: number;
}
