import {
  Language,
  RepositoryConnection,
} from "@/api/github/dataObjects/VO/GraphQL";
import { GithubUserLanguageStatus, UsedLanguages } from "./types";

export const extractLanguageStatus = (repositories: RepositoryConnection) => {
  const languages = repositories.nodes.reduce<Language[]>((acc, cur) => {
    return [...acc, ...cur.languages.edges];
  }, []);
  let usedLanguages: UsedLanguages = {};

  for (const len of languages) {
    const { name, color } = len.node;
    if (!usedLanguages[name]) {
      usedLanguages[name] = {
        cnt: 0,
        color,
        name,
      };
    }

    usedLanguages[name].cnt += 1;
  }

  const result: GithubUserLanguageStatus = {
    usedLanguages,
  };

  return result;
};
