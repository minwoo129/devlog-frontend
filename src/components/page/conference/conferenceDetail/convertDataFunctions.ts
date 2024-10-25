import { YoutubeLiveVisibleAreaType } from "@/commonDatas/conferences/types";
import { YoutubeLiveSchedules } from "@/commonDatas/conferences/youtubeVideos";

export const checkYoutubeLiveStatus = (area: YoutubeLiveVisibleAreaType) => {
  const liveDatas = YoutubeLiveSchedules.filter((data) =>
    data.visibleArea.includes(area)
  );

  if (liveDatas.length === 0) {
    return;
  }

  const liveDataAtArea = liveDatas.find((data) => data.isLiveStart);

  return liveDataAtArea;
};

export const getYoutubeLiveData = (id: string) => {
  return YoutubeLiveSchedules.find((data) => data.videoId === id);
};
