import { ContributionCalendarDay } from "./ContributinCalendarDay";

export type ContributionCalendarWeek = {
  firstDay: string;
  contributionDays: ContributionCalendarDay[];
};
