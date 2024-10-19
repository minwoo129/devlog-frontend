import dayjs from "dayjs";
import {
  ConfDetailPopupHeaderProps,
  PopupHeaderDetailProps,
  PopupHeaderThumbnailProps,
} from "./types";
import Image from "next/image";
import Tag from "@/components/common/Tag";
import { classMerge } from "@/commonFunctions/tailwinds";
import SpeedDial from "@mui/material/SpeedDial";

const ConfDetailPopupHeader = (args: ConfDetailPopupHeaderProps) => {
  const { selectedConf } = args;
  if (!selectedConf) {
    return <div className="flex flex-row w-full h-20 " />;
  }

  const { thumbnailURL, title, description, keyTags, openedAt, conferenceURL } =
    selectedConf;

  const className = classMerge([
    "flex flex-row w-full ",
    "sm:flex-col",
    "md:flex-col",
    "lg:flex-col",
    "xl:items-center",
  ]);
  return (
    <div className={className}>
      <PopupHeaderThumbnail thumbnailURL={thumbnailURL} />
      <PopupHeaderDetail
        title={title}
        description={description}
        keyTags={keyTags}
        openedAt={openedAt}
      />
    </div>
  );
};

const PopupHeaderThumbnail = (args: PopupHeaderThumbnailProps) => {
  const { thumbnailURL } = args;
  return (
    <div className="rounded-2xl xl:mr-6">
      <Image
        src={thumbnailURL}
        width={480}
        height={270}
        alt="conf-thumbnail"
        className="rounded-2xl "
      />
    </div>
  );
};

const PopupHeaderDetail = (args: PopupHeaderDetailProps) => {
  const { title, description, openedAt, keyTags, conferenceURL } = args;

  const container = classMerge([
    "flex flex-col w-fit h-full ",
    "mobile:mt-10",
    "tablet:mt-10",
    "laptop:mt-10",
  ]);
  return (
    <div className={container}>
      <h1 className="text-4xl text-zinc-700 font-nanumneo-eb">{title}</h1>
      <p className="text-lg text-zinc-500 font-nanumneo-r mt-2">
        {description}
      </p>
      <p className="text-sm text-zinc-500 font-nanumneo-r mt-2">
        {dayjs(openedAt).format("개막일: YYYY년 MM월 DD일")}
      </p>
      <div className="flex flex-row w-full flex-wrap mt-5">
        {keyTags.map((tag, idx) => {
          return <Tag tag={tag} className="mt-2 mr-2" key={idx} />;
        })}
      </div>
    </div>
  );
};
export default ConfDetailPopupHeader;
