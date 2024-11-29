"use client";
import { motion } from "framer-motion";
import {
  CategoryListItemDetailProps,
  CategoryListItemProps,
  CategoryListItemThumbnailProps,
} from "./types";
import Link from "next/link";
import SVGImage from "@/components/common/SVGImage";
import { SVGImageName } from "@/components/common/SVGImage/types";
import { SlideToLeft } from "@/themes/framerMotionVariants";

export default function CategoryListItem(args: CategoryListItemProps) {
  const { categoryData, categoryType } = args;
  const { title, href, testID, linkKey } = categoryData;
  return (
    <motion.div variants={SlideToLeft["x_30"]}>
      <Link href={href}>
        <div
          data-testid={testID}
          className=" flex flex-col w-[400px] max-h-[300px] rounded-lg mr-4 mt-4 border-2 border-zinc-300 transition ease-in-out duration-300 hover:-translate-y-2"
        >
          <CategoryListItemThumbnail linkKey={linkKey} />
          <CategoryListItemDetail title={title} />
        </div>
      </Link>
    </motion.div>
  );
}

const CategoryListItemThumbnail = (props: CategoryListItemThumbnailProps) => {
  const { linkKey } = props;
  let SVGThumbnail: SVGImageName = "ReactNativeLogo";
  let width = 200;
  let height = 140;
  if (linkKey === "react") {
    SVGThumbnail = "ReactLogo";
  } else if (linkKey === "firebase") {
    SVGThumbnail = "FirebaseLogo";
    width = 140;
    height = 200;
  }
  return (
    <div className="w-full h-[200px] flex flex-row justify-center items-center">
      <SVGImage name={SVGThumbnail} width={width} height={height} />
    </div>
  );
};

const CategoryListItemDetail = (args: CategoryListItemDetailProps) => {
  const { title } = args;
  return (
    <div className="flex flex-col w-full h-full p-4 border-t-2 border-zinc-200">
      <h3 className="text-xl font-semibold text-zinc-600 font-nanumneo-eb">
        {title}
      </h3>
      {/* <p className="text-zinc-500 font-nanumneo-r mt-2">{description}</p> */}
    </div>
  );
};
