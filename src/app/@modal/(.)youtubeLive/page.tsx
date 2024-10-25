import { getYoutubeLiveData } from "@/components/page/conference/conferenceDetail/convertDataFunctions";
import { YoutubeLivePopupPageProps } from "./types";
import {
  YoutubeLiveDataEmptyLayer,
  YoutubeLiveStreamingLayer,
} from "@/components/page/youtubeLive";
import PageModal from "@/components/common/PageModal";
import { Metadata } from "next";

export function generateMetadata(args: YoutubeLivePopupPageProps): Metadata {
  const {
    searchParams: { id },
  } = args;
  const liveData = getYoutubeLiveData(id);

  if (!liveData) {
    return {
      title: {
        absolute: "Youtube Live | 존재하지 않는 데이터",
      },
    };
  }

  const { title } = liveData;
  return {
    title: {
      absolute: `Youtube Live | ${title}`,
    },
  };
}

export default function YoutubeLivePopupPage(args: YoutubeLivePopupPageProps) {
  const {
    searchParams: { id },
  } = args;
  const liveData = getYoutubeLiveData(id);
  return (
    <PageModal>
      <h1 className="text-2xl font-nanumneo-eb text-zinc-600"></h1>
      {liveData ? (
        <YoutubeLiveStreamingLayer liveData={liveData} />
      ) : (
        <YoutubeLiveDataEmptyLayer />
      )}
    </PageModal>
  );
}
