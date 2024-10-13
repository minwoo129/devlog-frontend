"use client";
import { motion, Variants } from "framer-motion";
import {
  AllPostListItemFooterProps,
  AllPostListItemProps,
  TagProps,
} from "./types";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import dayjs from "dayjs";

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

export default function AllPostListItem(args: AllPostListItemProps) {
  const { post } = args;
  return (
    <motion.div variants={item}>
      <div className=" min-w-52 h-fit min-h-20 border-2 shadow-lg px-4 py-4 rounded-lg mt-3 transition ease-in-out duration-300 hover:-translate-y-2">
        <h1 className="text-gray-600 text-2xl truncate">{post.title}</h1>

        <AllPostListItemFooter tags={post.tags} date={post.date} />
      </div>
    </motion.div>
  );
}

const AllPostListItemFooter = (args: AllPostListItemFooterProps) => {
  const { tags, date } = args;
  return (
    <div className="grid grid-cols-4 mt-4">
      <div className="flex flex-row col-span-3 justify-start items-center">
        {tags.map((tag, idx) => {
          return <Tag tag={tag} key={idx} />;
        })}
      </div>
      <div className="flex flex-row justify-end items-center ">
        <CalendarTodayIcon className="mr-2" />
        <p className="text-gray-600">{dayjs(date).format("YY.MM.DD")}</p>
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
