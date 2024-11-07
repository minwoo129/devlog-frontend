import { GithubUserDataResponseType } from "@/lib/github/dataObjects/DTO/GraphQL";

export interface SideBarProps {
  gitUserData: GithubUserDataResponseType | null;
}

export interface DefaultViewProps {}
