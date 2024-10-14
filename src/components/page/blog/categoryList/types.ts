import { NavigationDevLogCategoryType } from "@/components/common/navigation/navDatas";
import { SVGImageName } from "@/components/common/SVGImage/types";

export interface IntroduceLayerProps {
  category: NavigationDevLogCategoryType;
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