import {
  convertGithubGraphQLQueryArgs,
  GraphQLQueryDatasObjKeys,
} from "../dataObjects/DTO/GraphQL";
import { GITHUB_GRAPHQL_QUERY } from "../defaultDatas/GraphQL";

export const convertGithubGraphQLQuery = <Q extends GraphQLQueryDatasObjKeys>(
  args: convertGithubGraphQLQueryArgs<Q>
) => {
  const { queryType, variables } = args;

  if (queryType === "user") {
    return {
      query: GITHUB_GRAPHQL_QUERY.USER,
      variables,
    };
  }

  return null;
};
