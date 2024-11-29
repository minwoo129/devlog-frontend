import { DehydratedQueryExtended } from "@/ReactQuery/GetQueryClient";
import { SVGImageName } from "../SVGImage/types";
import React from "react";

export interface PageLayerCommonGridProps {
  className?: string;
  left?: React.ReactNode;
  right?: React.ReactNode;
  children: React.ReactNode;
}

export interface PageLayerProps extends PageLayerCommonGridProps {
  background?: string;
}

export interface PageLayerRQProps<TData> extends PageLayerCommonGridProps {
  query: DehydratedQueryExtended<TData>;
}

export interface PageLayerSideGridProps {
  direction: "left" | "right";
  childComp?: React.ReactNode;
}

export interface FooterProps {}

export interface FooterDirGridProps {
  dir: "left" | "right";
  children?: React.ReactNode;
}

export interface FooterLinkGridProps {}

export interface FooterLinkIconBtnProps {
  href: string;
  icon: SVGImageName;
  className?: string;
}
