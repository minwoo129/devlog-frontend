"use client";
import SVGImage from "@/components/common/SVGImage";
import { ConferenceObjDatas } from "../main/defDatas";
import {
  IntroduceDetailLayerProps,
  IntroduceLayerLogoProps,
  IntroduceLayerProps,
} from "./types";
import { motion, Variants } from "framer-motion";

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
const logo: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};
const detail: Variants = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  show: {
    opacity: 1,
    x: 0,
  },
};

export default function IntroduceLayer(args: IntroduceLayerProps) {
  const { conference } = args;
  const confData = ConferenceObjDatas[conference];
  const { title, description, date_개막시기, publisher, thumbnailURL } =
    confData;
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-row w-full h-fit mt-10"
    >
      <IntroduceLayerLogo thumbnailURL={thumbnailURL} />
      <IntroduceDetailLayer
        title={title}
        description={description}
        date_개막시기={date_개막시기}
        publisher={publisher}
      />
    </motion.div>
  );
}

const IntroduceLayerLogo = (args: IntroduceLayerLogoProps) => {
  const { thumbnailURL } = args;
  return (
    <motion.div
      variants={logo}
      className="flex justify-center items-center w-[240px] h-[240px] rounded-2xl shadow-xl bg-slate-200 mr-4"
    >
      <SVGImage name={thumbnailURL} width={200} height={200} />
    </motion.div>
  );
};

const IntroduceDetailLayer = (args: IntroduceDetailLayerProps) => {
  const { title, description, publisher, date_개막시기 } = args;
  return (
    <motion.div
      variants={detail}
      className=" flex flex-col justify-start items-start p-6 min-w-[400px] h-[240px] rounded-2xl shadow-xl bg-slate-200"
    >
      <h1 className="text-2xl text-slate-700 font-nanumneo-eb mt-3">{title}</h1>
      <h3 className="text-lg text-slate-500 font-nanumneo-b mt-1">
        {description}
      </h3>
      <h4 className="text-lg text-slate-500 font-nanumneo-r mt-7">{`개최사: ${publisher}`}</h4>
      <h4 className="text-lg text-slate-500 font-nanumneo-r">{`${date_개막시기} 개최`}</h4>
    </motion.div>
  );
};
