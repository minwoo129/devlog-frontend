import { ClassNameValue, twMerge } from "tailwind-merge";
import { cx } from "class-variance-authority";
import { clsx, ClassValue } from "clsx";
import { classMergeBySCFuncType, joinFuncType } from "./types";

export const classMerge = (classes: ClassNameValue[]) => {
  return twMerge(cx(classes));
};

export const classMergeBySC: classMergeBySCFuncType = (classes) => {
  let classes1: ClassValue[] = [];

  const join: joinFuncType = (args) => {
    const { l, limit, bc, classArr } = args;
    let { res } = args;
    if (l === limit) {
      return res;
    }

    let newStyle = "";
    for (let classValueItem of classArr) {
      newStyle += `${bc[l]}:${classValueItem} `;
    }

    return join({ bc, l: l + 1, limit, res: [...res, newStyle], classArr });
  };

  for (let c of classes) {
    const { type, className } = c;
    if (type === "default") {
      classes1.push(className);
      continue;
    }
    const { bc } = c;
    const classArr = className.split(" ");
    classes1.push(join({ l: 0, limit: bc.length, res: [], bc, classArr }));
  }

  return twMerge(clsx(classes1));
};
