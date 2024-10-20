import { ConfLectureType } from "@/commonDatas/conferences/types";

export interface IntroduceLayerProps {
  lecture: ConfLectureType;
}

export interface IntroduceLayerThumbnailProps {
  thumbnailURL: string;
}

export interface IntroduceLayerInfoProps {
  title: string;
  description: string;
  createdAt: string;
  conferenceId: string;
  keyTags?: string[];
  thumbnailURL: string;
}

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
