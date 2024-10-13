import PageLayer from "@/components/common/pageLayer";
import { DevLogPostsPageParams } from "./types";
import { getFilteredPosts } from "@/lib/post";

export default function DevLogPostsPage(params: DevLogPostsPageParams) {
  const posts = getFilteredPosts({
    section: "devlog",
    category: params.params.category,
  });
  return (
    <PageLayer>
      <h1>dfafa</h1>
    </PageLayer>
  );
}
