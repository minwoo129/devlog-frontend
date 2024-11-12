import { classMerge } from "@/commonFunctions/tailwinds";
import {
  PageLayerCommonGridProps,
  PageLayerProps,
  PageLayerRQProps,
} from "./types";
import Footer from "./Footer";
import { Hydrate } from "@/ReactQuery";

const PageLayerCommonGrid = (args: PageLayerCommonGridProps) => {
  const { children, className, left, right } = args;

  const style = classMerge(["flex-1 flex-col overflow-y-scroll "]);
  const style1 = classMerge([
    "flex-1 flex-col w-full max-w-[1000px] px-[50px]",
    "items-center",
    "lg2:w-[1000px] lg2:px-0",
    "xl1:w-[1000px] xl1:px-0",
    "xl2:w-[1000px] xl2:px-0",
    "vxl:w-[1000px] vxl:px-0",
    "border-2 border-purple-400",
    className,
  ]);
  return (
    <div className={style}>
      <div className="flex flex-col min-h-screen justify-between border-2 border-green-400">
        <div className="flex flex-row justify-center ">
          <div className="flex-[0.3] w-full h-[500px] hidden lg2:flex xl1:flex xl2:flex vxl:flex border-2 border-zinc-600">
            {left}
          </div>
          <div className={style1}>{children}</div>
          <div className="flex-[0.3] w-full h-[500px] hidden lg2:flex xl1:flex xl2:flex vxl:flex border-2 border-zinc-600">
            {right}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

const PageLayer = (args: PageLayerProps) => {
  const { className, children, left, right } = args;
  return (
    <PageLayerCommonGrid className={className} left={left} right={right}>
      {children}
    </PageLayerCommonGrid>
  );
};

// eslint-disable-next-line react/display-name
PageLayer.ReactQuery = <T extends unknown>(args: PageLayerRQProps<T>) => {
  const { children, query, className } = args;

  return (
    <PageLayerCommonGrid className={className}>
      <Hydrate state={{ queries: [query] }}>{children}</Hydrate>
    </PageLayerCommonGrid>
  );
};

export default PageLayer;
