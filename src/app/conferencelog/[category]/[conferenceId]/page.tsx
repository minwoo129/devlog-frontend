import { ConferenceObjDatas } from "@/commonDatas/conferences";
import { YearConfDetailPageProps } from "./types";
import { title } from "process";
import { Metadata } from "next";

export default function YearConfDetailPage(args: YearConfDetailPageProps) {
  const {
    params: { conferenceId },
  } = args;
  return (
    <div className="card">
      <h1>{conferenceId}</h1>
    </div>
  );
}
