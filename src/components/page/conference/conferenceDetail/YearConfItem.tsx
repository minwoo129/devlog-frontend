"use client";
import Image from "next/image";
import {
  LatestReleaseBadgeProps,
  YearConfItemDetailProps,
  YearConfItemProps,
  YearConfItemThumbnailProps,
} from "./types";
import { motion, Variants } from "framer-motion";
import Tag from "@/components/common/Tag";
import dayjs from "dayjs";
import StarsIcon from "@mui/icons-material/Stars";

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

export default function YearConfItem(args: YearConfItemProps) {
  const { conf, onYearConfClick } = args;
  const { thumbnailURL, title, keyTags, openedAt, id } = conf;
  return (
    <motion.div
      variants={item}
      className=" mt-10 mr-8 overflow-hidden shadow-xl rounded-2xl hover:border-2 hover:border-orange-500 "
      onClick={() => onYearConfClick(id)}
    >
      <div className="w-[400px] rounded-2xl  ">
        <div className="flex flex-col ">
          <YearConfItemThumbnail thumbnailURL={thumbnailURL} />
          <YearConfItemDetail
            title={title}
            openedAt={openedAt}
            keyTags={keyTags}
          />
        </div>
      </div>
    </motion.div>
  );
}

const YearConfItemThumbnail = (args: YearConfItemThumbnailProps) => {
  const { thumbnailURL } = args;

  return (
    <div className="flex flex-row w-full h-[200px] justify-center items-center rounded-t-2xl -z-10">
      <Image
        src={thumbnailURL}
        width={400}
        height={200}
        alt="thumbnail"
        className="rounded-t-2xl -z-10"
        layout="responsive"
      />
    </div>
  );
};

const YearConfItemDetail = (args: YearConfItemDetailProps) => {
  const { title, keyTags, openedAt } = args;
  const today = dayjs();
  const openDate = dayjs(openedAt);
  const openDayDiff = today.diff(openDate, "day");
  return (
    <div className=" flex flex-col border-t-2 bg-white  border-zinc-200 p-4 rounded-b-2xl z-10">
      <div className="flex flex-row justify-start items-center">
        <h3 className="text-xl text-slate-700 font-nanumneo-b">{title}</h3>
        <LatestReleaseBadge openedAt={openedAt} />
      </div>
      <h4 className=" text-sm text-slate-400 font-nanumneo-r mt-2">
        {dayjs(openedAt).format("YYYY년 MM월 DD일 개막")}
      </h4>
      <div className="flex flex-row overflow-x-hidden mt-2">
        {keyTags.map((tag, idx) => {
          return <Tag tag={tag} className="mt-2 mr-2" key={idx} />;
        })}
      </div>
    </div>
  );
};

const LatestReleaseBadge = (args: LatestReleaseBadgeProps) => {
  const { openedAt } = args;
  const today = dayjs();
  const openDate = dayjs(openedAt);
  const openDayDiff = today.diff(openDate, "day");

  if (openDayDiff < 0) return null;
  if (openDayDiff === 0) {
    return (
      <div className="flex flex-row justify-center items-center ml-4">
        <StarsIcon color="warning" className="size-6 ml-3" />
        <p className="text-zinc-500 font-nanumneo-b">👏👏 개막 👏👏</p>
      </div>
    );
  }
  if (openDayDiff < 30) {
    return (
      <div className="flex flex-row justify-center items-center ml-1">
        <StarsIcon color="warning" className="size-6 ml-3" />
        <p className="text-lg text-zinc-500 font-nanumneo-b">{`개막 ${openDayDiff}일 째`}</p>
      </div>
    );
  }

  return null;
};
