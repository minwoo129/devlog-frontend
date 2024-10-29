import { YoutubeLiveDataEmptyLayerProps } from "./types";

export const YoutubeLiveDataEmptyLayer = (
  args: YoutubeLiveDataEmptyLayerProps
) => {
  return (
    <div className=" youtubeLivePopup emptyLayer containerLayer">
      <h1 className="youtubeLivePopup emptyLayer titleTxt">
        동영상 정보가 존재하지 않습니다
      </h1>
    </div>
  );
};
