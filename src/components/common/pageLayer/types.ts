import { SVGImageName } from "../SVGImage/types";

export interface PageLayerProps {
  className?: string;
  children?: React.ReactNode;
  background?: string;
}
export interface FooterProps {}

export interface FooterLinkGridProps {}

export interface FooterLinkIconBtnProps {
  href: string;
  icon: SVGImageName;
  className?: string;
}
