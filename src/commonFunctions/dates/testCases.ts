type TestCaseType1 = {
  fromDate: string;
  toDate: string;
  realDayDiff: number;
};

export type TestValidationType1 = {
  fromDate: string;
  toDate: string;
  realDayDiff: number;
  retValue: number;
  idx: number;
};

export const testCases1: TestCaseType1[] = [
  { fromDate: "2023-10-19", toDate: "2025-10-18", realDayDiff: 730 },
  { fromDate: "2023-11-24", toDate: "2025-09-12", realDayDiff: 658 },
  { fromDate: "2023-12-30", toDate: "2025-08-07", realDayDiff: 586 },
  { fromDate: "2024-02-04", toDate: "2025-07-02", realDayDiff: 514 },
  { fromDate: "2024-03-11", toDate: "2025-05-27", realDayDiff: 442 },
  { fromDate: "2024-04-16", toDate: "2025-04-21", realDayDiff: 370 },
  { fromDate: "2024-05-22", toDate: "2025-03-16", realDayDiff: 298 },
  { fromDate: "2024-06-27", toDate: "2025-02-08", realDayDiff: 226 },
  { fromDate: "2024-08-02", toDate: "2025-01-03", realDayDiff: 154 },
  { fromDate: "2024-09-07", toDate: "2024-11-28", realDayDiff: 82 },
  { fromDate: "2024-10-13", toDate: "2024-10-23", realDayDiff: 10 },
  { fromDate: "2024-11-18", toDate: "2024-09-17", realDayDiff: -62 },
  { fromDate: "2024-12-24", toDate: "2024-08-12", realDayDiff: -134 },
  { fromDate: "2025-01-29", toDate: "2024-07-07", realDayDiff: -206 },
  { fromDate: "2025-03-06", toDate: "2024-06-01", realDayDiff: -278 },
  { fromDate: "2025-04-11", toDate: "2024-04-26", realDayDiff: -350 },
  { fromDate: "2025-05-17", toDate: "2024-03-21", realDayDiff: -422 },
  { fromDate: "2025-06-22", toDate: "2024-02-14", realDayDiff: -494 },
  { fromDate: "2025-07-28", toDate: "2024-01-09", realDayDiff: -566 },
  { fromDate: "2025-09-02", toDate: "2023-12-04", realDayDiff: -638 },
];

export const testCases2: TestCaseType1[] = [
  { fromDate: "2023-10-19", toDate: "2024-10-18", realDayDiff: 365 },
  { fromDate: "2023-11-24", toDate: "2024-10-18", realDayDiff: 329 },
  { fromDate: "2023-12-30", toDate: "2024-10-18", realDayDiff: 293 },
  { fromDate: "2024-02-04", toDate: "2024-10-18", realDayDiff: 257 },
  { fromDate: "2024-03-11", toDate: "2024-10-18", realDayDiff: 221 },
  { fromDate: "2024-04-16", toDate: "2024-10-18", realDayDiff: 185 },
  { fromDate: "2024-05-22", toDate: "2024-10-18", realDayDiff: 149 },
  { fromDate: "2024-06-27", toDate: "2024-10-18", realDayDiff: 113 },
  { fromDate: "2024-08-02", toDate: "2024-10-18", realDayDiff: 77 },
  { fromDate: "2024-09-07", toDate: "2024-10-18", realDayDiff: 41 },
  { fromDate: "2024-10-13", toDate: "2024-10-18", realDayDiff: 5 },
  { fromDate: "2024-11-18", toDate: "2024-10-18", realDayDiff: -31 },
  { fromDate: "2024-12-24", toDate: "2024-10-18", realDayDiff: -67 },
  { fromDate: "2025-01-29", toDate: "2024-10-18", realDayDiff: -103 },
  { fromDate: "2025-03-06", toDate: "2024-10-18", realDayDiff: -139 },
  { fromDate: "2025-04-11", toDate: "2024-10-18", realDayDiff: -175 },
  { fromDate: "2025-05-17", toDate: "2024-10-18", realDayDiff: -211 },
  { fromDate: "2025-06-22", toDate: "2024-10-18", realDayDiff: -247 },
  { fromDate: "2025-07-28", toDate: "2024-10-18", realDayDiff: -283 },
  { fromDate: "2025-09-02", toDate: "2024-10-18", realDayDiff: -319 },
];

export const testCases3: TestCaseType1[] = [
  { fromDate: "2024-10-18", toDate: "2023-10-19", realDayDiff: 365 },
  { fromDate: "2024-10-18", toDate: "2023-11-24", realDayDiff: 329 },
  { fromDate: "2024-10-18", toDate: "2023-12-30", realDayDiff: 293 },
  { fromDate: "2024-10-18", toDate: "2024-02-04", realDayDiff: 257 },
  { fromDate: "2024-10-18", toDate: "2024-03-11", realDayDiff: 221 },
  { fromDate: "2024-10-18", toDate: "2024-04-16", realDayDiff: 185 },
  { fromDate: "2024-10-18", toDate: "2024-05-22", realDayDiff: 149 },
  { fromDate: "2024-10-18", toDate: "2024-06-27", realDayDiff: 113 },
  { fromDate: "2024-10-18", toDate: "2024-08-02", realDayDiff: 77 },
  { fromDate: "2024-10-18", toDate: "2024-09-07", realDayDiff: 41 },
  { fromDate: "2024-10-18", toDate: "2024-10-13", realDayDiff: 5 },
  { fromDate: "2024-10-18", toDate: "2024-11-18", realDayDiff: -31 },
  { fromDate: "2024-10-18", toDate: "2024-12-24", realDayDiff: -67 },
  { fromDate: "2024-10-18", toDate: "2025-01-29", realDayDiff: -103 },
  { fromDate: "2024-10-18", toDate: "2025-03-06", realDayDiff: -139 },
  { fromDate: "2024-10-18", toDate: "2025-04-11", realDayDiff: -175 },
  { fromDate: "2024-10-18", toDate: "2025-05-17", realDayDiff: -211 },
  { fromDate: "2024-10-18", toDate: "2025-06-22", realDayDiff: -247 },
  { fromDate: "2024-10-18", toDate: "2025-07-28", realDayDiff: -283 },
  { fromDate: "2024-10-18", toDate: "2025-09-02", realDayDiff: -319 },
];
