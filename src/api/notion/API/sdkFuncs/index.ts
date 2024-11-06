import { NotionAPIInfo } from "@/config";
import { Client } from "@notionhq/client";

const notion = new Client({
  auth: NotionAPIInfo.APIKey,
});

const {
  databases: { query },
} = notion;

const APIObj = {
  getFromOneDB: async (args: Parameters<typeof query>[0]) => query({ ...args }),
};

export default APIObj;
