import { ContributionsCollection } from "./ContributionsCollection";
import { RepositoryConnection } from "./RepositoryConnection";

export type User = {
  name: string;
  login: string;
  avatarUrl: string;
  contributionsCollection: ContributionsCollection;
  repositories: RepositoryConnection;
};
