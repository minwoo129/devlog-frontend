import PageLayer from "@/components/common/pageLayer";
import { DevLogPostDetailPageProps } from "./types";
import { NavigationDevLogCategoryType } from "@/components/common/navigation/navDatas";
import { getFilteredPosts } from "@/lib/post";
import { serializeMdx } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote";
import PostPage from "./PostPage";

const getPost = (category: NavigationDevLogCategoryType, post: string) => {
  const categoryPosts = getFilteredPosts({ category, section: "devlog" });
  const key = `/devlog/${category}/${post}`;
  const detailPost = categoryPosts.find((post) => post.slug.includes(key));
  return detailPost;
};

export default async function DevLogPostDetailPage(
  args: DevLogPostDetailPageProps
) {
  console.log("args: ", args);
  const {
    params: { category, post },
  } = args;
  const detailPost = getPost(category, post);
  if (!detailPost) {
    return (
      <PageLayer className="px-32">
        <div className="w-full border-2 border-red-500"></div>
      </PageLayer>
    );
  }
  const data = await serializeMdx(detailPost.content);
  console.log("data: ", data);
  return (
    <PageLayer className="sm:px-20 md:px-20 lg:px-40 xl:px-40">
      <div className="w-full border-2 border-red-500">
        <PostPage data={data} />
      </div>
    </PageLayer>
  );
}
