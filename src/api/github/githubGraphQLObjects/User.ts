import { ContributionsCollection } from "./ContributionsCollection";
import { RepositoryConnection } from "./RepositoryConnection";

export type User = {
  name: string | null | undefined;
  login: string | null | undefined;
  avatarUrl: string;
  contributionsCollection: ContributionsCollection | null | undefined;
  repositories: RepositoryConnection | undefined | null;
};
