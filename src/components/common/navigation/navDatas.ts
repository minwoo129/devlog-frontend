import { UrlObject } from "url";

export type PageNavDataType = PageNavMenuType | PageNavLinkType;
type PageNavMenuType = {
  type: "menu";
  title: string;
  menus: PageNavLinkType[];
  menuKey: string;
};
export type PageNavLinkType = PageNavLinkAllType | PageNavLinkEashType;
type PageNavLinkAllType = {
  type: "link";
  linkType: "all";
  title: string;
  href: string;
  mainCategory: false;
};
export type PageNavLinkEashType = {
  type: "link";
  linkType: "each";
  title: string;
  href: string;
  linkKey: string;
  mainCategory: boolean;
};
type linkKeyType = NavigationDevLogCategoryType | NavigationDevLogCategoryType;

/**
 * 네비게이션 메뉴 섹션 타입
 * - devlog: dev.log
 * - conferencelog: conference.log
 */
export type NavigationSectionType = "devlog" | "conferencelog";
/**
 * 섹션 별 카테고리 타입(DevLog)
 * - react-native: React Native
 * - react: React
 * - flutter: Flutter
 * - nextjs: Next.js
 * - android: Android
 * - firebase: Firebase
 */
export type NavigationDevLogCategoryType =
  | "react-native"
  | "react"
  | "flutter"
  | "nextjs"
  | "android"
  | "firebase";
/**
 * 섹션 별 카테고리 타입(ConferenceLog)
 * - google-io: 구글IO
 * - toss-slash: 토스 SLASH
 */
export type NavigationConferenceLogCategoryType = "google-io" | "toss-slash";

/**
 * - DevLog 영역 메뉴 네비게이션 데이터
 * - 연결 페이지
 *   1. React Native
 *   2. React
 *   3. Flutter
 *   4. Next.js
 *   5. Android
 *   6. Firebase
 */
export const DevLogNavDatas: PageNavLinkType[] = [
  {
    type: "link",
    linkType: "each",
    title: "React Native",
    href: "/devlog/react-native",
    linkKey: "react-native",
    mainCategory: true,
  },
  {
    type: "link",
    linkType: "each",
    title: "React",
    href: "/devlog/react",
    linkKey: "react",
    mainCategory: true,
  },
  {
    type: "link",
    linkType: "each",
    title: "Flutter",
    href: "/devlog/flutter",
    linkKey: "flutter",
    mainCategory: false,
  },
  {
    type: "link",
    linkType: "each",
    title: "Next.js",
    href: "/devlog/nextjs",
    linkKey: "nextjs",
    mainCategory: false,
  },
  {
    type: "link",
    linkType: "each",
    title: "Android",
    href: "/devlog/android",
    linkKey: "android",
    mainCategory: false,
  },
  {
    type: "link",
    linkType: "each",
    title: "Firebase",
    href: "/devlog/firebase",
    linkKey: "firebase",
    mainCategory: true,
  },
];

/**
 * - ConferenceLog 영역 메뉴 네비게이션 데이터
 * - 연결 페이지
 *   1. 구글IO
 *   2. 토스 SLASH
 */
export const ConferenceLogNavDatas: PageNavLinkType[] = [
  {
    type: "link",
    linkType: "each",
    title: "구글IO",
    href: "/",
    linkKey: "google-io",
    mainCategory: true,
  },
  {
    type: "link",
    linkType: "each",
    title: "토스 SLASH",
    href: "/",
    linkKey: "toss-slash",
    mainCategory: true,
  },
];

export const TestPageNavData: PageNavDataType = {
  type: "link",
  linkType: "each",
  title: "테스트",
  href: "/",
  linkKey: "test",
  mainCategory: false,
};

/**
 * - 페이지 네비게이션 데이터(전체)
 */
export const PageNavDatas: PageNavDataType[] = [
  {
    type: "link",
    title: "테스트",
    href: "/testPage",
    linkType: "each",
    linkKey: "test",
    mainCategory: false,
  },
  {
    type: "menu",
    title: "dev.log",
    menuKey: "devlog",
    menus: [
      {
        type: "link",
        linkType: "all",
        title: "전체보기",
        href: "/devlog",
        mainCategory: false,
      },
      ...DevLogNavDatas,
    ],
  },
  {
    type: "menu",
    title: "conference.log",
    menuKey: "conferencelog",
    menus: [
      {
        type: "link",
        linkType: "all",
        title: "전체보기",
        href: "/",
        mainCategory: false,
      },
      ...ConferenceLogNavDatas,
    ],
  },
];
