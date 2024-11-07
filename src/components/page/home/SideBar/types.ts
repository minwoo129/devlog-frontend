import { GithubUserDataResponseType } from "@/api/github/dataObjects/DTO/GraphQL";

export interface SideBarProps {
  gitUserData: GithubUserDataResponseType | null;
}

export interface DefaultViewProps {}
