import { NavigationConferenceLogCategoryType } from "@/components/common/navigation/navDatas";

export interface ConferenceLogPostsPageProps {
  params: {
    category: NavigationConferenceLogCategoryType;
  };
}

export interface ContentBodyProps {
  category: NavigationConferenceLogCategoryType;
}
