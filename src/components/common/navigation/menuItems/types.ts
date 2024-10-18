import { PageNavDataType } from "@/commonDatas/routes/types";

export interface MenuBtnProps {
  data: PageNavDataType;
}

export type LogoProps = {
  navigationType: NavigationType;
};

export type NavigationType = "small" | "large";
