import { Client } from "@notionhq/client";
import {
  getNotionCategory1DataArgs,
  getNotionCategory1DataFuncType,
  getNotionDBDatasFuncType,
  NotionDatabaseNames,
} from "./types";
import { NotionAPIInfo } from "@/config";
import { convertCategory1Data } from "./objectDataConvert";

const notion = new Client({
  auth: process.env.NEXT_PUBLIC_NOTION_API_KEY,
});

export const getNotionDatabaseData = async (
  databaseName: NotionDatabaseNames
) => {
  const { databaseId } = NotionAPIInfo.databases[databaseName];
  try {
    const result = await notion.databases.query({
      database_id: databaseId,
      page_size: 100,
    });
    return result;
  } catch (e) {
    throw e;
  }
};

const getDBInfo = (databaseName: NotionDatabaseNames) => {
  return NotionAPIInfo.databases[databaseName];
};

export const getNotionDBDatas: getNotionDBDatasFuncType = async (args) => {
  const { databaseName } = args;
  try {
    /* if(databaseName === 'Category1') 
      return await getNotionCategory1Data(args) */
    return await getNotionCategory1Data(args);
  } catch (e) {
    throw e;
  }
};

const getNotionCategory1Data: getNotionCategory1DataFuncType = async (
  args: getNotionCategory1DataArgs
) => {
  const { databaseName } = args;
  const { databaseId } = getDBInfo(databaseName);
  try {
    const result = await notion.databases.query({
      database_id: databaseId,
      page_size: 100,
    });
    return convertCategory1Data({ result });
  } catch (e) {
    throw e;
  }
};
