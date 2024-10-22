import PageLayer from "@/components/common/pageLayer";
import { getFilteredPosts } from "@/lib/post";
import MainEmptyBody from "./mainEmptyBody";
import MainContentBody from "./mainContentBody";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DevLog",
};

export default function Devlog() {
  const posts = getFilteredPosts({ section: "devlog", category: "all" });
  return (
    <PageLayer>
      {posts.length === 0 ? (
        <MainEmptyBody />
      ) : (
        <MainContentBody posts={posts} />
      )}
    </PageLayer>
  );
}
