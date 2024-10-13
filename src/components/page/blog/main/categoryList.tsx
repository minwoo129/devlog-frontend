"use client";
import { DevLogNavDatas } from "@/components/common/navigation/navDatas";
import { motion } from "framer-motion";
import CategoryListItem from "./categoryListItem";

export default function CategoryList() {
  return (
    <motion.div
      className="flex flex-row h-fit justify-start items-center mt-10 py-4 overflow-x-scroll scrollbar-hide last:mr-0"
      animate={{ transition: { staggerChildren: 0.1 } }}
    >
      {DevLogNavDatas.filter((data) => data.mainCategory).map((data, idx) => {
        return <CategoryListItem categoryData={data} key={idx} />;
      })}
    </motion.div>
  );
}
