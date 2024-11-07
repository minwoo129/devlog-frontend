import { User } from "@/lib/github/dataObjects/VO/GraphQL";
import dayjs from "dayjs";
import { GithubUserContributionStatus } from "./types";

export const extractContributionStatus = (data: User) => {
  const { contributionsCollection } = data;
  const { totalContributions, weeks } =
    contributionsCollection.contributionCalendar;

  const result: GithubUserContributionStatus = {
    totalContributions,
    weeks,
  };

  return result;
};
