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
};
type PageNavLinkEashType = {
  type: "link";
  linkType: "each";
  title: string;
  href: string;
  linkKey: string;
};

export const TestPageNavData: PageNavDataType = {
  type: "link",
  linkType: "each",
  title: "테스트",
  href: "/",
  linkKey: "test",
};

export const PageNavDatas: PageNavDataType[] = [
  {
    type: "link",
    title: "테스트",
    href: "/testPage",
    linkType: "each",
    linkKey: "test",
  },
  {
    type: "menu",
    title: "dev.log",
    menuKey: "devlog",
    menus: [
      { type: "link", linkType: "all", title: "전체보기", href: "/devlog" },
      {
        type: "link",
        linkType: "each",
        title: "React Native",
        href: "/devlog",
        linkKey: "react-native",
      },
      {
        type: "link",
        linkType: "each",
        title: "React",
        href: "/devlog",
        linkKey: "react",
      },
      {
        type: "link",
        linkType: "each",
        title: "Flutter",
        href: "/devlog",
        linkKey: "flutter",
      },
      {
        type: "link",
        linkType: "each",
        title: "Next.js",
        href: "/devlog",
        linkKey: "nextjs",
      },
      {
        type: "link",
        linkType: "each",
        title: "Android",
        href: "/devlog",
        linkKey: "android",
      },
      {
        type: "link",
        linkType: "each",
        title: "Firebase",
        href: "/devlog",
        linkKey: "firebase",
      },
    ],
  },
  {
    type: "menu",
    title: "conference.log",
    menuKey: "conferencelog",
    menus: [
      { type: "link", linkType: "all", title: "전체보기", href: "/" },
      {
        type: "link",
        linkType: "each",
        title: "구글IO",
        href: "/",
        linkKey: "google-io",
      },
      {
        type: "link",
        linkType: "each",
        title: "토스 SLASH",
        href: "/",
        linkKey: "toss-slash",
      },
    ],
  },
];

/* export const PageNavDatas: PageNavDataType[] = [
  {
    href: "/testPage",
    title: "테스트1",
  },
  {
    href: "/profile",
    title: "프로필",
  },
]; */
