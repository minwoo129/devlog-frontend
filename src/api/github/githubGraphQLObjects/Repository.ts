import { LanguageConnection } from "./LanguageConnection";

export type Repository = {
  name: string | null | undefined;
  createdAt: string;
  languages: LanguageConnection;
};
