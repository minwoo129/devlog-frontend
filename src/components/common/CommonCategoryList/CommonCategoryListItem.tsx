"use client";
import Link from "next/link";
import SVGImage from "../SVGImage";
import {
  CommonCategoryListItemDetailProps,
  CommonCategoryListItemProps,
  CommonCategoryListItemThumbnailProps,
} from "./types";
import { motion, Variants } from "framer-motion";

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
export default function CommonCategoryListItem(
  args: CommonCategoryListItemProps
) {
  const { category } = args;
  const { href, testID, thumbnail } = category;
  return (
    <motion.div variants={item}>
      <Link href={href} data-testid={testID}>
        <div className="flex flex-col w-[400px] max-h-[300px] rounded-lg mr-4 mt-4 border-2 border-zinc-300 transition ease-in-out duration-300 hover:-translate-y-2">
          <CommonCategoryListItemThumbnail thumbnail={thumbnail} />
          <CommonCategoryListItemDetail category={category} />
        </div>
      </Link>
    </motion.div>
  );
}

const CommonCategoryListItemThumbnail = (
  props: CommonCategoryListItemThumbnailProps
) => {
  const { thumbnail } = props;
  const { thumbnailURL, width = 200, height = 140 } = thumbnail;
  return (
    <div className="w-full h-[200px] flex flex-row justify-center items-center">
      <SVGImage name={thumbnailURL} width={width} height={height} />
    </div>
  );
};

const CommonCategoryListItemDetail = (
  props: CommonCategoryListItemDetailProps
) => {
  const { category } = props;
  const { title } = category;
  return (
    <div className="flex flex-col w-full h-full p-4 border-t-2 border-zinc-200">
      <h3 className="text-xl font-semibold text-zinc-600 font-nanumneo-eb">
        {title}
      </h3>
    </div>
  );
};