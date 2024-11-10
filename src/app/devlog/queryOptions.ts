import Notion from "@/lib/notion";

const queryKeys = {
  categorys: ["devlog"] as const,
};
const queryOptions = {
  categorys: () => ({
    queryKey: queryKeys.categorys,
    queryFn: () => Notion.DataBase.MenuCategory({ upperCategoryKey: "devlog" }),
  }),
};

export default queryOptions;
