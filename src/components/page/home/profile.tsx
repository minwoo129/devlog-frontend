import Image from "next/image";
import { ProfileProps } from "./types";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Profile(args: ProfileProps) {
  return (
    <div className="w-full h-fit mt-4 py-4 px-6 border-2 border-black rounded-xl">
      <h1 className="text-3xl font-bold font-mono text-orange-600">
        프론트엔드 개발자 류민우입니다.
      </h1>
      <Link href={"/profile"} legacyBehavior>
        <div className="flex flex-row shrink max-w-fit mt-2 rounded-lg p-2 border-2 border-gray-200 hover:bg-gray-200">
          <p>프로필 바로가기</p>
          <ArrowForwardIcon />
        </div>
      </Link>
    </div>
  );
}
