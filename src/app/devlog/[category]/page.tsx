import PageLayer from "@/components/common/pageLayer";
import { DevLogPostsPageParams } from "./types";
import { getFilteredPosts } from "@/lib/post";
import { IntroduceLayer } from "@/components/page/blog/categoryList";
import Title from "@/components/common/title";
import CommonPostList from "@/components/common/CommonPostList";
import { introduceDatas } from "@/lib/introduceData";

export function generateMetadata(args: DevLogPostsPageParams) {
  const {
    params: { category },
  } = args;

  const devCatData = introduceDatas[category];
  if (!devCatData) {
    return {
      title: "존재하지 않는 게시글",
    };
  }
  const { title } = devCatData;
  return {
    title: {
      absolute: `${title} | DevLog`,
    },
  };
}

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
        <Title className="text-5xl mt-10 text-orange-600">Posts</Title>
        <CommonPostList posts={posts} isCategoryDetailPage={true} />
      </div>
    </PageLayer>
  );
}
