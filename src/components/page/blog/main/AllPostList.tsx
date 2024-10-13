"use client";
import { motion, Variants } from "framer-motion";
import AllPostListItem from "./AllPostListItem";
import { AllPostListProps } from "./types";

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

export default function AllPostList(args: AllPostListProps) {
  const { posts } = args;
  return (
    <motion.div
      className="w-full min-h-20 mt-3 grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 gap-x-8"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {posts.map((post, idx) => {
        return <AllPostListItem post={post} key={idx} />;
      })}
    </motion.div>
  );
}
