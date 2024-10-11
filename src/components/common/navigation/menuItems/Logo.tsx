import Link from "next/link";
import { LogoProps } from "./types";

export default function Logo(args: LogoProps) {
  const { navigationType } = args;

  if (navigationType === "small") {
    return (
      <div className="flex justify-center items-center size-full text-3xl text-white">
        로고
      </div>
    );
  }

  return (
    <Link href={"/"} legacyBehavior>
      <div className="flex justify-center items-center w-full h-60 border-b-2 border-white text-3xl text-white">
        로고
      </div>
    </Link>
  );
}
