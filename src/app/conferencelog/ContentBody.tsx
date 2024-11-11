import Title from "@/components/common/title";
import { ContentBodyProps } from "./types";
import CommonCategoryList from "@/components/common/CommonCategoryList";
import { ConferenceLogCagetorys } from "@/commonDatas/categorys";

export default function ContentBody(args: ContentBodyProps) {
  return (
    <div className="size-full ">
      <Title className="text-5xl mt-10 text-orange-600">Conference.log</Title>
      <CommonCategoryList
        categorys={ConferenceLogCagetorys}
        className="mt-10 py-4"
      />
      <div className="h-10" />
    </div>
  );
}
