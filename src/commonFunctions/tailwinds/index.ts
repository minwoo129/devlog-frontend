import { ClassNameValue, twMerge } from "tailwind-merge";
import { cx } from "class-variance-authority";

export const classMerge = (classes: ClassNameValue[]) => {
  return twMerge(cx(classes));
};
