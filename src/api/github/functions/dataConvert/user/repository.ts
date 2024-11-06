import { RepositoryConnection } from "@/api/github/dataObjects/VO/GraphQL";
import { GithubUserRepositoryStatus } from "./types";

export const extractRepositoryData = (repositorys: RepositoryConnection) => {
  const { nodes } = repositorys;

  let result: GithubUserRepositoryStatus = {
    totalRepositoryCount: 0,
    repositorys: [...nodes],
    lastUpdatedRepository: nodes.length > 0 ? nodes[0] : null,
  };
  return result;
};
