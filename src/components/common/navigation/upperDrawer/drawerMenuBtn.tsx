import Link from "next/link";
import { DrawerMenuBtnProps } from "./types";

export default function DrawerMenuBtn(args: DrawerMenuBtnProps) {
  const { href, title } = args;

  return (
    <Link href={href} legacyBehavior>
      <a className="flex flex-row justify-center items-center w-full h-fit border-y-2 border-white py-4 text-2xl text-white font-bold">
        {title}
      </a>
    </Link>
  );
}
