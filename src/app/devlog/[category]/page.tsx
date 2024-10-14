import PageLayer from "@/components/common/pageLayer";
import { DevLogPostsPageParams } from "./types";
import { getFilteredPosts } from "@/lib/post";
import { IntroduceLayer } from "@/components/page/blog/categoryList";

export default function DevLogPostsPage(params: DevLogPostsPageParams) {
  const {
    params: { category },
  } = params;
  const posts = getFilteredPosts({
    section: "devlog",
    category,
  });
  return (
    <PageLayer>
      <div className="border-2 border-red-400">
        <IntroduceLayer category={category} />
      </div>
    </PageLayer>
  );
}
