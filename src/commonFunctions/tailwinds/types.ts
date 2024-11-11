import { ClassValue } from "clsx";

export type classMergeBySCFuncType = (classes: MergeClassType[]) => string;
export type MergeClassType = MergeDefaultClassType | MergeBCClassType;
type MergeDefaultClassType = {
  type: "default";
  className: string;
};
type MergeBCClassType = {
  type: "bc";
  bc: TWBC[];
  className: string;
};

export type TWBC =
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "mobile"
  | "tablet"
  | "laptop"
  | "desktop"
  | "vsm"
  | "sm1"
  | "sm2"
  | "md1"
  | "md2"
  | "lg1"
  | "lg2"
  | "xl1"
  | "xl2"
  | "vxl";

export type joinFuncType = (args: joinFuncArgsType) => ClassValue[];
type joinFuncArgsType = {
  l: number;
  limit: number;
  res: ClassValue[];
  bc: TWBC[];
  classArr: string[];
};
