import { getNotionDBDataSort, NotionDatabaseNames } from "../database/types";

export type requestNotionApiArgs = {
  type: "database";
  databaseName: NotionDatabaseNames;
  sorts: getNotionDBDataSort[];
  pageSize?: number;
};
