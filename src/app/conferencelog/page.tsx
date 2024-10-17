import { getFilteredPosts } from "@/lib/post";
import { ConferencelogProps } from "./types";
import PageLayer from "@/components/common/pageLayer";
import EmptyBody from "./EmptyBody";
import ContentBody from "./ContentBody";

export default function Conferencelog(args: ConferencelogProps) {
  const posts = getFilteredPosts({ section: "conferencelog", category: "all" });
  return (
    <PageLayer className="sm:px-10">
      {posts.length === 0 ? <EmptyBody /> : <ContentBody posts={posts} />}
    </PageLayer>
  );
}
