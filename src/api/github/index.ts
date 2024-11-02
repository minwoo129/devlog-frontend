import axios from "axios";
import { convertQueryData } from "./querys";
import { GithubUserDataResponseType } from "./types";
export const getGithubUserData = ({ username }: { username: string }) => {
  return axios<GithubUserDataResponseType>({
    method: "post",
    url: "https://api.github.com/graphql",
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_AUTH_TOKEN}`,
    },
    data: convertQueryData({ queryType: "user", username }),
  });
};
