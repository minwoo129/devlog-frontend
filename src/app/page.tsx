import {
  getNotionCategory1Data,
  getNotionCategory2Data,
  getNotionConferenceData,
  getNotionConferenceHistoryData,
  getNotionLectureData,
  getNotionYoutubeVideoData,
} from "@/api/notion";
import { classMerge } from "@/commonFunctions/tailwinds";
import PageLayer from "@/components/common/pageLayer";
import { Profile } from "@/components/page/home";

export default async function Home() {
  // const result = await getNotionCategory1Data({ databaseName: "Category1" });
  // const result = await getNotionCategory2Data({ databaseName: "Category2" });
  // const result = await getNotionConferenceData({
  //   databaseName: "ConferenceData",
  // });
  /* const result = await getNotionConferenceHistoryData({
    databaseName: "ConferenceHistory",
  }); */
  //const result = await getNotionLectureData({ databaseName: "LectureData" });
  const result = await getNotionYoutubeVideoData({
    databaseName: "YoutubeVideoData",
  });
  console.log("notion result:", result);
  const style = classMerge([
    "flex flex-col w-full max-w-[1000px]",
    "border-2 border-red-400",
  ]);

  return (
    <PageLayer className="px-0 flex justify-start items-center size-full ">
      <div className={style}>
        <Profile />
      </div>
    </PageLayer>
  );
}
