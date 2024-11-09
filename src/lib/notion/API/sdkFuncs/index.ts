import { NotionAPIInfo } from "@/config";
import { Client } from "@notionhq/client";

const notion = new Client({
  auth: NotionAPIInfo.APIKey,
});

const {
  databases: { query },
} = notion;

export type getFromOneDBArgs = Parameters<typeof query>[0];

const APIObj = {
  getFromOneDB: async (args: Parameters<typeof query>[0]) => query({ ...args }),
};

export default APIObj;
