"use client";
import { motion, Variants } from "framer-motion";
import { IntroduceLayerInfoProps, IntroduceLayerProps } from "./types";
import dayjs from "dayjs";
import Tag from "@/components/common/Tag";
import { TotalConferences } from "@/commonDatas/conferences";
import { classMerge } from "@/commonFunctions/tailwinds";
import Image from "next/image";

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
  const { thumbnailURL } = youtubeVideoInfo;

  const containerStyle = classMerge([
    "flex flex-col h-fit items-start justify-between w-full",
    "xl2:flex-row",
    "vxl:flex-row",
  ]);
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className={containerStyle}
    >
      <IntroduceLayerInfo
        title={title}
        createdAt={createdAt}
        description={description}
        conferenceId={conferenceId}
        keyTags={keyTags}
        thumbnailURL={thumbnailURL}
      />
    </motion.div>
  );
}

const IntroduceLayerInfo = (args: IntroduceLayerInfoProps) => {
  const { title, description, createdAt, conferenceId, keyTags, thumbnailURL } =
    args;
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
      className={
        "flex flex-col p-6 w-full rounded-2xl bg-white aspect-video max-w-[900px]"
      }
    >
      <Image
        src={thumbnailURL}
        alt="thumbnail"
        fill
        objectFit="cover"
        className="-z-10 opacity-30"
      />
      <h1 className={"text-4xl text-slate-800 font-nanumneo-eb"}>{title}</h1>
      <p
        className={"text-lg text-slate-800 font-nanumneo-r mt-2 max-w-[600px]"}
      >
        {conferenceName}
      </p>
      <p
        className={"text-lg text-slate-800 font-nanumneo-r mt-6 max-w-[600px]"}
      >
        {description}
      </p>
      <p
        className={"text-lg text-slate-800 font-nanumneo-r mt-5 max-w-[600px]"}
      >
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
