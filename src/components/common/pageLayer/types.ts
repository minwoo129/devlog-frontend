import { DehydratedQueryExtended } from "@/ReactQuery/GetQueryClient";
import { SVGImageName } from "../SVGImage/types";

export interface PageLayerCommonGridProps {
  className?: string;
  children: React.ReactNode;
}

export interface PageLayerProps extends PageLayerCommonGridProps {
  background?: string;
}

export interface PageLayerRQProps<TData> extends PageLayerCommonGridProps {
  query: DehydratedQueryExtended<TData>;
}

export interface FooterProps {}

export interface FooterLinkGridProps {}

export interface FooterLinkIconBtnProps {
  href: string;
  icon: SVGImageName;
  className?: string;
}
