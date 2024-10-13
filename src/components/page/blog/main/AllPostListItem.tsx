"use client";
import { motion, Variants } from "framer-motion";
import { AllPostListItemProps } from "./types";
const item: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

export default function AllPostListItem(args: AllPostListItemProps) {
  const { post } = args;
  return (
    <motion.div variants={item}>
      <div className=" min-w-52 h-fit min-h-20 border-2 border-blue-400">
        <h1>{post.title}</h1>
      </div>
    </motion.div>
  );
}
