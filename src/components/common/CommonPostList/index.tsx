"use client";
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
  return (
    <motion.div
      className={`w-full min-h-20 mt-3 grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 gap-x-8 ${className}`}
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
