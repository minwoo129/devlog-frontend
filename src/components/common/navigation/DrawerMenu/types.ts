import { PageNavDataType } from "@/commonDatas/routes/types";

export interface DrawerMenuProps {
  isDrawerOpen: boolean;
  setDrawerOpen: (isOpen: boolean) => void;
}

export interface DrawerMenuItemProps {
  data: PageNavDataType;
  onPressMenu: (href: string) => void;
}
