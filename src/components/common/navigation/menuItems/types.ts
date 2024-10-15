import { UrlObject } from "url";
import { PageNavDataType } from "../navDatas";
import { NavigationCommonProps } from "../types";

export interface MenuBtnProps extends NavigationCommonProps {
  data: PageNavDataType;
  onClick?: () => void;
}

export type LogoProps = {
  navigationType: NavigationType;
};

export type NavigationType = "small" | "large";
