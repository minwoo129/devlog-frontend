"use client";
import { DevLogNavDatas } from "@/components/common/navigation/navDatas";
import { motion, Variants } from "framer-motion";
import CategoryListItem from "./categoryListItem";
import { CategoryListProps } from "./types";

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

export default function CategoryList(args: CategoryListProps) {
  const { posts } = args;
  return (
    <motion.div
      className="flex flex-row h-fit justify-start items-center mt-10 py-4 overflow-x-scroll scrollbar-hide last:mr-0"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {DevLogNavDatas.filter((data) => data.mainCategory).map((data, idx) => {
        return <CategoryListItem categoryData={data} key={idx} />;
      })}
    </motion.div>
  );
}
