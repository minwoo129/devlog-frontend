import axios from "axios";
import { convertQueryData } from "./querys";
import { GithubUserDataResponseType } from "./types";
import { GithubAPIInfo } from "@/config";
export const getGithubUserData = ({ username }: { username: string }) => {
  return axios<GithubUserDataResponseType>({
    method: "post",
    url: "https://api.github.com/graphql",
    headers: {
      Authorization: `Bearer ${GithubAPIInfo.APIKey}`,
    },
    data: convertQueryData({ queryType: "user", username }),
  });
};
