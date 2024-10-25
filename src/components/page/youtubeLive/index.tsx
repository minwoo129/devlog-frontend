import {
  LiveStreamingDetailProps,
  OnAirTagProps,
  YoutubeLiveDataEmptyLayerProps,
  YoutubeLiveStreamingLayerProps,
  YoutubeVideoProps,
} from "./types";
import YouTubeIcon from "@mui/icons-material/YouTube";

export const YoutubeLiveDataEmptyLayer = (
  args: YoutubeLiveDataEmptyLayerProps
) => {
  return (
    <div className=" rounded-xl w-full flex justify-center items-center h-full">
      <h1 className="text-5xl font-nanumneo-eb text-slate-700">
        동영상 정보가 존재하지 않습니다
      </h1>
    </div>
  );
};

export const YoutubeLiveStreamingLayer = (
  args: YoutubeLiveStreamingLayerProps
) => {
  const { liveData } = args;
  return (
    <div className=" flex flex-col xl:flex-row justify-start items-start w-full h-full overflow-y-scroll scrollbar-hide">
      <YoutubeVideo liveData={liveData} />
      <LiveStreamingDetail liveData={liveData} />
    </div>
  );
};

const YoutubeVideo = (args: YoutubeVideoProps) => {
  const { liveData } = args;
  const { embedURL } = liveData;
  return (
    <div className="w-full xl:w-[850px] aspect-video xl:mt-10 ">
      <iframe src={embedURL} width={"100%"} height={"100%"} />
    </div>
  );
};

const LiveStreamingDetail = (args: LiveStreamingDetailProps) => {
  const { liveData } = args;
  const { title, description, isLiveStart, channelTitle } = liveData;
  return (
    <div className="w-full xl:w-[500px] rounded-2xl flex flex-col justify-start items-start p-6 mt-10 xl:ml-3 bg-green-200 shadow-xl">
      <OnAirTag isLiveStart={isLiveStart} />
      <h1 className="text-xl font-nanumneo-eb text-zinc-800">{title}</h1>
      <p className="text-lg font-nanumneo-b mt-1 text-zinc-600">
        {channelTitle}
      </p>
      <p className=" font-nanumneo-r mt-5 text-zinc-600">{description}</p>
      <p className=" font-nanumneo-r mt-5 text-zinc-400 flex flex-row justify-center items-center">
        본 데이터는 Youtube Data API를 통해 수집한 데이터입니다.
      </p>
    </div>
  );
};

const OnAirTag = (props: OnAirTagProps) => {
  const { isLiveStart } = props;
  if (!isLiveStart) return null;

  return (
    <div className="border-2 border-[#ff0000] rounded-full px-3 py-1 mb-4 flex flex-row justify-center items-center">
      <YouTubeIcon sx={{ color: "#ff0000", width: 30, height: 30 }} />
      <p className="text-[#ff0000] text-lg font-nanumneo-eb ml-1">
        라이브 방송 중
      </p>
    </div>
  );
};
