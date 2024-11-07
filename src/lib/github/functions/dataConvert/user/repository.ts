import { RepositoryConnection } from "@/lib/github/dataObjects/VO/GraphQL";
import { GithubUserRepositoryStatus } from "./types";

export const extractRepositoryData = (repositorys: RepositoryConnection) => {
  const { nodes } = repositorys;

  let result: GithubUserRepositoryStatus = {
    totalRepositoryCount: nodes.length,
    repositorys: [...nodes],
    lastUpdatedRepository: nodes.length > 0 ? nodes[0] : null,
  };
  return result;
};
