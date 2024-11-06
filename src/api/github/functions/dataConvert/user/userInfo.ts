import { User } from "@/api/github/dataObjects/VO/GraphQL";
import { GithubUserInfo } from "./types";

export const extractUserInfo = (user: User) => {
  const { name, avatarUrl } = user;

  const res: GithubUserInfo = {
    name,
    avatarUrl,
  };

  return res;
};
