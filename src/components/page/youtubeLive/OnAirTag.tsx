import { classMerge } from "@/commonFunctions/tailwinds";
import { OnAirTagProps } from "./types";
import YouTubeIcon from "@mui/icons-material/YouTube";

export const OnAirTag = (props: OnAirTagProps) => {
  const { isLiveStart, className } = props;
  if (!isLiveStart) return null;

  const style = classMerge(["onAirTag", className]);
  return (
    <div className={style}>
      <YouTubeIcon sx={{ color: "#ff0000", width: 30, height: 30 }} />
      <p className="onAirTagTxt">라이브 방송 중</p>
    </div>
  );
};
