import { classMerge } from "@/commonFunctions/tailwinds";
import { PageLayerProps } from "./types";

export default function PageLayer(args: PageLayerProps) {
  const { className, children } = args;

  const style = classMerge([
    "flex-1 flex-col overflow-y-scroll px-16",
    className,
  ]);
  return <div className={style}>{children}</div>;
}
