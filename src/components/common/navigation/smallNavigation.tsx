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
  /* return (
        <div className="size-full bg-zinc-800 flex justify-center align-middle md:hidden lg:hidden xl:hidden">
        <button
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
        >
          Dropdown button
          <svg
            className="w-2.5 h-2.5 ms-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
      </div>
    ); */
};
