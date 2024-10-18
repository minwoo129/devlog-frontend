import { GoogleIOHistorys, GoogleIOTotalLectures } from "./google-io";
import {
  ConferenceDataType,
  ConferenceObjDatasType,
  ConfHistoryType,
  ConfLectureType,
} from "./types";

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

export const TotalConferenceLectures: ConfLectureType[] = [
  ...GoogleIOTotalLectures,
];

export const TotalConferences: ConfHistoryType[] = ConferenceDatas.reduce<
  ConfHistoryType[]
>((acc, cur) => {
  return [...acc, ...cur.confHistory];
}, []);
