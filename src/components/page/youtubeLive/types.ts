import { YoutubeLiveScheduleType } from "@/commonDatas/conferences/types";

export interface YoutubeLiveDataEmptyLayerProps {}

export interface YoutubeLiveStreamingLayerProps {
  liveData: YoutubeLiveScheduleType;
}

export interface YoutubeVideoProps {
  liveData: YoutubeLiveScheduleType;
}

export interface LiveStreamingDetailProps {
  liveData: YoutubeLiveScheduleType;
}

export interface OnAirTagProps {
  isLiveStart: boolean;
}
