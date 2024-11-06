import {
  GithubGraphQLQueryDatasObjType,
  GraphQLQueryDatasObjKeys,
} from "@/api/github/dataObjects/DTO/GraphQL";

export interface GraphQLQueryGetAPIArgs<Q extends GraphQLQueryDatasObjKeys> {
  query: Q;
  variables: GithubGraphQLQueryDatasObjType[Q]["variables"];
}
