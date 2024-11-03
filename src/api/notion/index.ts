import { Client } from "@notionhq/client";
import {
  getNotionCategory1DataArgs,
  getNotionCategory1DataFuncType,
  getNotionCategory2DataFuncType,
  getNotionConferenceDataFuncType,
  getNotionConferenceHistoryDataFuncType,
  NotionDatabaseNames,
} from "./types";
import { NotionAPIInfo } from "@/config";
import {
  convertCategory1Data,
  convertCategory2Data,
  convertConferenceData,
  convertConferenceHistoryData,
} from "./objectDataConvert";

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

/* export const getNotionDBDatas: getNotionDBDatasFuncType = (args) => {
  const { databaseName } = args;
  const {} = args
  if(databaseName === 'Category1') 
    return getNotionCategory1Data(args)
  return getNotionCategory2Data(args);
}; */

export const getNotionCategory1Data: getNotionCategory1DataFuncType = async (
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

export const getNotionCategory2Data: getNotionCategory2DataFuncType = async (
  args
) => {
  const { databaseName } = args;
  const { databaseId } = getDBInfo(databaseName);
  try {
    const result = await notion.databases.query({
      database_id: databaseId,
      page_size: 100,
    });
    return convertCategory2Data({ result });
  } catch (e) {
    throw e;
  }
};

export const getNotionConferenceData: getNotionConferenceDataFuncType = async (
  args
) => {
  const { databaseName } = args;
  const { databaseId } = getDBInfo(databaseName);
  try {
    const result = await notion.databases.query({
      database_id: databaseId,
      page_size: 100,
    });
    return convertConferenceData({ result });
  } catch (e) {
    throw e;
  }
};

export const getNotionConferenceHistoryData: getNotionConferenceHistoryDataFuncType =
  async (args) => {
    const { databaseName } = args;
    const { databaseId } = getDBInfo(databaseName);
    try {
      const result = await notion.databases.query({
        database_id: databaseId,
        page_size: 100,
      });
      return convertConferenceHistoryData({ result });
    } catch (e) {
      throw e;
    }
  };
