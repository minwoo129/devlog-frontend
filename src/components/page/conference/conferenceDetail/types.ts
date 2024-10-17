import { NavigationConferenceLogCategoryType } from "@/components/common/navigation/navDatas";
import { SVGImageName } from "@/components/common/SVGImage/types";
import { ConfHistoryType } from "../main/defDatas";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface IntroduceLayerProps {
  conference: NavigationConferenceLogCategoryType;
}

export interface IntroduceLayerLogoProps {
  thumbnailURL: SVGImageName;
}

export interface IntroduceDetailLayerProps {
  title: string;
  description: string;
  date_개막시기: string;
  publisher: string;
}

export interface YearConfListProps extends YearConfItemExtendProps {
  conference: NavigationConferenceLogCategoryType;
}

export interface YearConfItemProps extends YearConfItemExtendProps {
  conf: ConfHistoryType;
}

interface YearConfItemExtendProps {
  onClick?: () => void;
}

export interface YearConfItemThumbnailProps {
  thumbnailURL: string | StaticImport;
}

export interface YearConfItemDetailProps {
  title: string;
  openedAt: string;
  keyTags: string[];
}
