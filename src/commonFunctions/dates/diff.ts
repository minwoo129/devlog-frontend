import dayjs from "dayjs";
import { calculateDateDiffFuncType } from "./types";

/**
 * 날짜간 일수 차이 계산
 * - fromDate: 시작일
 * - toDate: 종료일
 * - 적용하지 않은 값은 오늘날짜로 대체
 * - ex) fromDate를 적용하지 않은 경우 fromDate는 dayjs 기준 오늘날짜(시스템 날짜)로 대체
 */
export const calculateDateDiff: calculateDateDiffFuncType = (args) => {
  const { fromDate, toDate, logEnabled = false } = args;
  let from = dayjs();
  let to = dayjs();

  if (fromDate) from = dayjs(fromDate);
  if (toDate) to = dayjs(toDate);

  if (logEnabled) {
    console.log("===================================");
    console.log("from:", from.format("YYYY-MM-DD"));
    console.log("to:", to.format("YYYY-MM-DD"));
  }
  /* 
  if (to.isBefore(from)) {
    const res = to.diff(from, "day", true);
    return Math.floor(res);
  } */

  return to.diff(from, "day");
};
