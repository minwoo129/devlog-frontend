"use client";
import { classMerge } from "@/commonFunctions/tailwinds";
import CommonPostListItem from "./CommonPostListItem";
import { CommonPostListProps } from "./types";
import { motion, Variants } from "framer-motion";

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
export default function CommonPostList(args: CommonPostListProps) {
  const { posts, className, isCategoryDetailPage = false } = args;
  const containerStyle = classMerge([
    "grid grid-cols-1 gap-8 justify-center py-12 overflow-y-scroll scrollbar-hide ",
    "md:grid-cols-2 md:gap-6",
    "lg:grid-cols-3 lg:gap-7",
    "xl1:grid-cols-4 xl1:gap-10",
    "xl2:grid-cols-4 xl2:gap-10",
    "vxl:grid-cols-4 vxl:gap-10",
    className,
  ]);

  if (posts.length === 0) {
    return (
      <motion.div
        variants={container}
        className="w-full flex flex-row justify-center items-center py-[80px] mt-20 sm:mt-0 md:mt-10"
      >
        <h1 className="text-5xl font-nanumneo-eb text-slate-700 sm:text-2xl md:text-3xl">
          등록된 포스트가 없습니다.
        </h1>
      </motion.div>
    );
  }
  return (
    <motion.div
      className={containerStyle}
      variants={container}
      initial="hidden"
      animate="show"
    >
      {posts.map((post, idx) => {
        return (
          <CommonPostListItem
            post={post}
            isCategoryDetailPage={isCategoryDetailPage}
            key={idx}
          />
        );
      })}
    </motion.div>
  );
}
