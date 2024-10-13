import PageLayer from "@/components/common/pageLayer";
import Title from "@/components/common/title";
import { CategoryList } from "@/components/page/blog/main";
import { getAllPosts, getFilteredPosts } from "@/lib/post";

export default function Devlog() {
  const posts = getFilteredPosts({ section: "devlog", category: "all" });
  return (
    <PageLayer>
      <Title className="text-5xl mt-10">dev.log</Title>
      <CategoryList posts={posts} />
    </PageLayer>
  );
}
