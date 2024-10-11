import { UrlObject } from "url";
import { PageNavDataType } from "../navDatas";

export interface MenuBtnProps {
  data: PageNavDataType;
  onClick?: () => void;
}

export interface DeepMenuBtnProps {
  href: string;
  title: string;
  handleClick: (href: string) => void;
}

export type LogoProps = {
  navigationType: NavigationType;
};

export type NavigationType = "small" | "large";
