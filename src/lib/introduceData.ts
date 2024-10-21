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
  react: {
    title: "React",
    description: `React는 페이스북에서 개발한 오픈 소스 자바스크립트 라이브러리입니다.
        React는 사용자 인터페이스를 만들기 위한 라이브러리로, 컴포넌트 기반으로 동작하며, 데이터가 변경되면 자동으로 화면을 갱신해줍니다.
        React는 React Native, Next.js 등 여러 기술들과 함께 사용되며, React를 기반으로 한 기술들은 React 생태계라고 불립니다.`,
    image: "ReactLogo",
  },
  "google-io": {
    title: "Google I/O",
    description: `Google I/O는 구글에서 매년 5월 개최하는 개발자 컨퍼런스입니다. 
    Google I/O에서는 주로 Firebase, ChromeOS, Flutter, Android 등 구글에서 개발한 개발기술과 일부 HTML, CSS, JavaScript 프레임워크 등 다양한 주제를 가지고 행사를 진행하고 있으며, 2023년 부터는 주로 Gemini, PaLM(구글의 LLM 모델 중 하나) 등 주로 AI와 관련한 발표가 주를 이루고 있습니다.`,
    image: "GoogleIOLogo",
  },
  firebase: {
    title: "Firebase",
    description: `Firebase는 구글에서 제공하는 모바일 및 웹 애플리케이션 개발 플랫폼입니다.`,
    image: "FirebaseLogo",
  },
  "toss-slash": {
    title: "토스 SLASH",
    description: `토스 SLASH는 토스에서 매년 9월에서 10월 경 주최하는 개발자 컨퍼런스입니다. SLASH에서는 범용적인 기술을 주로 다루는 Google I/O와 달리 토스에서 더 나은 서비스를 위해 노력해온 과정을 주로 다루고 있으며, 토스에서 자체적으로 개발한 오픈소스 기술도 소개하고 있습니다.`,
    image: "TossLogo",
  },
};
