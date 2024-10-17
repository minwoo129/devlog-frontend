import { NavigationConferenceLogCategoryType } from "@/components/common/navigation/navDatas";
import { SVGImageName } from "@/components/common/SVGImage/types";
import { GoogleIOHistorys } from "./historys/google-io";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type ConferenceDataType = {
  type: NavigationConferenceLogCategoryType;
  title: string;
  description: string;
  thumbnailURL: SVGImageName;
  confHistory: ConfHistoryType[];
  keyTags: string[];
  publisher: string;
  href: string;
  date_개막시기: string;
};

export type ConfHistoryType = {
  id: string;
  title: string;
  description: string;
  thumbnailURL: string | StaticImport;
  openedAt: string;
  keyTags: string[];
  lectures: ConfLectureType[];
};

export type ConfLectureType = {
  id: string;
  title: string;
  description: string;
  thumbnailURL: string;
  youtubeLink: string;
  createdAt: string;
  keyTags?: string[];
  presenter?: string[];
  href: string;
  conferenceId: string;
};

export type ConferenceObjDatasType = {
  [key in NavigationConferenceLogCategoryType]: ConferenceDataType;
};

export const ConferenceDatas: ConferenceDataType[] = [
  {
    type: "google-io",
    title: "Google I/O",
    description: "세계적인 기업 구글의 개발자 컨퍼런스",
    thumbnailURL: "GoogleIOLogo",
    publisher: "Google",
    confHistory: [...GoogleIOHistorys],
    href: "/conferencelog/google-io",
    keyTags: [],
    date_개막시기: "매년 5월 경",
  },
  {
    type: "toss-slash",
    title: "토스 SLASH",
    description: "토스의 개발자 컨퍼런스",
    thumbnailURL: "TossLogo",
    publisher: "비바리퍼블리카(토스)",
    confHistory: [],
    href: "/conferencelog/toss-slash",
    keyTags: [],
    date_개막시기: "매년 9, 10월 경",
  },
];

export const ConferenceObjDatas: ConferenceObjDatasType = {
  "google-io": ConferenceDatas[0],
  "toss-slash": ConferenceDatas[1],
};
