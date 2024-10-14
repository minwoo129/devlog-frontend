import { introduceDatas } from "@/lib/introduceData";
import { IntroduceLayerProps } from "./types";

export default function IntroduceLayer(args: IntroduceLayerProps) {
  const { category } = args;
  const introduceData = introduceDatas[category];

  if (!introduceData) {
    return <div className="w-full h-20" />;
  }

  const { image, title, description } = introduceData;
  return (
    <div className="flex flex-row justify-start items-center w-full h-fit mt-10 rounded-xl p-4 border-2 border-blue-500">
      <h1>fsdaf</h1>
    </div>
  );
}
