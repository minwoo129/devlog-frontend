import { getFilteredPosts } from "@/lib/post";
import { ConferencelogProps } from "./types";
import PageLayer from "@/components/common/pageLayer";
import ContentBody from "./ContentBody";
import { Metadata } from "next";
import { getGithubUserData } from "@/api";

export const metadata: Metadata = {
  title: "Conference Log",
};

export default async function Conferencelog(args: ConferencelogProps) {
  const user = await getGithubUserData({ username: "minwoo129" });
  console.log("conferencelog user: ", user.data.user);
  //const posts = getFilteredPosts({ section: "conferencelog", category: "all" });
  return (
    <PageLayer className="sm:px-10">
      {/* {posts.length === 0 ? <EmptyBody /> : <ContentBody />} */}
      <ContentBody />
    </PageLayer>
  );
}
