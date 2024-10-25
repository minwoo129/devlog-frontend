"use client";
import { YearConfListProps } from "./types";
import { motion, Variants } from "framer-motion";
import YearConfItem from "./YearConfItem";
import { ConferenceObjDatas } from "@/commonDatas/conferences";

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
  const { conference, onYearConfClick } = args;
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
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-row flex-wrap mt-10 "
    >
      {historys.map((history, idx) => {
        return (
          <YearConfItem
            onYearConfClick={onYearConfClick}
            conf={history}
            key={idx}
          />
        );
      })}
    </motion.div>
  );
}
