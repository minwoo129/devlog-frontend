import Link from "next/link";
import { LogoProps } from "./types";

export default function Logo(args: LogoProps) {
  return (
    <Link href={"/"} legacyBehavior>
      <div className="navigationLogo">DevLog</div>
    </Link>
  );
}
