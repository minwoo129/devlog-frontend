import Title from "@/components/common/title";
import { ContentBodyProps } from "./types";
import { ConferenceList } from "@/components/page/conference/main";
import CommonCategoryList from "@/components/common/CommonCategoryList";
import { ConferenceLogCagetorys } from "@/commonDatas/categorys";

export default function ContentBody(args: ContentBodyProps) {
  // const { posts } = args;
  return (
    <div className="size-full">
      <Title className="text-5xl mt-10">Conference.log</Title>
      <CommonCategoryList
        categorys={ConferenceLogCagetorys}
        className="mt-10 py-4"
      />
      {/* <ConferenceList /> */}
      <div className="h-10" />
    </div>
  );
}
