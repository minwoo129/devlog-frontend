import {
  PageObjectResponse,
  QueryDatabaseResponse,
} from "@notionhq/client/build/src/api-endpoints";
// ======================================= Common =======================================
export type convertDBDataArgs<T> = {
  result: QueryDatabaseResponse;
  initResult: T;
};

export type flatPropertiesArgs<T> = {
  properties: PageObjectResponse["properties"];
  curResult: T;
  defaultItemValues?: {
    [key in keyof T]?: T[keyof T];
  };
};
