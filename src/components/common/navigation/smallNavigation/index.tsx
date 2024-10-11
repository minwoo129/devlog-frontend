"use client";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { SmallNavigationProps } from "./types";

export const SmallNavigation = (args: SmallNavigationProps) => {
  const { setOpen } = args;
  return (
    <button
      className="size-full bg-zinc-600 sm:basis-2 md:hidden lg:hidden xl:hidden"
      onClick={() => setOpen(true)}
    >
      menu
    </button>
  );
};
