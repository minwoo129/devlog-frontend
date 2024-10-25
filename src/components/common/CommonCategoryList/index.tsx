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
    "flex flex-row h-fit justify-start items-center flex-wrap scrollbar-hide last:mr-0",
    //"mt-10 py-4",
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
