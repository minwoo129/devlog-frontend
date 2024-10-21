export type PageNavDataType = PageNavMenuType | PageNavLinkType;
type PageNavMenuType = {
  type: "menu";
  title: string;
  menus: PageNavLinkType[];
  menuKey: string;
  href: string;
};
export type PageNavLinkType = PageNavLinkAllType | PageNavLinkEashType;
type PageNavLinkAllType = {
  type: "link";
  linkType: "all";
  title: string;
  href: string;
  mainCategory: false;
  testID: string;
  linkKey: PageLinkKey;
};
export type PageNavLinkEashType = {
  type: "link";
  linkType: "each";
  title: string;
  href: string;
  linkKey: PageLinkKey;
  mainCategory: boolean;
  testID: string;
};

export type PageLinkKey =
  | NavigationDevLogCategoryType
  | NavigationConferenceLogCategoryType
  | "devlog-all"
  | "conference-all"
  | "test";

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
