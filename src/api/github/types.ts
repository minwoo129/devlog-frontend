import { User } from "./githubGraphQLObjects";

export type GithubRequestQueryDataType<T> = {
  query: string;
  variables: T;
};

// ============================== variables ===========================
export type GithubUserDataVariablesType = {
  username: string;
};

// ============================== Query Data Type ===========================
export type GithubUserDataQueryDataType =
  GithubRequestQueryDataType<GithubUserDataVariablesType>;

// ============================== Query Convert Functions ===========================
export type convertQueryDataFuncType = convertGithubUserDataQueryDataFuncType;

export type convertGithubUserDataQueryDataFuncType = ({
  queryType,
  username,
}: {
  queryType: "user";
  username: string;
}) => GithubUserDataQueryDataType;

// ============================== API Response Type ===========================
export type GithubUserDataResponseType = {
  data: {
    user: User;
  };
};
