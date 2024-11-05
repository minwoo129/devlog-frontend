"use client";
import { ProfileProps } from "./types";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Title from "@/components/common/title";
import { useEffect } from "react";
import { getGithubUserData } from "@/api";

export const dynamic = "force-dynamic";

export default function Profile(args: ProfileProps) {
  useEffect(() => {
    //_getGithubUserData();
  }, []);
  const _getGithubUserData = async () => {
    try {
      const res = await getGithubUserData({ username: "minwoo129" });
      console.log("getGithubUserData res", res);
    } catch (e) {
      console.log("getGithubUserData error", e);
    }
  };

  return (
    <div className="w-full h-fit mt-4 py-4 px-6 border-2 border-black rounded-xl">
      <Title className="">프론트엔드 개발자 류민우입니다.</Title>
      <Link href={"/profile"} legacyBehavior>
        <div className="flex flex-row shrink max-w-fit mt-2 rounded-lg p-2 border-2 border-gray-200 hover:bg-gray-200">
          <p>프로필 바로가기</p>
          <ArrowForwardIcon />
        </div>
      </Link>
    </div>
  );
}
