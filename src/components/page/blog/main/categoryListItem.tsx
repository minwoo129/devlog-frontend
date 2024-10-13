"use client";
import { motion } from "framer-motion";
import { CategoryListItemProps } from "./types";
import Link from "next/link";

export default function CategoryListItem(args: CategoryListItemProps) {
  const { categoryData } = args;
  const { title, href } = categoryData;
  return (
    <motion.div
      //className="flex w-28 h-40 rounded-xl bg-gray-500 mr-4"
      initial={{
        opacity: 0,
        x: 30,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      }}
    >
      <Link href={href}>
        <div className=" flex flex-row w-44 h-56 mr-6 shadow-lg transition ease-in-out duration-300 hover:-translate-y-2">
          <div className="w-3 h-full bg-gray-800 rounded-l-lg" />
          <div className="flex w-full h-full justify-center items-center bg-amber-600 rounded-r-lg shadow-inner">
            <p className=" text-3xl text-white overflow whitespace-normal text-center underline">
              {title}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
