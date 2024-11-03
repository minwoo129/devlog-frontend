import { Category1 } from "./notionDBDTO/category1";
import { Category2 } from "./notionDBDTO/category2";
import { ConferenceData } from "./notionDBDTO/conferenceData";
import {
  convertCategory1DataExtendArgs,
  convertCategory2DataExtendArgs,
  convertConferenceDataExtendArgs,
} from "./objectDataConvert/types";

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
  extends getNotionDBDatasCommonArgs<"Category2">,
    convertCategory2DataExtendArgs {}

export interface getNotionConferenceDataArgs
  extends getNotionDBDatasCommonArgs<"ConferenceData">,
    convertConferenceDataExtendArgs {}

export interface getNotionConferenceHistoryDataArgs
  extends getNotionDBDatasCommonArgs<"ConferenceHistory"> {}

export interface getNotionLectureDataArgs
  extends getNotionDBDatasCommonArgs<"LectureData"> {}

export interface getNotionYoutubeVideoDataArgs
  extends getNotionDBDatasCommonArgs<"YoutubeVideoData"> {}

// ============================================================
type getNotionDataByDBCommonFuncType<A, T> = (args: A) => Promise<T>;

export type getNotionDBDatasFuncType =
  | getNotionCategory1DataFuncType
  | getNotionCategory2DataFuncType;

export type getNotionCategory1DataFuncType = getNotionDataByDBCommonFuncType<
  getNotionCategory1DataArgs,
  Category1[]
>;
export type getNotionCategory2DataFuncType = getNotionDataByDBCommonFuncType<
  getNotionCategory2DataArgs,
  Category2[]
>;

export type getNotionConferenceDataFuncType = getNotionDataByDBCommonFuncType<
  getNotionConferenceDataArgs,
  ConferenceData[]
>;
