import { YoutubeVideoProps } from "./types";

export const YoutubeVideo = (args: YoutubeVideoProps) => {
  const { liveData } = args;
  const { embedURL } = liveData;
  return (
    <div className="youtubeLivePopup streamingLayer videoLayer ">
      <iframe src={embedURL} width={"100%"} height={"100%"} />
    </div>
  );
};
