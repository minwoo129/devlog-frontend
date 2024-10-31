"use client";
import { YearConfListProps } from "./types";
import { motion, Variants } from "framer-motion";
import YearConfItem from "./YearConfItem";
import { ConferenceObjDatas } from "@/commonDatas/conferences";
import { classMerge } from "@/commonFunctions/tailwinds";

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

export default function YearConfList(args: YearConfListProps) {
  const { conference } = args;
  const historys = ConferenceObjDatas[conference].confHistory;

  if (historys.length === 0) {
    return (
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-row justify-center items-center mt-20 py-[80px] sm:mt-10 md:mt-10 "
      >
        <h1 className="text-5xl font-nanumneo-eb text-slate-700 sm:text-2xl md:text-3xl">
          등록된 데이터가 없습니다.
        </h1>
      </motion.div>
    );
  }

  const styles = classMerge([
    "grid grid-cols-1 gap-8 justify-center mt-10",
    "sm2:grid-cols-1 sm2:gap-8",
    "md1:grid-cols-2 md1:gap-8",
    "md2:grid-cols-2 md2:gap-8",
    "lg:grid-cols-3 lg:gap-7",
    "xl:grid-cols-4 xl:gap-6",
  ]);
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className={styles}
    >
      {historys.map((history, idx) => {
        return <YearConfItem conf={history} key={idx} />;
      })}
    </motion.div>
  );
}
