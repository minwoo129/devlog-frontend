import {
  Category1,
  Category2,
  ConferenceData,
  ConferenceHistory,
  LectureData,
  YoutubeVideoData,
} from "../../DTO";

export type NotionDatabaseNames =
  | "Category1"
  | "Category2"
  | "ConferenceData"
  | "ConferenceHistory"
  | "LectureData"
  | "YoutubeVideoData";
// ================================================================================================
interface getNotionDBDatasCommonArgs {
  sorts?: getNotionDBDataSort[];
}

export interface getNotionCategory1DataArgs
  extends getNotionDBDatasCommonArgs {}

export interface getNotionCategory2DataArgs
  extends getNotionDBDatasCommonArgs {}

export interface getNotionConferenceDataArgs
  extends getNotionDBDatasCommonArgs {}

export interface getNotionConferenceHistoryDataArgs
  extends getNotionDBDatasCommonArgs {}

export interface getNotionLectureDataArgs extends getNotionDBDatasCommonArgs {}

export interface getNotionYoutubeVideoDataArgs
  extends getNotionDBDatasCommonArgs {}

// ================================================================================================
type getNotionDataByDBCommonFuncType<A, T> = (args: A) => Promise<T>;

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

// ================================================================================================
export type getNotionDBDataSort =
  | { property: string; direction: "ascending" | "descending" }
  | {
      timestamp: "created_time" | "last_edited_time";
      direction: "ascending" | "descending";
    };
