import {
  ConfHistoryType,
  ConfLectureType,
} from "@/commonDatas/conferences/types";
import { NavigationConferenceLogCategoryType } from "@/commonDatas/routes/types";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface YearConfDetailInterceptPageProps {
  params: {
    category: NavigationConferenceLogCategoryType;
    conferenceId: string;
  };
}

export interface ConfDetailPopupHeaderProps {
  selectedConf?: ConfHistoryType | null;
}

export interface PopupHeaderThumbnailProps {
  thumbnailURL: string | StaticImport;
}

export interface PopupHeaderDetailProps {
  title: string;
  description: string;
  openedAt: string;
  keyTags: string[];
  conferenceURL?: string;
}

export interface ConfDetailPopupBodyProps {
  selectedConf?: ConfHistoryType | null;
  onClickItem?: (href: string) => void;
}

export interface ConfLectureItemProps {
  lecture: ConfLectureType;
  onClickItem?: (href: string) => void;
}
