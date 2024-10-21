import {
  ConfHistoryType,
  ConfLectureType,
  YoutubeVideoInfoType,
} from "@/commonDatas/conferences/types";
import { NavigationConferenceLogCategoryType } from "@/commonDatas/routes/types";

export interface IntroduceLayerProps {
  lecture: ConfLectureType;
}

export interface IntroduceLayerThumbnailProps {
  thumbnailURL: string;
}

export interface IntroduceLayerInfoProps {
  lecture: ConfLectureType;
}

export interface IntroduceLayerSecondInfoGridProps {
  lecture: ConfLectureType;
  conferenceName: string;
  conferenceData?: ConfHistoryType;
}

export interface IntroduceLayerSecondInfoProps {
  lecture: ConfLectureType;
  conferenceName: string;
}

export interface IntroduceLayerButtonsGroupProps {
  lecture: ConfLectureType;
  conferenceData?: ConfHistoryType;
}

export type LayerButtonGroupBtnProps =
  | YoutubeLinkBtnType
  | ConferenceLinkBtnType
  | OriginalLectureBtnType;
type YoutubeLinkBtnType = {
  type: "youtube";
  youtubeVideoInfo: YoutubeVideoInfoType;
  className?: string;
};
type ConferenceLinkBtnType = {
  type: "conference";
  conferenceData?: ConfHistoryType;
  conferenceType: NavigationConferenceLogCategoryType;
  className?: string;
};
type OriginalLectureBtnType = {
  type: "lecture";
  originalLectureURL?: string;
  className?: string;
};
export interface IntroduceLayerAtPostProps {
  title: string;
  description: string;
  createdAt: string;
  conferenceId: string;
  keyTags?: string[];
  youtubeEmbedLink: string;
}

export interface LayerAtPostVideoProps {
  youtubeEmbedLink: string;
}

export interface LayerAtPostDetailProps {
  conferenceName: string;
  title: string;
  description: string;
  createdAt: string;
  keyTags?: string[];
}
