import { UrlObject } from "url";

export interface LargeNavigationProps {
  setOpen: (value: boolean) => void;
}

export interface LargeMenuBtnProps {
  href: string | UrlObject;
  title: string;
  onClick: () => void;
}
