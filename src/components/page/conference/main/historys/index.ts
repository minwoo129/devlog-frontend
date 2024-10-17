import { ConferenceDatas, ConfHistoryType, ConfLectureType } from "../defDatas";
import { GoogleIO2024_Lectures } from "./google-io/google-io-2024";

export const TotalConferenceLectures: ConfLectureType[] = [
  ...GoogleIO2024_Lectures,
];

export const TotalConferences: ConfHistoryType[] = ConferenceDatas.reduce<
  ConfHistoryType[]
>((acc, cur) => {
  return [...acc, ...cur.confHistory];
}, []);
