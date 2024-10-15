import Link from "next/link";
import { MenuBtnProps } from "./types";

export default function MenuBtn(args: MenuBtnProps) {
  const { data } = args;

  const { title, href } = data;

  return (
    <Link href={href} className="w-fit h-max">
      <div className="flex flex-row size-full rounded-lg justify-center items-center text-xl font-nanumneo-r text-white px-4 py-2 hover:bg-zinc-600 ">
        {title}
      </div>
    </Link>
  );
}
