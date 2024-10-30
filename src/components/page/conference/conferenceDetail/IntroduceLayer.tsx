"use client";
import SVGImage from "@/components/common/SVGImage";
import {
  HeldImminentProps,
  HeldProps,
  IntroduceDetailLayerProps,
  IntroduceDetailMoreInfoLayerProps,
  IntroduceLayerLogoProps,
  IntroduceLayerProps,
  YoutubeLiveButtonProps,
} from "./types";
import { motion, Variants } from "framer-motion";
import { ConferenceObjDatas } from "@/commonDatas/conferences";
import CampaignIcon from "@mui/icons-material/Campaign";
import CelebrationIcon from "@mui/icons-material/Celebration";
import { checkIntroBadgeVisible } from "@/commonFunctions/conference";
import { checkYoutubeLiveStatus } from "./convertDataFunctions";
import Link from "next/link";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { classMerge } from "@/commonFunctions/tailwinds";
import { useState } from "react";

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
const moreInfo: Variants = {
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
const youtubelive: Variants = {
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
  const detailClassName = convertClassNameByScreenSize({
    componentName: "detailLayer_썸네일_밖",
  });
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-row flex-wrap w-full h-fit mt-10 "
    >
      <IntroduceLayerLogo confData={confData} />
      <IntroduceDetailLayer
        confData={confData}
        className={detailClassName}
        variants={detail}
      />

      <IntroduceDetailMoreInfoLayer type={conference} />
    </motion.div>
  );
}

const IntroduceLayerLogo = (args: IntroduceLayerLogoProps) => {
  const { confData } = args;
  const { thumbnailURL } = confData;
  const [dimVisible, setDimVisible] = useState(false);
  const width = window.innerWidth;
  const detailClassName = convertClassNameByScreenSize({
    componentName: "detailLayer_썸네일_안",
  });
  return (
    <motion.div
      variants={logo}
      className="flex justify-center items-center w-full max-w-[400px] h-[260px] rounded-2xl shadow-xl bg-slate-200 mx-2 my-3  relative"
      onClick={() => setDimVisible(!dimVisible)}
      aria-disabled={width >= 768}
    >
      <SVGImage name={thumbnailURL} width={200} height={200} />
      <IntroduceDetailLayer
        visible={dimVisible}
        confData={confData}
        className={detailClassName}
        isDimScreen={true}
      />
    </motion.div>
  );
};

const IntroduceDetailLayer = (args: IntroduceDetailLayerProps) => {
  const {
    visible = true,
    confData,
    className,
    variants,
    isDimScreen = false,
  } = args;
  const { title, description, publisher, date_개막시기 } = confData;
  const { badgeTitle, visibleIcon } = checkIntroBadgeVisible({
    conferenceData: confData,
  });
  const style = classMerge([
    " flex flex-col justify-between items-start w-full max-w-[400px] h-[260px] p-6 rounded-2xl ",
    className,
  ]);
  if (!visible) return null;
  return (
    <motion.div variants={variants} className={style}>
      <div className="flex flex-col justify-center items-start">
        <h1
          className={`text-2xl ${
            isDimScreen ? "text-slate-900" : "text-slate-700"
          } font-nanumneo-eb`}
        >
          {title}
        </h1>
        <h3
          className={`text-lg ${
            isDimScreen ? "text-white" : "text-slate-500"
          } font-nanumneo-b mt-1`}
        >
          {description}
        </h3>
      </div>
      <div className="flex flex-col justify-center items-start">
        <h4
          className={` ${
            isDimScreen ? "text-white" : "text-slate-500"
          } font-nanumneo-r`}
        >{`개최사: ${publisher}`}</h4>
        <h4
          className={` ${
            isDimScreen ? "text-white" : "text-slate-500"
          } font-nanumneo-r`}
        >{`${date_개막시기}`}</h4>
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

const IntroduceDetailMoreInfoLayer = (
  args: IntroduceDetailMoreInfoLayerProps
) => {
  const { type } = args;
  const liveData = checkYoutubeLiveStatus(type);

  return (
    <motion.div
      variants={moreInfo}
      className="flex flex-col justify-between items-start w-fit h-fit mx-2 my-3 "
    >
      <YoutubeLiveButton liveData={liveData} />
    </motion.div>
  );
};

const YoutubeLiveButton = (args: YoutubeLiveButtonProps) => {
  const { liveData } = args;

  if (!liveData) return null;

  return (
    <motion.div variants={youtubelive}>
      <Link href={`/youtubeLive?id=${liveData.videoId}`}>
        <div className="px-3 py-1 border-2 border-[#ff0000] rounded-full flex flex-row justify-center items-center transition ease-in-out duration-300 hover:-translate-y-2">
          <YouTubeIcon sx={{ color: "#ff0000", width: 30, height: 30 }} />
          <p className="text-lg font-nanumneo-b ml-1 text-[#ff0000]">
            라이브 방송 중
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

type convertClassNameByScreenSizeArgs = {
  componentName: "detailLayer_썸네일_밖" | "detailLayer_썸네일_안";
};
const mediaQueryLimit = {
  detailLayer_썸네일_밖: ["vsm", "sm1", "sm2"],
  detailLayer_썸네일_안: ["md1", "md2", "lg1", "lg2", "xl1", "xl2", "vxl"],
};
const attemptClassName = {
  detailLayer_썸네일_밖: ["hidden"],
  detailLayer_썸네일_안: ["hidden"],
};
const defaultClassName = {
  detailLayer_썸네일_밖: " shadow-xl bg-slate-200 mx-2 my-3 ",
  detailLayer_썸네일_안: " absolute bg-black/45 ",
};
const convertClassNameByScreenSize = (
  args: convertClassNameByScreenSizeArgs
) => {
  const { componentName } = args;
  let className = "";
  className += defaultClassName[componentName];
  for (let mq of mediaQueryLimit[componentName]) {
    for (let cn of attemptClassName[componentName]) {
      className += ` ${mq}:${cn}`;
    }
  }
  return className;
};
