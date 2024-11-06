import GithubAPI from "./API";
import { GithubUserDataResponseType } from "./dataObjects/DTO/GraphQL";
export const getGithubUserData = async ({ username }: { username: string }) => {
  return GithubAPI.GraphQL.get<GithubUserDataResponseType>({
    query: "user",
    variables: { username },
  });
};
