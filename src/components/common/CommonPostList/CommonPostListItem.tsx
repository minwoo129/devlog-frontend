"use client";
import { motion } from "framer-motion";
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
import { useRouter } from "next/navigation";
import { SlideToTop } from "@/themes/framerMotionVariants";

export default function CommonPostListItem(args: CommonPostListItemProps) {
  const { post, isCategoryDetailPage } = args;
  const router = useRouter();
  const href = isCategoryDetailPage ? "/[...slugs]" : "/devlog/[...slugs]";
  const { category2 } = post;
  const [_, slugn1, slugn2] = post.slug1.split("/");

  const navData = DevLogNavDatas.find(
    (data) => data.linkType === "each" && data.linkKey === category2
  );

  const as = isCategoryDetailPage ? `${slugn1}/${slugn2}` : post.slug1;
  return (
    <motion.div variants={SlideToTop["y_30"]}>
      <Link as={as} href={href}>
        <div className=" flex flex-col justify-between items-center w-[270px] sm2:w-[300px] sm1:w-[300px] vsm:w-[300px] rounded-2xl shadow-xl transition ease-in-out duration-300 hover:-translate-y-2">
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
        className="rounded-t-2xl"
      />
    </div>
  );
};

const CommonPostListItemFooter = (args: CommonPostListItemFooterProps) => {
  const { date } = args;

  return (
    <div className=" flex flex-row justify-between items-start w-full mt-2 flex-wrap ">
      <div className="flex flex-row justify-end items-center py-1">
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
