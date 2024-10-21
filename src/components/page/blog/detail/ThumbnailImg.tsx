"use client";
import Image from "next/image";
import { ThumbnailImgProps } from "./types";
import React, { useState } from "react";

export default function ThumbnailImg(args: ThumbnailImgProps) {
  const { thumbnailURL } = args;
  const [isError, setError] = useState(false);
  if (thumbnailURL === "" || isError) {
    return <div className="w-full h-full max-w-[900px] max-h-[801px]" />;
  }
  return (
    <div className="w-full aspect-w-16 aspect-h-9 max-w-[900px]">
      <Image
        src={thumbnailURL}
        alt="thumbnail"
        fill
        objectFit="contain"
        onError={() => setError(true)}
      />
    </div>
  );
}
