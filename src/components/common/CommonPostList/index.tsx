"use client";
import {
  classMerge,
  testBackground,
  TestBackground3,
} from "@/commonFunctions/tailwinds";
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
    "grid grid-cols-1 justify-center max-h-[300px] px-4 py-4 mt-10 overflow-y-scroll scrollbar-hide",
    "vsm:grid-cols-1 vsm:gap-8 ",
    "sm1:grid-cols-1 sm1:gap-8 sm1:px-8",
    "sm2:grid-cols-1 sm2:gap-8 sm2:px-14",
    "md1:grid-cols-2 md1:gap-6",
    "md2:grid-cols-2 md2:gap-6",
    "lg1:grid-cols-2 lg1:gap-10",
    "lg2:grid-cols-3 lg2:gap-7",
    "xl1:grid-cols-3 xl1:gap-7 xl1:max-h-[400px]",
    "xl2:grid-cols-3 xl2:gap-7 xl2:max-h-[400px]",
    "vxl:grid-cols-4 vxl:gap-10 vxl:max-h-[400px]",
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
