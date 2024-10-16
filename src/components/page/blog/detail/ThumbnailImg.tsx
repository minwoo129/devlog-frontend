"use client";
import Image from "next/image";
import { ThumbnailImgProps } from "./types";
import React, { useState } from "react";

export default function ThumbnailImg(args: ThumbnailImgProps) {
  const { thumbnailURL } = args;
  const [isError, setError] = useState(false);
  if (thumbnailURL === "" || isError) {
    return (
      <div className="flex flex-row justify-center items-center mt-5 w-[960px] h-[540px] bg-slate-400" />
    );
  }
  return (
    <div className="flex flex-row justify-center items-center mt-5">
      <Image
        src={thumbnailURL}
        alt="thumbnail"
        width={960}
        height={540}
        layout="relative"
        onError={() => setError(true)}
      />
    </div>
  );
}
