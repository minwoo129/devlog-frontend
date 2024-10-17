import { GOOGLEIO_2024 } from "@/utils/images";
import { ConfHistoryType } from "../../defDatas";
import { GoogleIO2024_Lectures } from "./google-io-2024";

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
  },
];
