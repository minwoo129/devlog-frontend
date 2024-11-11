import { NotionDatabaseNames } from "./API/database/types";

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

// ============================================================
