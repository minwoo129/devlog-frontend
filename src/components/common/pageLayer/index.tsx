import { classMerge } from "@/commonFunctions/tailwinds";
import {
  PageLayerCommonGridProps,
  PageLayerProps,
  PageLayerRQProps,
} from "./types";
import Footer from "./Footer";
import { Hydrate } from "@/ReactQuery";

const PageLayerCommonGrid = (args: PageLayerCommonGridProps) => {
  const { children, className } = args;

  const style = classMerge([
    "flex-1 flex-col overflow-y-scroll ",
    "border-2 border-red-500",
  ]);
  const style1 = classMerge([
    "flex-1 flex-col w-full max-w-[1000px] ",
    "items-center",
    "lg2:w-[1000px]",
    "xl1:w-[1000px]",
    "xl2:w-[1000px]",
    "vxl:w-[1000px]",
    "border-2 border-purple-400",
    className,
  ]);
  return (
    <div className={style}>
      <div className="flex flex-col min-h-screen justify-between border-2 border-green-400">
        <div className="flex flex-row justify-center ">
          <div className="flex-[0.3] w-full h-[500px] hidden lg2:flex xl1:flex xl2:flex vxl:flex border-2 border-zinc-600" />
          <div className={style1}>{children}</div>
          <div className="flex-[0.3] w-full h-[500px] hidden lg2:flex xl1:flex xl2:flex vxl:flex border-2 border-zinc-600" />
        </div>
        <Footer />
      </div>
    </div>
  );
};

const PageLayer = (args: PageLayerProps) => {
  const { className, children } = args;

  /* const style = classMerge(["flex-1 flex-col overflow-y-scroll "]);
  const style1 = classMerge([
    "w-full flex flex-col px-16 min-h-full",
    className,
  ]);
  return (
    <div className={style}>
      <div className={style1}>{children}</div>
      <Footer />
    </div>
  ); */
  return (
    <PageLayerCommonGrid className={className}>{children}</PageLayerCommonGrid>
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
