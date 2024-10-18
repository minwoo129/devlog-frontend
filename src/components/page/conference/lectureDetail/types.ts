import { ConfLectureType } from "@/commonDatas/conferences/types";
import { NavigationConferenceLogCategoryType } from "@/components/common/navigation/navDatas";

export interface IntroduceLayerProps {
  lecture: ConfLectureType;
}

export interface IntroduceLayerThumbnailProps {
  thumbnailURL: string;
}

export interface IntroduceLayerLectureVideoProps {
  youtubeLink: string;
}

export interface IntroduceLayerInfoProps {
  title: string;
  description: string;
  createdAt: string;
  conferenceId: string;
  keyTags?: string[];
}
