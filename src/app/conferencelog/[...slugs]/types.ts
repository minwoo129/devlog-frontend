import { ConfLectureType } from "@/commonDatas/conferences/types";
import { NavigationConferenceLogCategoryType } from "@/commonDatas/routes/types";

export interface ConferenceLectureDetailPageProps {
  params: {
    slugs: [NavigationConferenceLogCategoryType, string];
  };
}

export interface ContentBodyProps {
  lecture: ConfLectureType | undefined;
}
