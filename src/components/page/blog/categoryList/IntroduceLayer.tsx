"use client";
import { introduceDatas } from "@/lib/introduceData";
import {
  IntroduceLayerContentLayoutProps,
  IntroduceLayerLogoLayoutProps,
  IntroduceLayerProps,
  IntroduceLayerTagLayoutProps,
} from "./types";
import SVGImage from "@/components/common/SVGImage";
import { motion, Variants } from "framer-motion";

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
const logo: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};
const contentLayout: Variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const contentItem: Variants = {
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
  const { category, tags } = args;
  const introduceData = introduceDatas[category];

  if (!introduceData) {
    return <div className="w-full h-20" />;
  }

  const { image, title, description } = introduceData;
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-row sm:flex-col md:flex-col justify-start items-start w-full h-fit mt-10 rounded-xl px-4 py-7 shadow-xl bg-slate-100"
    >
      <IntroduceLayerLogoLayout image={image} />
      <IntroduceLayerContentLayout
        title={title}
        description={description}
        tags={tags}
      />
    </motion.div>
  );
}

const IntroduceLayerLogoLayout = (args: IntroduceLayerLogoLayoutProps) => {
  const { image } = args;
  return (
    <motion.div
      variants={logo}
      initial="hidden"
      animate="show"
      className="flex justify-center items-center w-[200px] h-[200px] sm:w-full md:w-full"
    >
      <SVGImage name={image} width={200} height={200} />
    </motion.div>
  );
};

const IntroduceLayerContentLayout = (
  args: IntroduceLayerContentLayoutProps
) => {
  const { title, description, tags } = args;
  return (
    <motion.div
      variants={contentLayout}
      initial="hidden"
      animate="show"
      className="flex flex-col w-[600px] sm:w-full md:w-full sm:mt-4 md:mt-4 lg:ml-1 xl:ml-1"
    >
      <motion.h1
        variants={contentItem}
        initial="hidden"
        animate="show"
        className={`text-4xl font-bold `}
      >
        {title}
      </motion.h1>
      <motion.p
        variants={contentItem}
        initial="hidden"
        animate="show"
        className="mt-4"
      >
        {description}
      </motion.p>

      <IntroduceLayerTagLayout tags={tags} />
    </motion.div>
  );
};

const IntroduceLayerTagLayout = (args: IntroduceLayerTagLayoutProps) => {
  const { tags } = args;
  return (
    <motion.div
      variants={contentItem}
      initial="hidden"
      animate="show"
      className="flex flex-row flex-wrap mt-2"
    >
      {tags.map((tag, idx) => {
        return (
          <div
            key={idx}
            className="rounded-lg px-2 py-0.5 bg-gray-200 mr-2 mt-2 "
          >
            <p className="text-emerald-500">{tag}</p>
          </div>
        );
      })}
    </motion.div>
  );
};
