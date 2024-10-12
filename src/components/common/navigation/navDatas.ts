import { UrlObject } from "url";

export type PageNavDataType = PageNavMenuType | PageNavLinkType;
type PageNavMenuType = {
  type: "menu";
  title: string;
  menus: PageNavLinkType[];
  menuKey: string;
};
type PageNavLinkType = {
  type: "link";
  title: string;
  href: string;
};

export const TestPageNavData: PageNavDataType = {
  type: "link",
  title: "테스트",
  href: "/",
};

export const PageNavDatas: PageNavDataType[] = [
  { type: "link", title: "테스트", href: "/testPage" },
  {
    type: "menu",
    title: "dev.log",
    menuKey: "devlog",
    menus: [
      { type: "link", title: "전체보기", href: "/devlog" },
      { type: "link", title: "React Native", href: "/devlog" },
      { type: "link", title: "React", href: "/devlog" },
      { type: "link", title: "Flutter", href: "/devlog" },
      { type: "link", title: "Next.js", href: "/devlog" },
      { type: "link", title: "Android", href: "/devlog" },
      { type: "link", title: "Firebase", href: "/devlog" },
    ],
  },
  {
    type: "menu",
    title: "conference.log",
    menuKey: "conferencelog",
    menus: [
      { type: "link", title: "전체보기", href: "/" },
      { type: "link", title: "구글IO", href: "/" },
      { type: "link", title: "토스 SLASH", href: "/" },
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
