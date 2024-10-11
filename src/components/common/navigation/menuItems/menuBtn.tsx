import Link from "next/link";
import { MenuBtnProps, NavigationType } from "./types";

export default function MenuBtn(args: MenuBtnProps) {
  const { href, title, navigationType, onClick } = args;

  return (
    <Link href={href} legacyBehavior>
      <a
        onClick={onClick}
        className="flex flex-row justify-center items-center w-full h-fit border-b-2 border-white py-4 text-2xl text-white font-bold"
      >
        {title}
      </a>
    </Link>
  );
}
