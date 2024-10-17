import { NavigationConferenceLogCategoryType } from "@/components/common/navigation/navDatas";
import { ConfLectureType } from "../main/defDatas";

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
