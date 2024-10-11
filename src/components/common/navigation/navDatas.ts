import { UrlObject } from "url";

export type PageNavDataType = PageNavMenuType | PageNavLinkType;
type PageNavMenuType = {
  type: "menu";
  title: string;
  menus: PageNavLinkType[];
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
    menus: [
      { type: "link", title: "React Native", href: "/" },
      { type: "link", title: "React", href: "/" },
      { type: "link", title: "Flutter", href: "/" },
      { type: "link", title: "Next.js", href: "/" },
      { type: "link", title: "Android", href: "/" },
      { type: "link", title: "Firebase", href: "/" },
    ],
  },
  {
    type: "menu",
    title: "conference.log",
    menus: [
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
