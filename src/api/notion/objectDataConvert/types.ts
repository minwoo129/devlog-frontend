import {
  PageObjectResponse,
  QueryDatabaseResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { Category1 } from "../notionDBDTO/category1";

export type convertCategory1DataFuncType = (
  args: convertCategory1DataArgs
) => Category1[];
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
