import {
  ConfHistoryType,
  ConfLectureType,
  IntroduceIconType,
  YoutubeLiveScheduleType,
} from "@/commonDatas/conferences/types";
import { NavigationConferenceLogCategoryType } from "@/commonDatas/routes/types";
import { SVGImageName } from "@/components/common/SVGImage/types";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface IntroduceLayerProps {
  conference: NavigationConferenceLogCategoryType;
  onPressYoutubeLiveBtn: (data: YoutubeLiveScheduleType) => void;
}

export interface IntroduceLayerLogoProps {
  thumbnailURL: SVGImageName;
}

export interface IntroduceDetailLayerProps {
  title: string;
  description: string;
  date_개막시기: string;
  publisher: string;
  visibleIcon: IntroduceIconType;
  badgeTitle: string;
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
  onPressYoutubeLiveBtn: (data: YoutubeLiveScheduleType) => void;
}

export interface YoutubeLiveButtonProps {
  liveData?: YoutubeLiveScheduleType;
  onPressYoutubeLiveBtn: (data: YoutubeLiveScheduleType) => void;
}

export interface YearConfListProps extends YearConfItemExtendProps {
  conference: NavigationConferenceLogCategoryType;
}

export interface YearConfItemProps extends YearConfItemExtendProps {
  conf: ConfHistoryType;
}

interface YearConfItemExtendProps {
  onYearConfClick: (id: string) => void;
}

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
