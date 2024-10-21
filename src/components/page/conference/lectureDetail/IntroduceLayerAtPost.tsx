"use client";
import { motion, Variants } from "framer-motion";
import {
  IntroduceLayerAtPostProps,
  LayerAtPostDetailProps,
  LayerAtPostVideoProps,
} from "./types";
import { classMerge } from "@/commonFunctions/tailwinds";
import { TotalConferences } from "@/commonDatas/conferences";
import dayjs from "dayjs";
import Tag from "@/components/common/Tag";

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
const detailLayer: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const thumbnail: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

const infoItem: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

export const IntroduceLayerAtPost = (args: IntroduceLayerAtPostProps) => {
  const {
    conferenceId,
    createdAt,
    description,
    title,
    keyTags,
    youtubeEmbedLink,
  } = args;

  const containerStyle = classMerge([
    "flex flex-col w-full justify-between items-start mt-4",
    "xl2:sticky xl2:top-12 xl2:right-12 xl2:flex-col xl2:w-[550px]",
    "vxl:sticky vxl:top-12 vxl:right-12 vxl:flex-col vxl:w-[550px]",
  ]);

  let conferenceName = "";
  const conferenceData = TotalConferences.find(
    (conf) => conf.id === conferenceId
  );
  if (conferenceData) {
    conferenceName = conferenceData.title;
  }
  return (
    <motion.div variants={container} className={containerStyle}>
      <LayerAtPostVideo youtubeEmbedLink={youtubeEmbedLink} />
      <LayerAtPostDetail
        conferenceName={conferenceName}
        createdAt={createdAt}
        description={description}
        title={title}
        keyTags={keyTags}
      />
    </motion.div>
  );
};

const LayerAtPostVideo = (args: LayerAtPostVideoProps) => {
  const { youtubeEmbedLink } = args;

  const style = classMerge([
    "w-full shadow-xl",
    "aspect-video",
    "lg1:w-[650px]",
    "lg2:w-[650px]",
    "xl1:w-[700px]",
    "xl2:w-full",
    "vxl:w-full",
  ]);
  return (
    <motion.div variants={thumbnail} className={style}>
      <iframe src={youtubeEmbedLink} width={"100%"} height={"100%"} />
    </motion.div>
  );
};

const LayerAtPostDetail = (args: LayerAtPostDetailProps) => {
  const { conferenceName, createdAt, description, title, keyTags } = args;

  const style = classMerge([
    "w-full mt-8 rounded-xl p-5 bg-green-200 shadow-lg",
    "xl2:w-full xl2:mt-4",
    "vxl:w-full vxl:mt-4",
  ]);
  return (
    <motion.div
      variants={detailLayer}
      className={style}
      initial="hidden"
      animate="show"
    >
      <motion.h1
        variants={infoItem}
        className="text-4xl text-slate-800 font-nanumneo-eb"
      >
        {title}
      </motion.h1>
      <motion.p
        variants={infoItem}
        className="text-lg text-slate-500 font-nanumneo-r mt-2"
      >
        {conferenceName}
      </motion.p>
      <motion.p
        variants={infoItem}
        className="text-lg text-slate-500 font-nanumneo-r mt-6 mobile:hidden tablet:hidden"
      >
        {description}
      </motion.p>
      <motion.p
        variants={infoItem}
        className="text-lg text-slate-500 font-nanumneo-r mt-5"
      >
        {dayjs(createdAt).format("YY.MM.DD")}
      </motion.p>

      <motion.div
        variants={infoItem}
        className="flex flex-row flex-wrap w-full mt-4"
      >
        {keyTags?.map((tag, idx) => {
          return <Tag tag={tag} className="mt-1 mr-1" key={idx} />;
        })}
      </motion.div>
    </motion.div>
  );
};