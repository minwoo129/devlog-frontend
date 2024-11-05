import {
  PageObjectResponse,
  QueryDatabaseResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { Category1 } from "../notionDBDTO/category1";
import { Category2 } from "../notionDBDTO/category2";
import { ConferenceData } from "../notionDBDTO/conferenceData";
import { ConferenceHistory } from "../notionDBDTO/conferenceHistory";
import { LectureData } from "../notionDBDTO/LectureData";
import { YoutubeVideoData } from "../notionDBDTO/youtubeVideoData";

type convertDataCommonArgs<A, T> = (args: A) => T;
// ======================================= Common =======================================
export type convertDBDataArgs<T> = {
  result: QueryDatabaseResponse;
  initResult: T;
};

export type flatPropertiesArgs<T> = {
  properties: PageObjectResponse["properties"];
  curResult: T;
  idx: number;
  defaultItemValues?: {
    [key in keyof T]?: T[keyof T];
  };
};

// ======================================= Category1 =======================================
export type convertCategory1DataFuncType = convertDataCommonArgs<
  convertCategory1DataArgs,
  Category1[]
>;
/* export type convertCategory1DataFuncType = (
  args: convertCategory1DataArgs
) => Category1[]; */
export interface convertCategory1DataArgs
  extends convertCategory1DataExtendArgs {
  result: QueryDatabaseResponse;
}

export interface convertCategory1DataExtendArgs {}

export type flatCategory1PropertiesArgs = {
  properties: PageObjectResponse["properties"];
  curResult: Category1;
  idx: number;
};

// ======================================= Category2 =======================================
export type convertCategory2DataFuncType = convertDataCommonArgs<
  convertCategory2DataArgs,
  Category2[]
>;
export interface convertCategory2DataArgs
  extends convertCategory2DataExtendArgs {
  result: QueryDatabaseResponse;
}
export interface convertCategory2DataExtendArgs {}

export type flatCategory2PropertiesArgs = {
  properties: PageObjectResponse["properties"];
  curResult: Category2;
  idx: number;
};

// ======================================= ConferenceData =======================================
export type convertConferenceDataFuncType = convertDataCommonArgs<
  convertConferenceDataArgs,
  ConferenceData[]
>;

export interface convertConferenceDataArgs
  extends convertConferenceDataExtendArgs {
  result: QueryDatabaseResponse;
}

export interface convertConferenceDataExtendArgs {}

export type flatConferenceDataPropertiesArgs = {
  properties: PageObjectResponse["properties"];
  curResult: ConferenceData;
  idx: number;
};

// ======================================= ConferenceHistory =======================================
export type convertConferenceHistoryDataFuncType = convertDataCommonArgs<
  convertConferenceHistoryDataArgs,
  ConferenceHistory[]
>;

export interface convertConferenceHistoryDataArgs
  extends convertConferenceHistoryDataExtendArgs {
  result: QueryDatabaseResponse;
}

export interface convertConferenceHistoryDataExtendArgs {}

export type flatConferenceHistoryPropertiesArgs = {
  properties: PageObjectResponse["properties"];
  curResult: ConferenceHistory;
  idx: number;
};

// ======================================= LectureData =======================================
export type convertLectureDataFuncType = convertDataCommonArgs<
  convertLectureDataArgs,
  LectureData[]
>;

export interface convertLectureDataArgs extends convertLectureDataExtendArgs {
  result: QueryDatabaseResponse;
}

export interface convertLectureDataExtendArgs {}

export type flatLectureDataPropertiesArgs = {
  properties: PageObjectResponse["properties"];
  curResult: LectureData;
  idx: number;
};

// ======================================= YoutubeVideoData =======================================
export type convertYoutubeVideoDataFuncType = convertDataCommonArgs<
  convertYoutubeVideoDataArgs,
  YoutubeVideoData[]
>;

export interface convertYoutubeVideoDataArgs
  extends convertYoutubeVideoDataExtendArgs {
  result: QueryDatabaseResponse;
}

export interface convertYoutubeVideoDataExtendArgs {}

export type flatYoutubeVideoDataPropertiesArgs = {
  properties: PageObjectResponse["properties"];
  curResult: YoutubeVideoData;
  idx: number;
};
