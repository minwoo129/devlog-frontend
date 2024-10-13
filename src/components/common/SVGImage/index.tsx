import Image from "next/image";
import { SVGImageProps } from "./types";
import ReactNativeLogo from "../../../../assets/svgImages/react-native.svg";
import ReactLogo from "../../../../assets/svgImages/react.svg";
import FlutterLogo from "../../../../assets/svgImages/flutter.svg";
import NextJSLogo from "../../../../assets/svgImages/nextjs.svg";
import AndroidLogo from "../../../../assets/svgImages/android.svg";
import FirebaseLogo from "../../../../assets/svgImages/firebase.svg";

export default function SVGImage(args: SVGImageProps) {
  const { name, ...rest } = args;
  if (name === "ReactNativeLogo") {
    return <Image {...rest} src={ReactNativeLogo} alt={name} />;
  }
  if (name === "ReactLogo") {
    return <Image {...rest} src={ReactLogo} alt={name} />;
  }
  if (name === "FlutterLogo") {
    return <Image {...rest} src={FlutterLogo} alt={name} />;
  }
  if (name === "NextjsLogo") {
    return <Image {...rest} src={NextJSLogo} alt={name} />;
  }
  if (name === "FirebaseLogo") {
    return <Image {...rest} src={FirebaseLogo} alt={name} />;
  }
  return <Image {...rest} src={AndroidLogo} alt={name} />;
}
