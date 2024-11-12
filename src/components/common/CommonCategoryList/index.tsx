"use client";
import { classMerge } from "@/commonFunctions/tailwinds";
import { CommonCategoryListProps } from "./types";
import { motion, Variants } from "framer-motion";
import CommonCategoryListItem from "./CommonCategoryListItem";

const container: Variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

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
      variants={container}
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
