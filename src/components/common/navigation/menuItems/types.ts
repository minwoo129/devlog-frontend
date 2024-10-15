import { PageNavDataType } from "../navDatas";

export interface MenuBtnProps {
  data: PageNavDataType;
}

export type LogoProps = {
  navigationType: NavigationType;
};

export type NavigationType = "small" | "large";
