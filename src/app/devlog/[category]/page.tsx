import PageLayer from "@/components/common/pageLayer";
import { DevLogPostsPageParams } from "./types";
import { getFilteredPosts } from "@/lib/post";
import { IntroduceLayer } from "@/components/page/blog/categoryList";
import ReactNativeLogo from "../../../../assets/svgImages/react-native.svg";

export default function DevLogPostsPage(params: DevLogPostsPageParams) {
  const {
    params: { category },
  } = params;
  const posts = getFilteredPosts({
    section: "devlog",
    category,
  });
  const tags = Array.from(new Set(posts.map((post) => post.tags).flat()));
  return (
    <PageLayer>
      <div className="">
        <IntroduceLayer category={category} tags={tags} />
      </div>
    </PageLayer>
  );
}
