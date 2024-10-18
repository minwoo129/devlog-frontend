import { NavigationConferenceLogCategoryType } from "@/commonDatas/routes/types";

export interface ConferenceLogPostsPageProps {
  params: {
    category: NavigationConferenceLogCategoryType;
  };
}

export interface ContentBodyProps {
  category: NavigationConferenceLogCategoryType;
}
