import { GOOGLEIO_2022, GOOGLEIO_2023, GOOGLEIO_2024 } from "@/utils/images";
import { ConfHistoryType, ConfLectureType } from "../types";
import { GoogleIO2023_Lectures } from "./google-io-2023";
import { GoogleIO2024_Lectures } from "./google-io-2024";
import { GoogleIO2022_Lectures } from "./google-io-2022";

export const GoogleIOHistorys: ConfHistoryType[] = [
  {
    id: "ch_2024_google",
    title: "Google I/O 2024",
    description:
      "Gemini를 기반으로 확장성과 생성형 AI의 확장성을 보여준 Google I/O 2024",
    openedAt: "2024-05-14",
    keyTags: ["Gemini", "생성형 AI", "Project Astra"],
    thumbnailURL: GOOGLEIO_2024,
    lectures: [...GoogleIO2024_Lectures],
    conferenceURL: "https://io.google/2024/intl/ko/",
  },
  {
    id: "ch_2023_google",
    title: "Google I/O 2023",
    description:
      "우리들의 모든 일상에 AI가 녹아들게 될 것임을 보여준 Google I/O 2023",
    openedAt: "2023-05-10",
    keyTags: ["딥마인드", "PaLM", "Bard", "Gemini"],
    thumbnailURL: GOOGLEIO_2023,
    lectures: [...GoogleIO2023_Lectures],
    conferenceURL: "https://io.google/2023/intl/ko/",
  },
  {
    id: "ch_2022_google",
    title: "Google I/O 2022",
    description: "아직 구글 AI의 원석을 보여준 것과 같았던 Google I/O 2022",
    openedAt: "2022-05-12",
    keyTags: ["LaMDA2", "지식(Knowledge)"],
    thumbnailURL: GOOGLEIO_2022,
    lectures: [...GoogleIO2022_Lectures],
    conferenceURL: "https://io.google/2022/intl/ko/",
  },
];

/**
 * 현재까지 등록된 모든 연도의 Google I/O 강연 데이터
 * 1. 등록연도: 2023년, 2024년
 */
export const GoogleIOTotalLectures = GoogleIOHistorys.reduce<ConfLectureType[]>(
  (acc, cur) => {
    return [...acc, ...cur.lectures];
  },
  []
);
