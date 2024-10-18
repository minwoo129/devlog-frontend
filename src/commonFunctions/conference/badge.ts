import { IntroduceIconType } from "@/commonDatas/conferences/types";
import { checkIntroBadgeVisibleFuncType } from "./types";
import dayjs from "dayjs";
import { calculateDateDiff } from "../dates";

const INTRO_BADGE_VISIBLE_LIMIT_INFO_MIN_DAYS = -30;
/**
 * 소개 영역 뱃지 노출 기간(일)(개막 이전)
 * ex) INTRO_BADGE_VISIBLE_LIMIT_MIN_DAYS = -20 일 경우
 * 개막일로부터 20일 이전에는 뱃지 비노출
 */
const INTRO_BADGE_VISIBLE_LIMIT_MIN_DAYS = -10;
/** 개막 초임박 기간(일) */
const HELD_CLOSE_DAYS = -3;
/**
 * 소개 영역 뱃지 노출 기간(일)(개막 이후)
 * ex) INTRO_BADGE_VISIBLE_LIMIT_MAX_DAYS = 40 일 경우
 * 개막일로부터 40일 이후에는 뱃지 비노출
 */
const INTRO_BADGE_VISIBLE_LIMIT_MAX_DAYS = 30;

export const checkIntroBadgeVisible: checkIntroBadgeVisibleFuncType = (
  args
) => {
  const { conferenceData } = args;
  let visibleIcon: IntroduceIconType = "none";
  let badgeTitle = "";

  const { confHistory } = conferenceData;
  if (confHistory.length <= 0) {
    return { visibleIcon, badgeTitle };
  }

  const latestConf = confHistory[0];
  const diffDays = calculateDateDiff({
    toDate: dayjs(),
    fromDate: dayjs(latestConf.openedAt),
  });

  if (
    diffDays < INTRO_BADGE_VISIBLE_LIMIT_INFO_MIN_DAYS ||
    diffDays > INTRO_BADGE_VISIBLE_LIMIT_MAX_DAYS
  ) {
    return { visibleIcon, badgeTitle };
  }

  if (
    diffDays >= INTRO_BADGE_VISIBLE_LIMIT_INFO_MIN_DAYS &&
    diffDays < INTRO_BADGE_VISIBLE_LIMIT_MIN_DAYS
  ) {
    return {
      visibleIcon: "heldImminent",
      badgeTitle: `${dayjs(latestConf.openedAt).format(
        "YYYY년 MM월 DD일"
      )} 개막`,
    };
  }

  if (
    diffDays >= INTRO_BADGE_VISIBLE_LIMIT_MIN_DAYS &&
    diffDays < HELD_CLOSE_DAYS
  ) {
    return {
      visibleIcon: "heldImminent",
      badgeTitle: `개막 ${Math.abs(diffDays)}일 전`,
    };
  }
  if (diffDays >= HELD_CLOSE_DAYS && diffDays < 0) {
    return {
      visibleIcon: "heldImminent",
      badgeTitle: `개막 초임박!!`,
    };
  }
  if (diffDays === 0) {
    return {
      visibleIcon: "held",
      badgeTitle: `${latestConf.title} 개막!!!`,
    };
  }
  if (diffDays > 0 && diffDays <= INTRO_BADGE_VISIBLE_LIMIT_MAX_DAYS) {
    return {
      visibleIcon: "held",
      badgeTitle: `개막 ${diffDays}일 째`,
    };
  }

  return { visibleIcon, badgeTitle };
};
