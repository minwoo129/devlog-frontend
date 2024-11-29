"use client";
import { motion } from "framer-motion";
import CategoryListItem from "./categoryListItem";
import { CategoryListProps } from "./types";
import { ConferenceLogNavDatas, DevLogNavDatas } from "@/commonDatas/routes";
import { FadeInWithChildren } from "@/themes/framerMotionVariants";

export default function CategoryList(args: CategoryListProps) {
  const { posts, categoryType } = args;
  const navDatas =
    categoryType === "devlog" ? DevLogNavDatas : ConferenceLogNavDatas;
  return (
    <motion.div
      className="flex flex-row h-fit justify-start items-center mt-10 py-4 flex-wrap scrollbar-hide last:mr-0"
      variants={FadeInWithChildren["sc_0.1"]}
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
