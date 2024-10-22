import { YoutubeLiveScheduleType } from "@/commonDatas/conferences/types";

export interface YoutubeLivePopupProps {
  liveData?: YoutubeLiveScheduleType;
  open: boolean;
  onClose: () => void;
}

export interface LiveDataEmptyLayerProps {}

export interface LiveStreamingLayerProps {
  liveData: YoutubeLiveScheduleType;
}

export interface VideoProps {
  liveData: YoutubeLiveScheduleType;
}

export interface LiveStreamingDetailProps {
  liveData: YoutubeLiveScheduleType;
}

export interface OnAirTagProps {
  isLiveStart: boolean;
}
