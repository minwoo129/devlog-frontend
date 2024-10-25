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

export const testBackground = (type: "type1" | "type2" | "type3") => {
  if (type === "type1") {
    return classMerge([
      "sm:bg-red-400",
      "md:bg-blue-400",
      "lg:bg-green-400",
      "xl:bg-yellow-400",
    ]);
  }
  if (type === "type2") {
    return classMerge([
      "mobile:bg-red-400",
      "tablet:bg-blue-400",
      "laptop:bg-green-400",
      "desktop:bg-yellow-400",
    ]);
  }

  return classMerge([
    "vsm:bg-red-400",
    "sm1:bg-blue-300",
    "sm2:bg-blue-600",
    "md1:bg-green-300",
    "md2:bg-green-600",
    "lg1:bg-yellow-300",
    "lg2:bg-yellow-600",
    "xl1:bg-orange-300",
    "xl2:bg-orange-600",
    "vxl:bg-emerald-400",
  ]);
};

export const TestBackground1 =
  "sm:bg-red-400 md:bg-blue-400 lg:bg-green-400 xl:bg-yellow-400";
export const TestBackground2 =
  "mobile:bg-red-400 tablet:bg-blue-400 laptop:bg-green-400 desktop:bg-yellow-400";
export const TestBackground3 =
  "vsm:bg-red-400 sm1:bg-blue-300 sm2:bg-blue-600 md1:bg-green-300 md2:bg-green-600 lg1:bg-yellow-300 lg2:bg-yellow-600 xl1:bg-orange-300 xl2:bg-orange-600 vxl:bg-emerald-400";
