import { Category1 } from "./notionDBDTO/category1";
import { convertCategory1DataExtendArgs } from "./objectDataConvert/types";

export type NotionDatabaseNames =
  | "Category1"
  | "Category2"
  | "ConferenceData"
  | "ConferenceHistory"
  | "LectureData"
  | "YoutubeVideoData";
export type NotionAPIInfoType = {
  APIKey: string;
  databases: NotionDatabasesType;
};

type NotionDatabasesType = {
  [key in NotionDatabaseNames]: NotionDatabaseInfoType;
};

export type NotionDatabaseInfoType = {
  name: NotionDatabaseNames;
  databaseId: string;
  queryObj: null;
};

// ============================================================
export type getNotionDBDatasArgs =
  | getNotionCategory1DataArgs
  | getNotionCategory2DataArgs
  | getNotionConferenceDataArgs
  | getNotionConferenceHistoryDataArgs
  | getNotionLectureDataArgs
  | getNotionYoutubeVideoDataArgs;

interface getNotionDBDatasCommonArgs<N = NotionDatabaseNames> {
  databaseName: N;
}

export interface getNotionCategory1DataArgs
  extends getNotionDBDatasCommonArgs<"Category1">,
    convertCategory1DataExtendArgs {}

export interface getNotionCategory2DataArgs
  extends getNotionDBDatasCommonArgs<"Category2"> {}

export interface getNotionConferenceDataArgs
  extends getNotionDBDatasCommonArgs<"ConferenceData"> {}

export interface getNotionConferenceHistoryDataArgs
  extends getNotionDBDatasCommonArgs<"ConferenceHistory"> {}

export interface getNotionLectureDataArgs
  extends getNotionDBDatasCommonArgs<"LectureData"> {}

export interface getNotionYoutubeVideoDataArgs
  extends getNotionDBDatasCommonArgs<"YoutubeVideoData"> {}

// ============================================================
export type getNotionDBDatasFuncType = getNotionCategory1DataFuncType;

export type getNotionCategory1DataFuncType = (
  args: getNotionCategory1DataArgs
) => Promise<Category1[]>;
export type getNotionCategory2DataFuncType = (
  args: getNotionCategory2DataArgs
) => Promise<Category1[]>;
