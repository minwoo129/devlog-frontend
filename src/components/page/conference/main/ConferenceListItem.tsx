"use client";
import { motion, Variants } from "framer-motion";
import {
  ConferenceListItemInfoProps,
  ConferenceListItemProps,
  ThumbnailImgProps,
} from "./types";
import Link from "next/link";
import SVGImage from "@/components/common/SVGImage";

const item: Variants = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  show: {
    opacity: 1,
    x: 0,
  },
};

export default function ConferenceListItem(args: ConferenceListItemProps) {
  const { categoryData } = args;
  const { href, thumbnailURL, publisher, title, description } = categoryData;
  return (
    <motion.div variants={item} initial="hidden" animate="show">
      <Link href={href}>
        <div className=" flex flex-col w-[400px] max-h-[300px] rounded-lg mr-3 border-2 border-zinc-300 transition ease-in-out duration-300 hover:-translate-y-2">
          <ThumbnailImg thumbnailURL={thumbnailURL} publisher={publisher} />
          <ConferenceListItemInfo title={title} description={description} />
        </div>
      </Link>
    </motion.div>
  );
}

const ConferenceListItemInfo = (args: ConferenceListItemInfoProps) => {
  const { description, title } = args;
  return (
    <div className="flex flex-col w-full h-full p-4 border-2 border-red-300">
      <h3 className="text-xl font-semibold text-zinc-600 font-nanumneo-eb">
        {title}
      </h3>
      <p className="text-zinc-500 font-nanumneo-r mt-2">{description}</p>
    </div>
  );
};

const ThumbnailImg = (args: ThumbnailImgProps) => {
  const { thumbnailURL } = args;
  return (
    <div className="w-full flex flex-row justify-center">
      <SVGImage name={thumbnailURL} width={200} height={160} />
    </div>
  );
};
