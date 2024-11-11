import {
  ConferenceDataType,
  IntroduceIconType,
} from "@/commonDatas/conferences/types";

export type checkIntroBadgeVisibleFuncType = (
  args: checkIntroBadgeVisibleArgs
) => {
  visibleIcon: IntroduceIconType;
  badgeTitle: string;
};

type checkIntroBadgeVisibleArgs = {
  conferenceData: ConferenceDataType;
};
