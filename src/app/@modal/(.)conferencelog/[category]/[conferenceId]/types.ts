import { ConfHistoryType } from "@/commonDatas/conferences/types";
import { NavigationConferenceLogCategoryType } from "@/commonDatas/routes/types";

export interface YearConfDetailInterceptPageProps {
  params: {
    category: NavigationConferenceLogCategoryType;
    conferenceId: string;
  };
}
