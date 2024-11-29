"use client";
import { classMerge } from "@/commonFunctions/tailwinds";
import { CommonCategoryListProps } from "./types";
import { motion } from "framer-motion";
import CommonCategoryListItem from "./CommonCategoryListItem";
import { FadeInWithChildren } from "@/themes/framerMotionVariants";

export default function CommonCategoryList(args: CommonCategoryListProps) {
  const { categorys, className } = args;
  const style = classMerge([
    "flex flex-row h-fit justify-start items-center overflow-x-scroll scrollbar-hide last:mr-0",
    "md2:flex-wrap",
    "lg1:flex-wrap",
    "lg2:flex-wrap",
    "xl1:flex-wrap",
    "xl2:flex-wrap",
    "vxl:flex-wrap",
    className,
  ]);
  return (
    <motion.div
      variants={FadeInWithChildren["sc_0.1"]}
      className={style}
      initial="hidden"
      animate="show"
    >
      {categorys.map((category, idx) => {
        return <CommonCategoryListItem category={category} key={idx} />;
      })}
    </motion.div>
  );
}
