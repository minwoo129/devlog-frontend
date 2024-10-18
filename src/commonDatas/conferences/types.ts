import { SVGImageName } from "@/components/common/SVGImage/types";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { NavigationConferenceLogCategoryType } from "../routes/types";

export type ConferenceDataType = {
  type: NavigationConferenceLogCategoryType;
  title: string;
  description: string;
  thumbnailURL: SVGImageName;
  confHistory: ConfHistoryType[];
  keyTags: string[];
  publisher: string;
  href: string;
  date_개막시기: string;
};

export type ConfHistoryType = {
  id: string;
  title: string;
  description: string;
  thumbnailURL: string | StaticImport;
  openedAt: string;
  keyTags: string[];
  lectures: ConfLectureType[];
};

export type ConfLectureType = {
  id: string;
  videoId?: string;
  title: string;
  description: string;
  thumbnailURL: string;
  youtubeLink: string;
  createdAt: string;
  keyTags?: string[];
  presenter?: string[];
  href: string;
  conferenceId: string;
  visible: boolean;
};

export type ConferenceObjDatasType = {
  [key in NavigationConferenceLogCategoryType]: ConferenceDataType;
};
