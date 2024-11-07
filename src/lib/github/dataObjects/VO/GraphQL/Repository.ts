import { LanguageConnection } from "./LanguageConnection";

export type Repository = {
  name: string;
  createdAt: string;
  updatedAt: string;
  visibility: "INTERNAL" | "PRIVATE" | "PUBLIC";
  languages: LanguageConnection;
};
