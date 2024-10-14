import { introduceDatas } from "@/lib/introduceData";
import { IntroduceLayerProps } from "./types";
import ReactNativeLogo from "../../../../../assets/svgImages/react-native.svg";
import SVGImage from "@/components/common/SVGImage";

export default function IntroduceLayer(args: IntroduceLayerProps) {
  const { category } = args;
  const introduceData = introduceDatas[category];

  if (!introduceData) {
    return <div className="w-full h-20" />;
  }

  const { image, title, description } = introduceData;
  return (
    <div className="flex flex-row justify-start items-center w-full h-fit mt-10 rounded-xl p-4 border-2 border-blue-500">
      {/* <ReactNativeLogo width={200} height={200} /> */}
      <SVGImage name={image} width={200} height={200} />
      <h1>fsdaf</h1>
    </div>
  );
}
