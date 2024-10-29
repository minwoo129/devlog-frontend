import { classMerge } from "@/commonFunctions/tailwinds";
import { PageLayerProps } from "./types";
import Footer from "./Footer";

export default function PageLayer(args: PageLayerProps) {
  const { className, children } = args;

  const style = classMerge(["flex-1 flex-col overflow-y-scroll "]);
  const style1 = classMerge([
    "w-full flex flex-col px-16 min-h-full",
    className,
  ]);
  return (
    <div className={style}>
      <div className={style1}>{children}</div>
      <Footer />
    </div>
  );
}
