import { GraphQLQueryDatasObjKeys } from "@/api/github/dataObjects/DTO/GraphQL";
import { GraphQLQueryGetAPIArgs } from "./types";
import { GithubAPIInfo } from "@/config";
import { convertGithubGraphQLQuery } from "./GraphQLQuerys";

const GraphQLObj = {
  get: async <T, Q extends GraphQLQueryDatasObjKeys = GraphQLQueryDatasObjKeys>(
    args: GraphQLQueryGetAPIArgs<Q>
  ) => {
    const { query, variables } = args;
    return fetch("https://api.github.com/graphql", {
      method: "post",
      next: {
        revalidate: 6 * 60 * 60,
      },
      headers: {
        Authorization: `Bearer ${GithubAPIInfo.APIKey}`,
      },
      body: JSON.stringify(
        convertGithubGraphQLQuery({ queryType: query, variables })
      ),
    }).then((res) => res.json()) as Promise<T>;
  },
};

const APIOnj = {
  GraphQL: GraphQLObj,
};

export default APIOnj;
