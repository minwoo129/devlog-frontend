import { User } from "../../VO/GraphQL";

export type convertGithubGraphQLQueryArgs<
  Q extends GraphQLQueryDatasObjKeys = GraphQLQueryDatasObjKeys
> = {
  queryType: Q;
  variables: GithubGraphQLQueryDatasObjType[Q]["variables"];
};

// ====================================================================
export type GithubGraphQLQueryDatasObjType = {
  user: GithubRequestQueryDataType<GithubUserDataVariablesType>;
};

export type GraphQLQueryDatasObjKeys = keyof GithubGraphQLQueryDatasObjType;

export type GithubRequestQueryDataType<T> = {
  query: string;
  variables: T;
};

// ============================== variables ===========================
export type GithubUserDataVariablesType = {
  username: string;
};

// ============================== Return Type ===========================
export type GithubUserDataResponseType = {
  data: {
    user: User;
  };
};
