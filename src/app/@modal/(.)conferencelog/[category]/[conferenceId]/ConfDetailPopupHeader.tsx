import dayjs from "dayjs";
import {
  ConfDetailPopupHeaderProps,
  PopupHeaderDetailProps,
  PopupHeaderThumbnailProps,
} from "./types";
import Image from "next/image";
import Tag from "@/components/common/Tag";
import Title from "@/components/common/title";

const ConfDetailPopupHeader = (args: ConfDetailPopupHeaderProps) => {
  const { selectedConf } = args;
  if (!selectedConf) {
    return <div className="flex flex-row w-full h-20 " />;
  }

  const { thumbnailURL, title, description, keyTags, openedAt, conferenceURL } =
    selectedConf;

  return (
    <div className="confDetailPopup header containerLayer">
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
    <div className="confDetailPopup header thumbnail">
      <Image
        src={thumbnailURL}
        width={480}
        height={270}
        alt="conf-thumbnail"
        className="confDetailPopup header thumbnailImg"
      />
    </div>
  );
};

const PopupHeaderDetail = (args: PopupHeaderDetailProps) => {
  const { title, description, openedAt, keyTags, conferenceURL } = args;

  return (
    <div className={"confDetailPopup header detail containerLayer"}>
      <Title className="confDetailPopup header detail titleTxt">{title}</Title>
      <p className=" confDetailPopup header detail contentTxt text-lg ">
        {description}
      </p>
      <p className=" confDetailPopup header detail contentTxt text-sm ">
        {dayjs(openedAt).format("개막일: YYYY년 MM월 DD일")}
      </p>
      <div className="confDetailPopup header detail tagGrid">
        {keyTags.map((tag, idx) => {
          return <Tag tag={tag} className="mt-2 mr-2" key={idx} />;
        })}
      </div>
    </div>
  );
};
export default ConfDetailPopupHeader;
