import { NotionAPIInfo } from "@/config";
import { NotionDatabaseNames } from "../database/types";
import { requestNotionApiArgs } from "./types";
import NotionAPI, { getFromOneDBArgs } from "../sdkFuncs";

const getDBInfo = (databaseName: NotionDatabaseNames) => {
  return NotionAPIInfo.databases[databaseName];
};

export const requestNotionAPI = (args: requestNotionApiArgs) => {
  const { type } = args;

  // database
  const { databaseName, sorts, pageSize = 100 } = args;
  const { databaseId } = getDBInfo(databaseName);

  let apiArgs: getFromOneDBArgs = {
    database_id: databaseId,
    page_size: pageSize,
    sorts,
  };

  if (process.env.NODE_ENV === "production") {
    apiArgs = {
      ...apiArgs,
      filter: {
        property: "visible",
        checkbox: {
          equals: true,
        },
      },
    };
  }
  return NotionAPI.getFromOneDB(apiArgs);
};
