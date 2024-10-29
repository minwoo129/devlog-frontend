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
      <div className=" confDetailPopup lectureItem containerGrid ">
        <div className=" confDetailPopup lectureItem thumbnailGrid">
          <Image
            src={thumbnailURL}
            fill
            objectFit="cover"
            alt="lecture-thumbnail"
            className="rounded-t-2xl"
          />
        </div>
        <div className="confDetailPopup lectureItem detail gridLayer ">
          <h3 className=" confDetailPopup lectureItem detail title">{title}</h3>
          <h4 className=" confDetailPopup lectureItem detail createdAt">
            {dayjs(createdAt).format("YYYY년 MM월 DD일")}
          </h4>
        </div>
      </div>
    </Link>
  );
};

export default ConfLectureItem;
