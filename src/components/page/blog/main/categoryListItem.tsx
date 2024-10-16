"use client";
import { motion, Variants } from "framer-motion";
import { CategoryListItemProps } from "./types";
import Link from "next/link";

const item: Variants = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  show: {
    opacity: 1,
    x: 0,
  },
};

export default function CategoryListItem(args: CategoryListItemProps) {
  const { categoryData } = args;
  const { title, href, testID } = categoryData;
  return (
    <motion.div variants={item}>
      <Link href={href}>
        <div
          data-testid={testID}
          className=" flex flex-row w-44 h-56 mr-6 shadow-lg transition ease-in-out duration-300 hover:-translate-y-2"
        >
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
