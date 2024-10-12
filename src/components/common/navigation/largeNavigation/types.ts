import { NavigationCommonProps } from "../types";

export interface LargeNavigationProps extends NavigationCommonProps {
  setOpen: (value: boolean) => void;
}
