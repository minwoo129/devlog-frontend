"use client";
import React, { useState } from "react";
import {
  IntroduceLayer,
  YearConfDetailPopup,
  YearConfList,
} from "@/components/page/conference/conferenceDetail";
import { ContentBodyProps } from "./types";
import {
  ConfHistoryType,
  YoutubeLiveScheduleType,
} from "@/commonDatas/conferences/types";
import { ConferenceObjDatas } from "@/commonDatas/conferences";
import YoutubeLivePopup from "@/components/common/YoutubeLivePopup";

export default function ContentBody(args: ContentBodyProps) {
  const { category } = args;
  const [open, setOpen] = useState(false);
  const [liveOpen, setLiveOpen] = useState(false);
  const [selectedConf, setSelectedConf] = useState<ConfHistoryType | null>(
    null
  );
  const [liveData, setLiveData] = useState<YoutubeLiveScheduleType>();

  const onYearConfClick = (id: string) => {
    const historys = ConferenceObjDatas[category].confHistory;
    const selected = historys.find((conf) => conf.id === id);
    if (!selected) return;
    setOpen(true);
    setSelectedConf(selected);
  };
  return (
    <div className=" size-full ">
      <IntroduceLayer
        conference={category}
        onPressYoutubeLiveBtn={(data) => {
          setLiveData(data);
          setLiveOpen(true);
        }}
      />
      <YearConfList conference={category} onYearConfClick={onYearConfClick} />
      <div className="h-10" />

      <YearConfDetailPopup
        open={open}
        onClose={() => {
          setOpen(false);
          setSelectedConf(null);
        }}
        selectedConf={selectedConf}
      />
      <YoutubeLivePopup
        open={liveOpen}
        onClose={() => {
          setLiveData(undefined);
          setLiveOpen(false);
        }}
        liveData={liveData}
      />
    </div>
  );
}
