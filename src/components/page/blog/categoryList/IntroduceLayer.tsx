"use client";
import { introduceDatas } from "@/lib/introduceData";
import {
  IntroduceLayerContentLayoutProps,
  IntroduceLayerLogoLayoutProps,
  IntroduceLayerProps,
  IntroduceLayerTagLayoutProps,
} from "./types";
import SVGImage from "@/components/common/SVGImage";
import { motion } from "framer-motion";
import {
  FadeInWithChildren,
  SlideToLeft,
  SlideToTop,
} from "@/themes/framerMotionVariants";

export default function IntroduceLayer(args: IntroduceLayerProps) {
  const { category, tags } = args;
  const introduceData = introduceDatas[category];

  if (!introduceData) {
    return <div className="w-full h-20" />;
  }

  const { image, title, description } = introduceData;
  return (
    <motion.div
      variants={FadeInWithChildren["sc_0.1"]}
      initial="hidden"
      animate="show"
      className="flex flex-row justify-start items-start w-full h-fit mt-10 sm:flex-col md:flex-col sm:items-start md:items-start"
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
      variants={SlideToTop["y_30"]}
      initial="hidden"
      animate="show"
      className="flex justify-center items-center w-[250px] h-[250px] p-10 shadow-xl rounded-3xl bg-white mr-3"
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
      variants={FadeInWithChildren["sc_0.2"]}
      initial="hidden"
      animate="show"
      className="flex flex-col w-fill min-h-[250px] max-w-[700px] rounded-3xl p-10 shadow-xl bg-green-100 sm:mt-5 md:mt-5"
    >
      <motion.h1
        variants={SlideToLeft["x_30"]}
        initial="hidden"
        animate="show"
        className={`text-4xl font-bold `}
      >
        {title}
      </motion.h1>
      <motion.p
        variants={SlideToLeft["x_30"]}
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
      variants={SlideToLeft["x_30"]}
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
