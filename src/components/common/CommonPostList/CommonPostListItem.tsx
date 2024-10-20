"use client";
import { motion, Variants } from "framer-motion";
import {
  CommonPostItemThumbnailProps,
  CommonPostListItemFooterProps,
  CommonPostListItemProps,
  TagProps,
} from "./types";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import dayjs from "dayjs";
import Link from "next/link";
import Image from "next/image";
import { DevLogNavDatas } from "@/commonDatas/routes";

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

export default function CommonPostListItem(args: CommonPostListItemProps) {
  const { post, isCategoryDetailPage } = args;
  const href = isCategoryDetailPage ? "/[...slugs]" : "/devlog/[...slugs]";
  const { category2 } = post;
  const [_, slugn1, slugn2] = post.slug1.split("/");

  const navData = DevLogNavDatas.find(
    (data) => data.linkType === "each" && data.linkKey === category2
  );

  const as = isCategoryDetailPage ? `${slugn1}/${slugn2}` : post.slug1;
  return (
    <motion.div variants={item}>
      <Link as={as} href={href}>
        <div className=" flex flex-col justify-between items-start w-full rounded-2xl shadow-xl transition ease-in-out duration-300 hover:-translate-y-2 ">
          <CommonPostItemThumbnail thumbnailURL={post.thumbnailURL} />
          <div className="flex flex-col px-4 py-4 justify-between items-start w-full">
            <h1 className="text-gray-600 text-2xl truncate font-nanumneo-b">
              {post.title}
            </h1>
            <h2 className="text-gray-400 truncate mt-3 font-nanumneo-r">
              {navData?.title ?? ""}
            </h2>

            <CommonPostListItemFooter tags={post.tags} date={post.date} />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

const CommonPostItemThumbnail = (args: CommonPostItemThumbnailProps) => {
  const { thumbnailURL } = args;
  if (thumbnailURL === "") {
    return (
      <div className="w-full aspect-w-16 aspect-h-9 bg-gray-200 rounded-t-2xl" />
    );
  }
  return (
    <div className="w-full aspect-w-16 aspect-h-9 rounded-t-2xl">
      <Image
        src={thumbnailURL}
        fill
        objectFit="cover"
        alt="lecture-thumbnail"
      />
    </div>
  );
};

const CommonPostListItemFooter = (args: CommonPostListItemFooterProps) => {
  const { tags, date } = args;

  const visibleTags = tags.slice(0, 2);
  return (
    <div className=" flex flex-col justify-between items-start w-full mt-8 vxl:flex-row vxl:items-center">
      <div className="flex flex-row justify-start items-center w-[220px] overflow-x-scroll">
        {visibleTags.map((tag, idx) => {
          return <Tag tag={tag} key={idx} />;
        })}
      </div>
      <div className="flex flex-row justify-end items-center mt-4 vxl:mt-0 ">
        <CalendarTodayIcon className="mr-2" />
        <p className="text-gray-600 font-nanumneo-r text-sm">
          {dayjs(date).format("YY.MM.DD")}
        </p>
      </div>
    </div>
  );
};

const Tag = (args: TagProps) => {
  const { tag } = args;
  return (
    <div className="rounded-lg px-2 py-0.5 bg-gray-200 mr-2 ">
      <p className="text-emerald-500">{tag}</p>
    </div>
  );
};
