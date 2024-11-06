import { GithubUserDataResponseType } from "./dataObjects/DTO/GraphQL";
import { Language } from "./dataObjects/VO/GraphQL";

type LanguangeUsingStatusType = {
  [key: string]: {
    cnt: number;
    color: string;
    name: string;
  };
};

type LanguageStatusItemType = {
  name: string;
  color: string;
};

type extractLanguangeDataArgs = {
  languages: Language[];
};

export const convertLanguageUsingStatusData = (
  user: GithubUserDataResponseType
) => {
  const { repositories, contributionsCollection } = user.data.user;
  //   console.log("contributionsCollection: ", contributionsCollection);
  /* for (let m of contributionsCollection?.contributionCalendar?.months ?? []) {
    console.log("m: ", m);
  } */
  /* for (let w of contributionsCollection?.contributionCalendar?.weeks ?? []) {
    console.log("w: ", w);
    console.log("w.days: ", w.contributionDays);
    break;
  } */
  /* for (const m of contributionsCollection?.contributionCalendar?.months ?? []) {
    console.log("m: ", m);
    break;
  } */

  const repositorys = repositories?.nodes ?? [];

  let status: LanguageStatusItemType[] = [];

  const languages = repositorys.reduce<Language[]>((acc, cur) => {
    return [...acc, ...cur.languages.edges];
  }, []);
  /* for (let rep of repositorys) {
    const languages = rep.languages.edges;
    status = [
      ...status,
      ...languages.map((item) => {
        const { name, color } = item.node;
        return {
          name: name ?? "",
          color: color ?? "",
        };
      }),
    ];
  } */
  extractLanguangeData({ languages });
};

const extractLanguangeData = (args: extractLanguangeDataArgs) => {
  const { languages } = args;
  let languageStatus: LanguangeUsingStatusType = {};

  for (const lan of languages) {
    const { name, color } = lan.node;
    if (!name || !color) continue;
    if (!languageStatus[name]) {
      languageStatus[name] = {
        cnt: 0,
        color: color,
        name,
      };
    }

    languageStatus[name].cnt += 1;
  }
};
