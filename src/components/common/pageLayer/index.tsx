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
