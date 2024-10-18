"use client";
import { motion, Variants } from "framer-motion";
import CategoryListItem from "./categoryListItem";
import { CategoryListProps } from "./types";
import { ConferenceLogNavDatas, DevLogNavDatas } from "@/commonDatas/routes";

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
  const { posts, categoryType } = args;
  const navDatas =
    categoryType === "devlog" ? DevLogNavDatas : ConferenceLogNavDatas;
  return (
    <motion.div
      className="flex flex-row h-fit justify-start items-center mt-10 py-4 overflow-x-scroll scrollbar-hide last:mr-0"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {navDatas
        .filter((data) => data.mainCategory)
        .map((data, idx) => {
          return (
            <CategoryListItem
              categoryData={data}
              categoryType={categoryType}
              key={idx}
            />
          );
        })}
    </motion.div>
  );
}
