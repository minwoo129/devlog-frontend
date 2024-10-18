"use client";
import SVGImage from "@/components/common/SVGImage";
import {
  HeldImminentProps,
  HeldProps,
  IntroduceDetailLayerProps,
  IntroduceLayerLogoProps,
  IntroduceLayerProps,
} from "./types";
import { motion, Variants } from "framer-motion";
import { ConferenceObjDatas } from "@/commonDatas/conferences";
import CampaignIcon from "@mui/icons-material/Campaign";
import CelebrationIcon from "@mui/icons-material/Celebration";

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
const icon: Variants = {
  hidden: {
    opacity: 0,
    y: -100,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

export default function IntroduceLayer(args: IntroduceLayerProps) {
  const { conference } = args;
  const confData = ConferenceObjDatas[conference];
  const {
    title,
    description,
    date_개막시기,
    publisher,
    thumbnailURL,
    introduceIcon,
  } = confData;

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-row sm:flex-col md:flex-col w-full h-fit mt-10 relative"
    >
      <IntroduceLayerLogo thumbnailURL={thumbnailURL} />
      <IntroduceDetailLayer
        title={title}
        description={description}
        date_개막시기={date_개막시기}
        publisher={publisher}
      />
      <HeldImminent visible={introduceIcon === "heldImminent"} />
      <Held title={title} visible={introduceIcon === "held"} />
    </motion.div>
  );
}

const IntroduceLayerLogo = (args: IntroduceLayerLogoProps) => {
  const { thumbnailURL } = args;
  return (
    <motion.div
      variants={logo}
      className="flex justify-center items-center w-[260px] h-[260px] min-w-[400px] rounded-2xl shadow-xl bg-slate-200 mr-4 sm:w-full md:w-full"
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
      className=" flex flex-col justify-between items-start p-6 min-w-[400px] h-[260px] rounded-2xl shadow-xl bg-slate-200 sm:mt-4 md:mt-4"
    >
      <div className="flex flex-col justify-center items-start">
        <h1 className="text-2xl text-slate-700 font-nanumneo-eb">{title}</h1>
        <h3 className="text-lg text-slate-500 font-nanumneo-b mt-1">
          {description}
        </h3>
      </div>
      <div className="flex flex-col justify-center items-start">
        <h4 className=" text-slate-500 font-nanumneo-r">{`개최사: ${publisher}`}</h4>
        <h4 className=" text-slate-500 font-nanumneo-r">{`${date_개막시기}`}</h4>
      </div>
    </motion.div>
  );
};

const HeldImminent = (args: HeldImminentProps) => {
  const { visible } = args;
  if (!visible) return null;
  return (
    <motion.div
      variants={icon}
      className="flex flex-row justify-center items-center border-2 border-red-400 absolute left-20 -bottom-10"
    >
      <CampaignIcon color="error" className=" w-[100px] h-[100px] mr-2" />
      <p className="text-6xl font-nanumneo-eb text-red-600">개최임박</p>
    </motion.div>
  );
};

const Held = (args: HeldProps) => {
  const { title, visible } = args;
  if (!visible) return null;

  return (
    <motion.div
      variants={icon}
      className="flex flex-row justify-center items-center border-2 border-red-400 absolute sm:-left-4 sm:-top-3 md:-left-4 md:-top-3 lg:left-5 lg:-bottom-10 xl:left-5 xl:-bottom-10 "
    >
      <CelebrationIcon
        color="warning"
        className=" sm:w-[60px] sm:h-[60px] md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[80px] xl:w-[80px] xl:h-[80px] mr-2"
      />
      <p className=" sm:text-2xl md:text-2xl lg:text-4xl xl:text-4xl font-nanumneo-eb text-yellow-500">{`${title} 개최!!!`}</p>
    </motion.div>
  );
};
