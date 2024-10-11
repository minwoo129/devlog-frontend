import { UrlObject } from "url";

export interface UpperDrawerProps {
  isOpen: boolean;
  //children: React.ReactNode;
  setOpen: (value: boolean) => void;
}

export interface DrawerMenuBtnProps {
  href: string | UrlObject;
  title: string;
}
