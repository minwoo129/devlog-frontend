import Image from "next/image";
import { SVGImageProps } from "./types";
import ReactNativeLogo from "../../../../assets/svgImages/react-native.svg";
import ReactLogo from "../../../../assets/svgImages/react.svg";
import FlutterLogo from "../../../../assets/svgImages/flutter.svg";
import NextJSLogo from "../../../../assets/svgImages/nextjs.svg";
import AndroidLogo from "../../../../assets/svgImages/android.svg";
import FirebaseLogo from "../../../../assets/svgImages/firebase.svg";
import GoogleIOLogo from "../../../../assets/svgImages/Google_IO.svg";
import TossLogo from "../../../../assets/svgImages/toss.svg";

export default function SVGImage(args: SVGImageProps) {
  const { name, ...rest } = args;

  if (name === "ReactNativeLogo") {
    return <ReactNativeLogo {...rest} />;
  }
  if (name === "ReactLogo") {
    return <ReactLogo {...rest} />;
  }
  /* if (name === "FlutterLogo") {
    return <FlutterLogo {...rest} />;
  } */
  if (name === "NextjsLogo") {
    return <NextJSLogo {...rest} />;
  }
  if (name === "FirebaseLogo") {
    return <FirebaseLogo {...rest} />;
  }
  if (name === "GoogleIOLogo") {
    return <GoogleIOLogo {...rest} />;
  }
  if (name === "TossLogo") {
    return <TossLogo {...rest} />;
  }
  return <AndroidLogo {...rest} />;
}
