import { ImageProps } from "next/image";
import { SVGProps } from "react";
export interface SVGImageProps extends SVGProps<SVGSVGElement> {
  name: SVGImageName;
}

export type SVGImageName =
  | "ReactNativeLogo"
  | "ReactLogo"
  | "FlutterLogo"
  | "NextjsLogo"
  | "AndroidLogo"
  | "FirebaseLogo"
  | "GoogleIOLogo"
  | "TossLogo";
