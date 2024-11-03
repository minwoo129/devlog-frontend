import {
  PageObjectResponse,
  QueryDatabaseResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { Category1 } from "../notionDBDTO/category1";
import { Category2 } from "../notionDBDTO/category2";

type convertDataCommonArgs<A, T> = (args: A) => T;

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
