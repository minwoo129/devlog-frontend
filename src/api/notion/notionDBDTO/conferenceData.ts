import { IntroduceIconType } from "@/commonDatas/conferences/types";

export type ConferenceData = {
  conferenceId: number;
  key: string;
  title: string;
  description: string;
  publisher: string;
  href: string;
  introduceIcon: IntroduceIconType;
  upperCategoryId: number;
  visible: boolean;
};
