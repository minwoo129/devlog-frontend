import {
  ConfHistoryType,
  ConfLectureType,
} from "@/commonDatas/conferences/types";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface YearConfDetailPopupProps {
  open: boolean;
  onClose: () => void;
  selectedConf: ConfHistoryType | null;
}

export interface ConfDetailPopupHeaderProps {
  selectedConf: ConfHistoryType | null;
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
  selectedConf: ConfHistoryType | null;
}

export interface ConfLectureItemProps {
  lecture: ConfLectureType;
}
