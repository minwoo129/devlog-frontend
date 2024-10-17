"use client";
import Image from "next/image";
import {
  YearConfItemDetailProps,
  YearConfItemProps,
  YearConfItemThumbnailProps,
} from "./types";
import { motion, Variants } from "framer-motion";
import Tag from "@/components/common/Tag";
import dayjs from "dayjs";

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
  const { conf, onClick } = args;
  const { thumbnailURL, title, keyTags, openedAt } = conf;
  return (
    <motion.div
      variants={item}
      className="flex flex-col w-[400px] rounded-2xl shadow-xl mt-10 mr-8 "
      onClick={onClick}
    >
      <YearConfItemThumbnail thumbnailURL={thumbnailURL} />
      <YearConfItemDetail title={title} openedAt={openedAt} keyTags={keyTags} />
    </motion.div>
  );
}

const YearConfItemThumbnail = (args: YearConfItemThumbnailProps) => {
  const { thumbnailURL } = args;

  return (
    <div className="flex flex-row w-full h-fit justify-center items-center rounded-t-2xl">
      <Image
        src={thumbnailURL}
        width={400}
        height={300}
        alt="thumbnail"
        className="rounded-t-2xl"
      />
    </div>
  );
};

const YearConfItemDetail = (args: YearConfItemDetailProps) => {
  const { title, keyTags, openedAt } = args;
  return (
    <div className="flex flex-col border-t-2 border-zinc-200 p-4 hover:bg-zinc-300 rounded-b-2xl">
      <h3 className="text-xl text-slate-700 font-nanumneo-b">{title}</h3>
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
