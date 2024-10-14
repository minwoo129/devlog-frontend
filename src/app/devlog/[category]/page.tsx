import PageLayer from "@/components/common/pageLayer";
import { DevLogPostsPageParams } from "./types";
import { getFilteredPosts } from "@/lib/post";
import { IntroduceLayer } from "@/components/page/blog/categoryList";
import ReactNativeLogo from "../../../../assets/svgImages/react-native.svg";
import Title from "@/components/common/title";
import CommonPostList from "@/components/common/CommonPostList";

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
        <Title className="text-5xl mt-10">Posts</Title>
        <CommonPostList posts={posts} />
      </div>
    </PageLayer>
  );
}
