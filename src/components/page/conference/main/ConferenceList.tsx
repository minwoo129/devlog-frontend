"use client";
import { motion, Variants } from "framer-motion";
import { ConferenceListProps } from "./types";
import { ConferenceDatas } from "./defDatas";
import ConferenceListItem from "./ConferenceListItem";

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

export default function ConferenceList(args: ConferenceListProps) {
  const {} = args;
  return (
    <motion.div
      className="flex flex-row sm:flex-col md:flex-col h-fit justify-start items-center mt-10 py-4 overflow-x-scroll scrollbar-hide last:mr-0"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {ConferenceDatas.map((data, idx) => {
        return <ConferenceListItem categoryData={data} key={idx} />;
      })}
    </motion.div>
  );
}
