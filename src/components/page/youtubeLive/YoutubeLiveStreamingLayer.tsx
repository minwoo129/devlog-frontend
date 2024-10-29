import { LiveStreamingDetail } from "./LiveStreamingDetail";
import { YoutubeLiveStreamingLayerProps } from "./types";
import { YoutubeVideo } from "./YoutubeVideo";

export const YoutubeLiveStreamingLayer = (
  args: YoutubeLiveStreamingLayerProps
) => {
  const { liveData } = args;
  return (
    <div className=" youtubeLivePopup streamingLayer containerLayer">
      <YoutubeVideo liveData={liveData} />
      <LiveStreamingDetail liveData={liveData} />
    </div>
  );
};
