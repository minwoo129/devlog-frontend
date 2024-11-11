import { ConferencelogProps } from "./types";
import PageLayer from "@/components/common/pageLayer";
import ContentBody from "./ContentBody";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conference Log",
};

export default async function Conferencelog(args: ConferencelogProps) {
  return (
    <PageLayer className="sm:px-10">
      <ContentBody />
    </PageLayer>
  );
}
