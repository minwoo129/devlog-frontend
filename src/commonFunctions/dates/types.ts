import dayjs from "dayjs";

export type calculateDateDiffFuncType = (args: calculateDateDiffArgs) => number;
type calculateDateDiffArgs = {
  fromDate: dayjs.ConfigType;
  toDate: dayjs.ConfigType;
  logEnabled?: boolean;
};
