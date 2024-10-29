import { InfoLayer } from "./InfoLayer";
import { OnAirTag } from "./OnAirTag";
import { LiveStreamingDetailProps } from "./types";

export const LiveStreamingDetail = (args: LiveStreamingDetailProps) => {
  const { liveData } = args;
  const { title, description, isLiveStart, channelTitle } = liveData;
  return (
    <div className="youtubeLivePopup streamingLayer detail detailLayer">
      <div className="youtubeLivePopup streamingLayer detail videoInfoLayer">
        <OnAirTag isLiveStart={isLiveStart} className="mb-4" />
        <h1 className="youtubeLivePopup streamingLayer detail titleTxt">
          {title}
        </h1>
        <p className="youtubeLivePopup streamingLayer detail channelTitle">
          {channelTitle}
        </p>
        <p className=" youtubeLivePopup streamingLayer detail description">
          {description}
        </p>
      </div>
      <InfoLayer />
    </div>
  );
};
