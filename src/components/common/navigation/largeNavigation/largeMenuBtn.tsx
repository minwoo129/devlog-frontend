import Link from "next/link";
import { LargeMenuBtnProps } from "./types";

export default function LargeMenuBtn(args: LargeMenuBtnProps) {
  const { href, title, onClick } = args;
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
