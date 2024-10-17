import { NavigationConferenceLogCategoryType } from "@/components/common/navigation/navDatas";
import { ConfLectureType } from "@/components/page/conference/main/defDatas";

export interface ConferenceLectureDetailPageProps {
  params: {
    slugs: [NavigationConferenceLogCategoryType, string];
  };
}

export interface ContentBodyProps {
  lecture: ConfLectureType | undefined;
}
