import { classMerge } from "@/commonFunctions/tailwinds";
import { TitleProps } from "./types";

export default function Title(args: TitleProps) {
  const { children, className } = args;
  const style = classMerge(["basicStyles title", className]);
  return <h1 className={style}>{children}</h1>;
}
