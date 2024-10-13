import { ImageProps } from "next/image";
export interface SVGImageProps extends ImageProps {
  name: SVGImageName;
}

export type SVGImageName =
  | "ReactNativeLogo"
  | "ReactLogo"
  | "FlutterLogo"
  | "NextjsLogo"
  | "AndroidLogo"
  | "FirebaseLogo";
