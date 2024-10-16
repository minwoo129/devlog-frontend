import { NavigationConferenceLogCategoryType } from "@/components/common/navigation/navDatas";
import { SVGImageName } from "@/components/common/SVGImage/types";
import { GoogleIOHistorys } from "./historys/google-io";

export type ConferenceDataType = {
  type: NavigationConferenceLogCategoryType;
  title: string;
  description: string;
  thumbnailURL: SVGImageName;
  confHistory: ConfHistoryType[];
  keyTags: string[];
  publisher: string;
  href: string;
};

export type ConfHistoryType = {
  title: string;
  thumbnailURL: string;
  openedAt: string;
  keyTags: string[];
  lectures: ConfLectureType[];
};

export type ConfLectureType = {
  title: string;
  description: string;
  thumbnailURL: string;
  url: string;
  createdAt: string;
  keyTags?: string[];
  presenter?: string[];
};

export const ConferenceDatas: ConferenceDataType[] = [
  {
    type: "google-io",
    title: "Google I/O",
    description: "세계적인 기업 구글의 개발자 컨퍼런스",
    thumbnailURL: "GoogleIOLogo",
    publisher: "Google",
    confHistory: [...GoogleIOHistorys],
    href: "/conference/google-io",
    keyTags: [],
  },
];
