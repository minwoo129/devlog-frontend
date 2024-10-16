import { getFilteredPosts } from "@/lib/post";
import { ConferencelogProps } from "./types";
import PageLayer from "@/components/common/pageLayer";

export default function Conferencelog(args: ConferencelogProps) {
  const posts = getFilteredPosts({ section: "conferencelog", category: "all" });
  return <PageLayer></PageLayer>;
}
