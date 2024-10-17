"use client";
import React, { useState } from "react";
import {
  IntroduceLayer,
  YearConfDetailPopup,
  YearConfList,
} from "@/components/page/conference/conferenceDetail";
import { ContentBodyProps } from "./types";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import {
  ConferenceDataType,
  ConferenceObjDatas,
  ConfHistoryType,
} from "@/components/page/conference/main/defDatas";

export default function ContentBody(args: ContentBodyProps) {
  const { category } = args;
  const [open, setOpen] = useState(false);
  const [selectedConf, setSelectedConf] = useState<ConfHistoryType | null>(
    null
  );

  const onYearConfClick = (id: string) => {
    const historys = ConferenceObjDatas[category].confHistory;
    const selected = historys.find((conf) => conf.id === id);
    if (!selected) return;
    setOpen(true);
    setSelectedConf(selected);
  };
  return (
    <div className=" size-full ">
      <IntroduceLayer conference={category} />
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
    </div>
  );
}
