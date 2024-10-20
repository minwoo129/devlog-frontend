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
