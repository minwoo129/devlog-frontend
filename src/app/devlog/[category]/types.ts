import { NavigationDevLogCategoryType } from "@/commonDatas/routes/types";

export interface DevLogPostsPageParams {
  params: {
    category: NavigationDevLogCategoryType;
  };
  searchParams: {};
}
