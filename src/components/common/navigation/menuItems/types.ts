import { UrlObject } from "url";

export interface MenuBtnProps {
  href: string | UrlObject;
  title: string;
  onClick?: () => void;
  navigationType: NavigationType;
}

export type LogoProps = {
  navigationType: NavigationType;
};

export type NavigationType = "small" | "large";
