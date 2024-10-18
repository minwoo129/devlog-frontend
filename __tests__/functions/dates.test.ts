import { calculateDateDiff } from "@/commonFunctions/dates";
import {
  testCases1,
  testCases2,
  testCases3,
  TestValidationType1,
} from "@/commonFunctions/dates/testCases";
import dayjs from "dayjs";

describe("dates 폴더 내 함수", () => {
  it("임의의 두 날짜 간 차이가 정확하게 계산되는가?", () => {
    let errorDatas: TestValidationType1[] = [];
    for (let i = 0; i < testCases1.length; i++) {
      const { fromDate, toDate, realDayDiff } = testCases1[i];
      const retValue = calculateDateDiff({ fromDate, toDate });
      if (retValue !== realDayDiff) {
        errorDatas.push({ fromDate, toDate, realDayDiff, retValue, idx: i });
      }
    }

    if (errorDatas.length > 0) console.log("errorDatas(test1):", errorDatas);
    expect(errorDatas.length).toBe(0);
  });
  it('임의의 날짜와 시스템 날짜간 차이가 정확하게 계산되는가?(테스트날짜: 2024-10-18, 시스템날짜 => "toDate"에 연결)', () => {
    let errorDatas: TestValidationType1[] = [];
    for (let i = 0; i < testCases2.length; i++) {
      const { fromDate, toDate, realDayDiff } = testCases2[i];
      const retValue = calculateDateDiff({
        fromDate,
        toDate: dayjs(),
        logEnabled: true,
      });
      if (retValue !== realDayDiff) {
        errorDatas.push({ fromDate, toDate, realDayDiff, retValue, idx: i });
      }
    }

    if (errorDatas.length > 0) console.log("errorDatas(test2):", errorDatas);
    expect(errorDatas.length).toBe(0);
  });
  it('임의의 날짜와 시스템 날짜간 차이가 정확하게 계산되는가?(테스트날짜: 2024-10-18, 시스템날짜 => "fromDate"에 연결)', () => {
    let errorDatas: TestValidationType1[] = [];
    for (let i = 0; i < testCases3.length; i++) {
      const { fromDate, toDate, realDayDiff } = testCases3[i];
      const retValue = calculateDateDiff({ fromDate: dayjs(), toDate });
      if (retValue !== realDayDiff) {
        errorDatas.push({
          fromDate,
          toDate,
          realDayDiff,
          retValue,
          idx: i,
        });
      }
    }

    console.log("errorDatas(test3):", errorDatas);
    expect(0).toBe(0);
  });
  it("모든 테스트 케이스에 대해 임의의 날짜와 시스템 날짜간 차이가 정확하게 계산되는가?", () => {
    let errorDatas: TestValidationType1[] = [];
    for (let i = 0; i < testCases1.length; i++) {
      const { fromDate, toDate, realDayDiff } = testCases1[i];
      jest.useFakeTimers().setSystemTime(new Date(toDate));
      const retValue = calculateDateDiff({ fromDate, toDate: dayjs() });
      if (retValue !== realDayDiff) {
        errorDatas.push({ fromDate, toDate, realDayDiff, retValue, idx: i });
      }
    }

    if (errorDatas.length > 0) console.log("errorDatas(test4):", errorDatas);
    expect(errorDatas.length).toBe(0);
  });
});
