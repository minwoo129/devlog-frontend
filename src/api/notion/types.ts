import {
  getNotionDBDataSort,
  NotionDatabaseNames,
} from "./APIRequestFunctions/database/types";

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
