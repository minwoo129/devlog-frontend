"use client";
import { motion } from "framer-motion";
import { ConferenceListProps } from "./types";
import ConferenceListItem from "./ConferenceListItem";
import { ConferenceDatas } from "@/commonDatas/conferences";
import { FadeInWithChildren } from "@/themes/framerMotionVariants";

export default function ConferenceList(args: ConferenceListProps) {
  const {} = args;
  return (
    <motion.div
      className="flex flex-row sm:flex-col md:flex-col h-fit justify-start items-center mt-10 py-4 overflow-x-scroll scrollbar-hide last:mr-0"
      variants={FadeInWithChildren["sc_0.1"]}
      initial="hidden"
      animate="show"
    >
      {ConferenceDatas.map((data, idx) => {
        return <ConferenceListItem categoryData={data} key={idx} />;
      })}
    </motion.div>
  );
}
