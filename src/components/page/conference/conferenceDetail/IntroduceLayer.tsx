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
import dayjs from "dayjs";
import { IntroduceIconType } from "@/commonDatas/conferences/types";
import { checkIntroBadgeVisible } from "@/commonFunctions/conference";

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
  const { title, description, date_개막시기, publisher, thumbnailURL } =
    confData;

  const { badgeTitle, visibleIcon } = checkIntroBadgeVisible({
    conferenceData: confData,
  });

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-row sm:flex-col md:flex-col w-full h-fit mt-10"
    >
      <IntroduceLayerLogo thumbnailURL={thumbnailURL} />
      <IntroduceDetailLayer
        title={title}
        description={description}
        date_개막시기={date_개막시기}
        publisher={publisher}
        visibleIcon={visibleIcon}
        badgeTitle={badgeTitle}
      />
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
  const {
    title,
    description,
    publisher,
    date_개막시기,
    badgeTitle,
    visibleIcon,
  } = args;
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
        <HeldImminentBadge
          badgeTitle={badgeTitle}
          visible={visibleIcon === "heldImminent"}
        />
        <HeldBadge badgeTitle={badgeTitle} visible={visibleIcon === "held"} />
      </div>
    </motion.div>
  );
};

const HeldImminentBadge = (args: HeldImminentProps) => {
  const { visible, badgeTitle } = args;
  if (!visible) return null;
  return (
    <div className="flex flex-row justify-center items-center mt-3 border-2 border-red-400">
      <CampaignIcon color="error" className="w-10 h-10 mr-2" />
      <p className="text-xl font-nanumneo-eb text-red-600">{`${badgeTitle}`}</p>
    </div>
  );
};

const HeldBadge = (args: HeldProps) => {
  const { badgeTitle, visible } = args;
  if (!visible) return null;

  return (
    <motion.div
      variants={icon}
      className="flex flex-row justify-center items-center mt-3 border-2 border-red-400"
    >
      <CelebrationIcon color="warning" className=" w-10 h-10 mr-2" />
      <p className=" text-xl font-nanumneo-eb text-yellow-500">{`${badgeTitle}`}</p>
    </motion.div>
  );
};
