import dayjs from "dayjs";
import {
  DetailTitleLayerDateLayerProps,
  DetailTitleLayerFooterProps,
  DetailTitleLayerProps,
  DetailTitleLayerTagLayerProps,
} from "./types";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import Tag from "@/components/common/Tag";

export default function DetailTitleLayer(args: DetailTitleLayerProps) {
  const { title, description, date, tags } = args;
  return (
    <div className="flex flex-col justify-center items-center mt-20 border-2 border-blue-500">
      <h1 className="text-6xl font-extrabold text-zinc-700 font-NanumGothicCodingBold">
        {title}
      </h1>
      <h2 className="text-xl font-semibold text-zinc-600 mt-3 font-NanumGothicCodingLigature">
        {description}
      </h2>
      <DetailTitleLayerFooter tags={tags} date={date} />
    </div>
  );
}

const DetailTitleLayerFooter = (args: DetailTitleLayerFooterProps) => {
  const { tags, date } = args;

  return (
    <div className="detailTitleLayerFooter border-2 border-green-500">
      <DetailTitleLayerTagLayer tags={tags} />
      <DetailTitleLayerDateLayer date={date} />
    </div>
  );
};

const DetailTitleLayerTagLayer = (args: DetailTitleLayerTagLayerProps) => {
  const { tags } = args;
  return (
    <div className="detailTitleTagLayer border-2 border-purple-500">
      {tags.map((tag, idx) => {
        return <Tag tag={tag} className="mb-2 mr-2" key={idx} />;
      })}
    </div>
  );
};

const DetailTitleLayerDateLayer = (args: DetailTitleLayerDateLayerProps) => {
  const { date } = args;
  return (
    <div className="flex flex-row justify-center items-center mr-7">
      <CalendarTodayIcon className="mr-2" />
      <p className="text-lg font-NanumGothicCodingLigature leading-4 mt-[6px]">
        {dayjs(date).format("YY.MM.DD")}
      </p>
    </div>
  );
};
