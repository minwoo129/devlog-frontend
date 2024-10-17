import { NavigationConferenceLogCategoryType } from "@/components/common/navigation/navDatas";
import { SVGImageName } from "@/components/common/SVGImage/types";

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
