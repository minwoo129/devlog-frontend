import { IntroduceIconType } from "@/commonDatas/conferences/types";

export type ConferenceData = {
  key: string;
  title: string;
  description: string;
  publisher: string;
  href: string;
  introduceIcon: IntroduceIconType;
  upperCategory: string;
  visible: boolean;
};
