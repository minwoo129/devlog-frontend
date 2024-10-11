import { UrlObject } from "url";

type PageNavDataType = {
  href: string | UrlObject;
  title: string;
};

export const PageNavDatas: PageNavDataType[] = [
  {
    href: "/testPage",
    title: "테스트1",
  },
  {
    href: "/profile",
    title: "프로필",
  },
];
