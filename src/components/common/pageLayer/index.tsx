import { classMerge } from "@/commonFunctions/tailwinds";
import {
  PageLayerCommonGridProps,
  PageLayerProps,
  PageLayerRQProps,
  PageLayerSideGridProps,
} from "./types";
import Footer from "./Footer";
import { Hydrate } from "@/ReactQuery";

const PageLayerCommonGrid = (args: PageLayerCommonGridProps) => {
  const { children, className, left, right } = args;

  const style1 = classMerge(["pageLayerGrid4", className]);
  return (
    <div className="pageLayerGrid1">
      <div className="pageLayerGrid2">
        <div className="pageLayerGrid3">
          <PageLayerSideView direction="left" childComp={left} />
          <div className={style1}>{children}</div>
          <PageLayerSideView direction="right" childComp={right} />
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

const PageLayerSideView = (args: PageLayerSideGridProps) => {
  const { childComp, direction } = args;
  return <div className="pageLayerSideView">{childComp}</div>;
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
