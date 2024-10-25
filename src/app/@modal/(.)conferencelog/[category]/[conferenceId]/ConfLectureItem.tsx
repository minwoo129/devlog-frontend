import Link from "next/link";
import { ConfLectureItemProps } from "./types";
import Image from "next/image";
import dayjs from "dayjs";

const ConfLectureItem = (args: ConfLectureItemProps) => {
  const { lecture } = args;
  const { createdAt, title, href, youtubeVideoInfo } = lecture;
  const { thumbnailURL } = youtubeVideoInfo;
  return (
    <Link as={href} href={"/conferencelog/[...slugs]"}>
      <div className=" flex flex-col justify-between items-center w-full rounded-2xl shadow-xl transition ease-in-out duration-300 hover:-translate-y-2 ">
        <div className=" w-full aspect-w-16 aspect-h-9">
          <Image
            src={thumbnailURL}
            fill
            objectFit="cover"
            alt="lecture-thumbnail"
            className="rounded-t-2xl"
          />
        </div>
        <div className="flex flex-col items-start w-full h-full border-t-2 border-zinc-200 p-4 ">
          <h3 className=" text-xl text-slate-700 font-nanumneo-b w-full truncate">
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

export default ConfLectureItem;
