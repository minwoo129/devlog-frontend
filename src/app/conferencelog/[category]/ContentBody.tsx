import React from "react";
import {
  IntroduceLayer,
  YearConfList,
} from "@/components/page/conference/conferenceDetail";
import { ContentBodyProps } from "./types";

export default function ContentBody(args: ContentBodyProps) {
  const { category } = args;

  return (
    <div className=" size-full ">
      <IntroduceLayer conference={category} />
      <YearConfList conference={category} />
      <div className="h-10" />
    </div>
  );
}
