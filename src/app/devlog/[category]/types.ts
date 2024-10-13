import { NavigationDevLogCategoryType } from "@/components/common/navigation/navDatas";

export interface DevLogPostsPageParams {
  params: {
    category: NavigationDevLogCategoryType;
  };
  searchParams: {};
}
