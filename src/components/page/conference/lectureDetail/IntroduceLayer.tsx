"use client";
import { motion, Variants } from "framer-motion";
import {
  IntroduceLayerButtonsGroupProps,
  IntroduceLayerInfoProps,
  IntroduceLayerProps,
  IntroduceLayerSecondInfoGridProps,
  IntroduceLayerSecondInfoProps,
  LayerButtonGroupBtnProps,
} from "./types";
import dayjs from "dayjs";
import Tag from "@/components/common/Tag";
import { TotalConferences } from "@/commonDatas/conferences";
import { classMerge } from "@/commonFunctions/tailwinds";
import Image from "next/image";
import Link from "next/link";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { useState } from "react";
import { common, red, green, blue } from "@mui/material/colors";

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
  const { conferenceId } = lecture;
  let conferenceName = "";
  const conferenceData = TotalConferences.find(
    (conf) => conf.id === conferenceId
  );
  if (conferenceData) {
    conferenceName = conferenceData.title;
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className={"flex flex-col h-fit items-start justify-start w-full p-8  "}
    >
      <IntroduceLayerInfo lecture={lecture} />
      <IntroduceLayerSecondInfoGrid
        lecture={lecture}
        conferenceName={conferenceName}
        conferenceData={conferenceData}
      />
    </motion.div>
  );
}

const IntroduceLayerInfo = (args: IntroduceLayerInfoProps) => {
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
        "flex flex-col p-6 w-full rounded-2xl bg-white aspect-video max-w-[900px] shadow-xl mr-4"
      }
    >
      <Image
        src={thumbnailURL}
        alt="thumbnail"
        fill
        objectFit="cover"
        className="-z-10 opacity-25 rounded-2xl"
      />
      <h1 className={"text-4xl text-slate-900 font-nanumneo-eb"}>{title}</h1>
      <p
        className={"text-lg text-slate-900 font-nanumneo-r mt-2 max-w-[600px]"}
      >
        {conferenceName}
      </p>
      <p
        className={"text-lg text-slate-900 font-nanumneo-r mt-6 max-w-[600px]"}
      >
        {description}
      </p>
      <p
        className={"text-lg text-slate-900 font-nanumneo-r mt-5 max-w-[600px]"}
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

const IntroduceLayerSecondInfoGrid = (
  args: IntroduceLayerSecondInfoGridProps
) => {
  const { conferenceName, lecture, conferenceData } = args;
  return (
    <motion.div className="flex flex-row justify-center items-start mt-4 xl2:flex-col xl2:mt-0 vxl:flex-col vxl:mt-0 xl2:max-w-[400px] vxl:max-w-[400px] vsm:flex-col sm1:flex-col ">
      <IntroduceLayerButtonsGroup
        lecture={lecture}
        conferenceData={conferenceData}
      />
    </motion.div>
  );
};

/* const IntroduceLayerSecondInfo = (args: IntroduceLayerSecondInfoProps) => {
  const { lecture, conferenceName } = args;
  const { title, description, createdAt, keyTags } = lecture;
  return (
    <div className="w-full bg-green-200 px-6 py-8 rounded-2xl mr-5 max-w-[400px] xl2:mr-0 vxl:mr-0 shadow-xl">
      <h1 className={"text-4xl text-slate-900 font-nanumneo-eb"}>{title}</h1>
      <p
        className={"text-lg text-slate-900 font-nanumneo-r mt-2 max-w-[600px]"}
      >
        {conferenceName}
      </p>
      <p
        className={"text-lg text-slate-900 font-nanumneo-r mt-6 max-w-[600px]"}
      >
        {description}
      </p>
      <p
        className={"text-lg text-slate-900 font-nanumneo-r mt-5 max-w-[600px]"}
      >
        {dayjs(createdAt).format("YY.MM.DD")}
      </p>

      <div className="flex flex-row flex-wrap w-full mt-4">
        {keyTags?.map((tag, idx) => {
          return <Tag tag={tag} className="mt-1 mr-1" key={idx} />;
        })}
      </div>
    </div>
  );
}; */

const IntroduceLayerButtonsGroup = (args: IntroduceLayerButtonsGroupProps) => {
  const { lecture, conferenceData } = args;
  const { youtubeVideoInfo, originalLectureURL, conferenceType } = lecture;

  return (
    <div
      className={
        "flex flex-col p-1 justify-between items-start rounded-xl mt-4 "
      }
    >
      <LayerButtonGroupBtn type="youtube" youtubeVideoInfo={youtubeVideoInfo} />
      <LayerButtonGroupBtn
        type="conference"
        conferenceData={conferenceData}
        conferenceType={conferenceType}
        className="mt-4 "
      />
      <LayerButtonGroupBtn
        type="lecture"
        originalLectureURL={originalLectureURL}
        className="mt-4"
      />
    </div>
  );
};

const LayerButtonGroupBtn = (args: LayerButtonGroupBtnProps) => {
  const { type, className } = args;
  const [isHover, setHover] = useState(false);

  const commonStyle = classMerge([
    "flex flex-row justify-center items-center rounded-full px-3 py-2 border-2 transition ease-in-out duration-300  ",
    className,
  ]);
  if (type === "youtube") {
    const { youtubeVideoInfo } = args;
    const { accessURL } = youtubeVideoInfo;
    const youtubeBtnStyle = classMerge([
      commonStyle,
      "border-[#f44336] hover:bg-[#f44336] ",
    ]);
    return (
      <Link href={accessURL} target="__blank">
        <div
          className={youtubeBtnStyle}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <YouTubeIcon
            sx={{ color: isHover ? common["white"] : red["500"] }}
            className="transition ease-in-out duration-300 hover:bg-white"
          />
          <p
            className={`font-nanumneo-b ml-1 transition ease-in-out duration-300 ${
              isHover ? "text-white" : "text-[#f44336]"
            } `}
          >
            Youtube로 이동
          </p>
        </div>
      </Link>
    );
  }
  if (type === "conference") {
    const { conferenceData, conferenceType } = args;
    if (!conferenceData || !conferenceData.conferenceURL) return <></>;
    const { conferenceURL } = conferenceData;
    const conferenceBtnStyle = classMerge([
      commonStyle,
      "border-[#00e676] hover:bg-[#00e676] ",
    ]);
    return (
      <Link href={conferenceURL} target="__blank">
        <div
          className={conferenceBtnStyle}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <PeopleAltIcon
            sx={{ color: isHover ? common["white"] : green["A400"] }}
          />
          <p
            className={` font-nanumneo-b ml-1 ${isHover ? "text-white" : ""} `}
          >
            컨퍼런스 사이트로 이동
          </p>
        </div>
      </Link>
    );
  }

  const { originalLectureURL } = args;
  if (!originalLectureURL) return <></>;
  const lectureBtnStyle = classMerge([
    commonStyle,
    "border-blue-400 hover:bg-[#2979ff] ",
  ]);
  return (
    <Link href={originalLectureURL} target="__blank">
      <div
        className={lectureBtnStyle}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <LibraryBooksIcon
          sx={{ color: isHover ? common["white"] : blue["A400"] }}
        />
        <p className={`font-nanumneo-b ml-1 ${isHover ? "text-white" : ""}`}>
          강의 페이지로 이동
        </p>
      </div>
    </Link>
  );
};
