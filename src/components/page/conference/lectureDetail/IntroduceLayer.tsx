"use client";
import { motion, Variants } from "framer-motion";
import {
  IntroduceLayerInfoProps,
  IntroduceLayerLectureVideoProps,
  IntroduceLayerProps,
} from "./types";
import Image from "next/image";
import dayjs from "dayjs";
import Tag from "@/components/common/Tag";
import { TotalConferences } from "@/commonDatas/conferences";

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

const info: Variants = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  show: {
    opacity: 1,
    x: 0,
  },
};

export default function IntroduceLayer(args: IntroduceLayerProps) {
  const { lecture } = args;
  const {
    title,
    description,
    createdAt,
    conferenceId,
    keyTags,
    youtubeVideoInfo,
  } = lecture;
  const { embedURL } = youtubeVideoInfo;
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-col desktop:flex-row h-fit desktop:justify-between desktop:items-start mt-10 py-5"
    >
      <IntroduceLayerLectureVideo youtubeLink={embedURL} />
      <IntroduceLayerInfo
        title={title}
        createdAt={createdAt}
        description={description}
        conferenceId={conferenceId}
        keyTags={keyTags}
      />
    </motion.div>
  );
}

const IntroduceLayerLectureVideo = (args: IntroduceLayerLectureVideoProps) => {
  const { youtubeLink } = args;

  return (
    <motion.div variants={thumbnail} className="w-full aspect-video mr-4 ">
      <iframe src={youtubeLink} width={"100%"} height={"100%"} />
    </motion.div>
  );
};

const IntroduceLayerInfo = (args: IntroduceLayerInfoProps) => {
  const { title, description, createdAt, conferenceId, keyTags } = args;
  let conferenceName = "";
  const conferenceData = TotalConferences.find(
    (conf) => conf.id === conferenceId
  );
  if (conferenceData) {
    conferenceName = conferenceData.title;
  }

  return (
    <motion.div
      variants={info}
      className="flex flex-col p-6 w-full h-full rounded-2xl shadow-xl bg-slate-100 mobile:mt-4 tablet:mt-4 laptop:mt-4 "
    >
      <h1 className="text-4xl text-slate-700 font-nanumneo-eb">{title}</h1>
      <p className="text-lg text-slate-400 font-nanumneo-r mt-2">
        {conferenceName}
      </p>
      <p className="text-lg text-slate-400 font-nanumneo-r mt-6">
        {description}
      </p>
      <p className="text-lg text-slate-400 font-nanumneo-r mt-5">
        {dayjs(createdAt).format("YY.MM.DD")}
      </p>

      <div className="flex flex-row flex-wrap w-full mt-4">
        {keyTags?.map((tag, idx) => {
          return <Tag tag={tag} className="mt-1 mr-1" key={idx} />;
        })}
      </div>
    </motion.div>
  );
};
