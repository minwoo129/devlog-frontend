import { LanguageConnection } from "./LanguageConnection";

export type Repository = {
  name: string;
  createdAt: string;
  languages: LanguageConnection;
};
