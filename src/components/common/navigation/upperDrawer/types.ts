import { NavigationCommonProps } from "../types";

export interface UpperDrawerProps extends NavigationCommonProps {
  isOpen: boolean;
  //children: React.ReactNode;
  setOpen: (value: boolean) => void;
}
