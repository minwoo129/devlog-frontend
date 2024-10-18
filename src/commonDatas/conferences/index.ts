import { GoogleIOHistorys, GoogleIOTotalLectures } from "./google-io";
import {
  ConferenceDataType,
  ConferenceObjDatasType,
  ConfHistoryType,
  ConfLectureType,
} from "./types";

/**
 * 등록된 컨퍼런스 데이터(Array형)
 * 1. 구글 I/O
 * 2. 토스 SLASH
 */
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
    date_개막시기: "매년 5월 경 개최",
    introduceIcon: "none",
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
    date_개막시기: "해마다 달라질 수 있음",
    introduceIcon: "none",
  },
];

/**
 * 등록된 컨퍼런스 데이터(Object형)
 * 1. 구글 I/O
 * 2. 토스 SLASH
 */
export const ConferenceObjDatas: ConferenceObjDatasType = {
  "google-io": ConferenceDatas[0],
  "toss-slash": ConferenceDatas[1],
};

/**
 * 현재까지 등록된 모든 강연 데이터
 */
export const TotalConferenceLectures: ConfLectureType[] = [
  ...GoogleIOTotalLectures,
];

/**
 * 현재까지 등록된 모든 컨퍼런스의 연도별 데이터
 */
export const TotalConferences: ConfHistoryType[] = ConferenceDatas.reduce<
  ConfHistoryType[]
>((acc, cur) => {
  return [...acc, ...cur.confHistory];
}, []);
