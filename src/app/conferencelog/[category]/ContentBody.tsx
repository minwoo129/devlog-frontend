"use client";
import React, { useState } from "react";
import {
  IntroduceLayer,
  YearConfList,
} from "@/components/page/conference/conferenceDetail";
import { ContentBodyProps } from "./types";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

export default function ContentBody(args: ContentBodyProps) {
  const { category } = args;
  const [open, setOpen] = useState(false);
  return (
    <div className=" size-full ">
      <IntroduceLayer conference={category} />
      <YearConfList conference={category} onClick={() => setOpen(true)} />
      <div className="h-10" />

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogContent>test</DialogContent>
      </Dialog>
    </div>
  );
}
