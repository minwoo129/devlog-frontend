import Link from "next/link";
import { LogoProps } from "./types";

export default function Logo(args: LogoProps) {
  return (
    <Link href={"/"} legacyBehavior>
      <div className="flex justify-center items-center rounded-lg w-fit h-full px-5 py-2 text-3xl text-white hover:bg-zinc-600">
        DevLog
      </div>
    </Link>
  );
}
