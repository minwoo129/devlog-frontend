import { NotionAPIInfo } from "@/config";
import { NotionDatabaseNames, requestNotionApiArgs } from "./types";
import NotionAPI from "@/utils/NotionAPI";

const getDBInfo = (databaseName: NotionDatabaseNames) => {
  return NotionAPIInfo.databases[databaseName];
};

export const requestNotionAPI = (args: requestNotionApiArgs) => {
  const { type } = args;

  // database
  const { databaseName, sorts, pageSize = 100 } = args;
  const { databaseId } = getDBInfo(databaseName);
  return NotionAPI.getFromOneDB({
    database_id: databaseId,
    page_size: pageSize,
    sorts,
  });
};
