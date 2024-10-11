export interface MenuBtnProps {
  href: string;
  title: string;
  onClick?: () => void;
  navigationType: NavigationType;
}

export type LogoProps = {
  navigationType: NavigationType;
};

export type NavigationType = "small" | "large";
