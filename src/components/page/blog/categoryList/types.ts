import {
  NavigationConferenceLogCategoryType,
  NavigationDevLogCategoryType,
} from "@/commonDatas/routes/types";
import { SVGImageName } from "@/components/common/SVGImage/types";

export interface IntroduceLayerProps {
  category: NavigationDevLogCategoryType | NavigationConferenceLogCategoryType;
  tags: string[];
}

export interface IntroduceLayerLogoLayoutProps {
  image: SVGImageName;
}

export interface IntroduceLayerContentLayoutProps
  extends IntroduceLayerTagLayoutProps {
  title: string;
  description: string;
}

export interface IntroduceLayerTagLayoutProps {
  tags: string[];
}
