"use client";
import React, { useState } from "react";
import {
  IntroduceLayer,
  YearConfList,
} from "@/components/page/conference/conferenceDetail";
import { ContentBodyProps } from "./types";
import { YoutubeLiveScheduleType } from "@/commonDatas/conferences/types";

export default function ContentBody(args: ContentBodyProps) {
  const { category } = args;
  const [liveOpen, setLiveOpen] = useState(false);
  const [liveData, setLiveData] = useState<YoutubeLiveScheduleType>();

  return (
    <div className=" size-full ">
      <IntroduceLayer conference={category} />
      <YearConfList conference={category} />
      <div className="h-10" />
    </div>
  );
}
