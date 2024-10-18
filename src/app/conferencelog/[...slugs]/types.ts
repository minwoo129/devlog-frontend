import { ConfLectureType } from "@/commonDatas/conferences/types";
import { NavigationConferenceLogCategoryType } from "@/components/common/navigation/navDatas";

export interface ConferenceLectureDetailPageProps {
  params: {
    slugs: [NavigationConferenceLogCategoryType, string];
  };
}

export interface ContentBodyProps {
  lecture: ConfLectureType | undefined;
}
