import { Category1 } from "./notionDBDTO/category1";
import { Category2 } from "./notionDBDTO/category2";
import { ConferenceData } from "./notionDBDTO/conferenceData";
import { ConferenceHistory } from "./notionDBDTO/conferenceHistory";
import { LectureData } from "./notionDBDTO/LectureData";
import { YoutubeVideoData } from "./notionDBDTO/youtubeVideoData";
import {
  convertCategory1DataExtendArgs,
  convertCategory2DataExtendArgs,
  convertConferenceDataExtendArgs,
  convertConferenceHistoryDataExtendArgs,
  convertLectureDataExtendArgs,
  convertYoutubeVideoDataExtendArgs,
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
export type requestNotionApiArgs = {
  type: "database";
  databaseName: NotionDatabaseNames;
  sorts: getNotionDBDataSort[];
  pageSize?: number;
};
// ============================================================
export type getNotionDBDatasArgs =
  | getNotionCategory1DataArgs
  | getNotionCategory2DataArgs
  | getNotionConferenceDataArgs
  | getNotionConferenceHistoryDataArgs
  | getNotionLectureDataArgs
  | getNotionYoutubeVideoDataArgs;

interface getNotionDBDatasCommonArgs {
  sorts?: getNotionDBDataSort[];
}

export type getNotionDBDataSort =
  | { property: string; direction: "ascending" | "descending" }
  | {
      timestamp: "created_time" | "last_edited_time";
      direction: "ascending" | "descending";
    };

export interface getNotionCategory1DataArgs
  extends getNotionDBDatasCommonArgs,
    convertCategory1DataExtendArgs {}

export interface getNotionCategory2DataArgs
  extends getNotionDBDatasCommonArgs,
    convertCategory2DataExtendArgs {}

export interface getNotionConferenceDataArgs
  extends getNotionDBDatasCommonArgs,
    convertConferenceDataExtendArgs {}

export interface getNotionConferenceHistoryDataArgs
  extends getNotionDBDatasCommonArgs,
    convertConferenceHistoryDataExtendArgs {}

export interface getNotionLectureDataArgs
  extends getNotionDBDatasCommonArgs,
    convertLectureDataExtendArgs {}

export interface getNotionYoutubeVideoDataArgs
  extends getNotionDBDatasCommonArgs,
    convertYoutubeVideoDataExtendArgs {}

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

export type getNotionConferenceHistoryDataFuncType =
  getNotionDataByDBCommonFuncType<
    getNotionConferenceHistoryDataArgs,
    ConferenceHistory[]
  >;

export type getNotionLectureDataFuncType = getNotionDataByDBCommonFuncType<
  getNotionLectureDataArgs,
  LectureData[]
>;

export type getNotionYoutubeVideoDataFuncType = getNotionDataByDBCommonFuncType<
  getNotionYoutubeVideoDataArgs,
  YoutubeVideoData[]
>;
