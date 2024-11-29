"use client";
import { YearConfListProps } from "./types";
import { motion } from "framer-motion";
import YearConfItem from "./YearConfItem";
import { ConferenceObjDatas } from "@/commonDatas/conferences";
import { classMerge } from "@/commonFunctions/tailwinds";
import { FadeInWithChildren } from "@/themes/framerMotionVariants";

export default function YearConfList(args: YearConfListProps) {
  const { conference } = args;
  const historys = ConferenceObjDatas[conference].confHistory;

  if (historys.length === 0) {
    return (
      <motion.div
        variants={FadeInWithChildren["sc_0.1"]}
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
    "grid grid-cols-1 mt-10 place-items-center py-4 gap-y-8",
    "md1:grid-cols-2 ",
    "md2:grid-cols-2 ",
    "lg1:grid-cols-2 ",
    "lg2:grid-cols-2",
    "xl1:grid-cols-2 ",
    "xl2:grid-cols-2 ",
    "vxl:grid-cols-2 ",
  ]);

  return (
    <motion.div
      variants={FadeInWithChildren["sc_0.1"]}
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
