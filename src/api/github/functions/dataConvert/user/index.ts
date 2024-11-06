import { GithubUserDataResponseType } from "../../../dataObjects/DTO/GraphQL";
import { extractContributionStatus } from "./contributions";
import { extractLanguageStatus } from "./language";
import { extractRepositoryData } from "./repository";
import { GithubTotalUserData } from "./types";
import { extractUserInfo } from "./userInfo";

export const extractGithubTotalUserData = (
  githubData: GithubUserDataResponseType | null
) => {
  if (!githubData) return null;
  const { repositories } = githubData.data.user;
  const user = extractUserInfo(githubData.data.user);
  const repositoryStatus = extractRepositoryData(repositories);
  const languageStatus = extractLanguageStatus(repositories);
  const contributionStatus = extractContributionStatus(githubData.data.user);
  const result: GithubTotalUserData = {
    user,
    repositoryStatus,
    languageStatus,
    contributionStatus,
  };

  return result;
};
