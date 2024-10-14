import { SVGImageName } from "@/components/common/SVGImage/types";

export type IntroduceDatas = {
  [key in IntroduceDataKey]?: IntroduceItemData;
};

export type IntroduceDataKey =
  | "react-native"
  | "react"
  | "flutter"
  | "nextjs"
  | "android"
  | "firebase"
  | "google-io"
  | "toss-slash";

export type IntroduceItemData = {
  title: string;
  description: string;
  image: SVGImageName;
};

export const introduceDatas: IntroduceDatas = {
  "react-native": {
    title: "React Native",
    description: `React Native는 페이스북에서 개발한 오픈 소스 모바일 애플리케이션 프레임워크입니다.
        메인언어로는 JavaScript와 TypeScript가 주로 사용되며 React 라이브러리에서의 아키텍처를 기반으로 개발되어 React 개발자들이 상대적으로 쉽게 접근할 수 있습니다.
        React Native로 개발한 앱은 Android와 iOS 운영체제에서 동작이 가능하며 Electron과 같은 기술을 사용하여 Window 또는 Mac OS용 앱으로도 개발할 수 있습니다.`,
    image: "ReactNativeLogo",
  },
};
