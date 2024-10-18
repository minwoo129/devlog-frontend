import { ConferenceDatas, ConfHistoryType, ConfLectureType } from "../defDatas";
import { GoogleIOTotalLectures } from "./google-io";
import { GoogleIO2024_Lectures } from "./google-io/google-io-2024";

export const TotalConferenceLectures: ConfLectureType[] = [
  ...GoogleIOTotalLectures,
];

export const TotalConferences: ConfHistoryType[] = ConferenceDatas.reduce<
  ConfHistoryType[]
>((acc, cur) => {
  return [...acc, ...cur.confHistory];
}, []);
