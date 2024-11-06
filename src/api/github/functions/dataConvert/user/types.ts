import {
  ContributionCalendarWeek,
  Repository,
} from "@/api/github/dataObjects/VO/GraphQL";

export interface GithubTotalUserData {
  user: GithubUserInfo;
  repositoryStatus: GithubUserRepositoryStatus;
  languageStatus: GithubUserLanguageStatus;
  contributionStatus: GithubUserContributionStatus;
}

export interface GithubUserInfo {
  name: string;
  avatarUrl: string;
}

export interface GithubUserRepositoryStatus {
  totalRepositoryCount: number;
  repositorys: Repository[];
  lastUpdatedRepository: Repository | null;
}

export interface GithubUserLanguageStatus {
  usedLanguages: UsedLanguages;
}

export type UsedLanguages = {
  [key: string]: {
    cnt: number;
    color: string;
    name: string;
  };
};

export interface GithubUserContributionStatus {
  totalContributions: number;
  weeks: ContributionCalendarWeek[];
}
