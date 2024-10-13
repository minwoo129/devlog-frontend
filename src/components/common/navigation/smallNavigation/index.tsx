"use client";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { SmallNavigationProps } from "./types";
import { Logo } from "../menuItems";

export const SmallNavigation = (args: SmallNavigationProps) => {
  const { setOpen } = args;
  return (
    <button
      className="size-full bg-zinc-800 sm:basis-full md:basis-full lg:hidden xl:hidden"
      onClick={() => setOpen(true)}
    >
      <Logo navigationType="small" />
    </button>
  );
};
