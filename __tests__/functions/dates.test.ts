import { calculateDateDiff } from "@/commonFunctions/dates";

describe("dates 폴더 내 함수", () => {
  it("두 날짜 간 차이가 정확하게 계산되는가?", () => {
    let fromDate = "2024-10-22";
    let toDate = "2025-01-01";
    let realDayDiff = 71;

    const retValue = calculateDateDiff({ fromDate, toDate });

    expect(retValue).toBe(realDayDiff);
  });
  it("fromDate이 toDate보다 미래일 경우에 날짜 차이값이 정확하게 계산되는가?", () => {
    let fromDate = "2024-10-22";
    let toDate = "2024-05-06";
    let realDayDiff = -169;
    const retValue = calculateDateDiff({ fromDate, toDate });
    expect(retValue).toBe(realDayDiff);
  });
});
