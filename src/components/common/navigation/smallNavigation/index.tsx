"use client";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { SmallNavigationProps } from "./types";
import Logo from "./Logo";

export const SmallNavigation = (args: SmallNavigationProps) => {
  const { setOpen } = args;
  return (
    <button
      className="size-full bg-zinc-800 sm:basis-2 md:hidden lg:hidden xl:hidden"
      onClick={() => setOpen(true)}
    >
      <Logo />
    </button>
  );
};
