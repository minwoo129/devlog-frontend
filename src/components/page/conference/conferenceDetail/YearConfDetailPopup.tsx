import {
  ConfDetailPopupBodyProps,
  ConfDetailPopupHeaderProps,
  ConfLectureItemProps,
  YearConfDetailPopupProps,
} from "./types";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { SxProps, Theme } from "@mui/material";
import Image from "next/image";
import Tag from "@/components/common/Tag";
import dayjs from "dayjs";
import Link from "next/link";

const boxStyle: SxProps<Theme> = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  border: "2px solid #fff",
  borderRadius: "10px",
};

export default function YearConfDetailPopup(args: YearConfDetailPopupProps) {
  const { open, onClose, selectedConf } = args;
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={boxStyle}>
        <ConfDetailPopupHeader selectedConf={selectedConf} />
        <ConfDetailPopupBody selectedConf={selectedConf} />
      </Box>
    </Modal>
  );
}

const ConfDetailPopupHeader = (args: ConfDetailPopupHeaderProps) => {
  const { selectedConf } = args;
  if (!selectedConf) {
    return <div className="flex flex-row w-full h-20 " />;
  }

  const { thumbnailURL, title, description, keyTags, openedAt } = selectedConf;
  return (
    <div className=" flex flex-row w-full mobile:flex-col tablet:flex-col laptop:flex-col desktop:items-center">
      <div className="rounded-2xl desktop:mr-4">
        <Image
          src={thumbnailURL}
          width={320}
          height={240}
          alt="conf-thumbnail"
          className="rounded-2xl "
        />
      </div>
      <div className=" flex flex-col w-full h-full  mobile:mt-10 tablet:mt-10 laptop:mt-10">
        <h1 className="text-4xl text-zinc-700 font-nanumneo-eb">{title}</h1>
        <p className="text-xl text-zinc-500 font-nanumneo-b mt-1">
          {description}
        </p>
        <p className="text-sm text-zinc-500 font-nanumneo-r mt-1">
          {dayjs(openedAt).format("개막일: YYYY년 MM월 DD일")}
        </p>
        <div className="flex flex-row w-full flex-wrap mt-1">
          {keyTags.map((tag, idx) => {
            return <Tag tag={tag} className="mt-2 mr-2" key={idx} />;
          })}
        </div>
      </div>
    </div>
  );
};

const ConfDetailPopupBody = (args: ConfDetailPopupBodyProps) => {
  const { selectedConf } = args;
  if (!selectedConf) {
    return (
      <div className="flex flex-row flex-wrap max-h-[600px] mobile:max-h-[400px] tablet:max-h-[400px] laptop:max-h-[400px] w-full mt-5 sm:justify-center mobile:justify-center laptop:justify-center overflow-y-scroll" />
    );
  }

  const { lectures } = selectedConf;
  const visibleLectures = lectures.filter((lect) => lect.visible);
  return (
    <div className=" flex flex-row flex-wrap max-h-[600px] mobile:max-h-[400px] tablet:max-h-[400px] laptop:max-h-[400px] w-full mt-5 sm:justify-center mobile:justify-center laptop:justify-center overflow-y-scroll scrollbar-hide ">
      {visibleLectures.map((lecture, idx) => {
        return <ConfLectureItem lecture={lecture} key={idx} />;
      })}
    </div>
  );
};

const ConfLectureItem = (args: ConfLectureItemProps) => {
  const { lecture } = args;
  const { thumbnailURL, createdAt, title, href } = lecture;
  return (
    <Link as={href} href={"/conferencelog/[...slugs]"}>
      <div className=" flex flex-col justify-between items-center w-[300px] rounded-2xl shadow-xl mt-4 mb-4 mr-5 transition ease-in-out duration-300 hover:-translate-y-2">
        <div className="w-full h-fit">
          <Image
            src={thumbnailURL}
            width={300}
            height={150}
            alt="lecture-thumbnail"
            className="rounded-t-2xl"
          />
        </div>
        <div className="flex flex-col items-start w-full h-full border-t-2 border-zinc-200 p-4 ">
          <h3 className="text-xl text-slate-700 font-nanumneo-b max-w-[260px] truncate">
            {title}
          </h3>
          <h4 className=" text-sm text-slate-400 font-nanumneo-r mt-2 text-left">
            {dayjs(createdAt).format("YYYY년 MM월 DD일")}
          </h4>
        </div>
      </div>
    </Link>
  );
};
