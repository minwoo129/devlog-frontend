import {
  ConferenceDataType,
  ConfHistoryType,
  YoutubeLiveScheduleType,
} from "@/commonDatas/conferences/types";
import { NavigationConferenceLogCategoryType } from "@/commonDatas/routes/types";
import { Variants } from "framer-motion";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface IntroduceLayerProps {
  conference: NavigationConferenceLogCategoryType;
}

export interface IntroduceLayerLogoProps {
  confData: ConferenceDataType;
}

export interface IntroduceDetailLayerProps {
  visible?: boolean;
  confData: ConferenceDataType;
  className?: string;
  variants?: Variants;
  isDimScreen?: boolean;
}

export interface HeldImminentProps {
  badgeTitle: string;
  visible: boolean;
}

export interface HeldProps {
  badgeTitle: string;
  visible: boolean;
}

export interface IntroduceDetailMoreInfoLayerProps {
  type: NavigationConferenceLogCategoryType;
}

export interface YoutubeLiveButtonProps {
  liveData?: YoutubeLiveScheduleType;
}

export interface YearConfListProps extends YearConfItemExtendProps {
  conference: NavigationConferenceLogCategoryType;
}

export interface YearConfItemProps extends YearConfItemExtendProps {
  conf: ConfHistoryType;
}

interface YearConfItemExtendProps {}

export interface YearConfItemThumbnailProps {
  thumbnailURL: string | StaticImport;
}

export interface YearConfItemDetailProps {
  title: string;
  openedAt: string;
  keyTags: string[];
}

export interface LatestReleaseBadgeProps {
  openedAt: string;
}
