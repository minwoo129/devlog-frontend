import PageLayer from "@/components/common/pageLayer";
import { DevLogPostDetailPageProps } from "./types";
import { getFilteredPosts } from "@/lib/post";
import { serializeMdx } from "@/lib/mdx";
import PostPage from "./PostPage";
import { DetailTitleLayer } from "@/components/page/blog/detail";
import Image from "next/image";
import ThumbnailImg from "@/components/page/blog/detail/ThumbnailImg";
import { NavigationDevLogCategoryType } from "@/commonDatas/routes/types";

const getPost = (category: NavigationDevLogCategoryType, post: string) => {
  const categoryPosts = getFilteredPosts({ category, section: "devlog" });
  const key = `/devlog/${category}/${post}`;
  const detailPost = categoryPosts.find((post) => post.slug.includes(key));
  return detailPost;
};

export default async function DevLogPostDetailPage(
  args: DevLogPostDetailPageProps
) {
  const {
    params: { slugs },
  } = args;
  const [category, post] = slugs;
  const detailPost = getPost(category, post);
  if (!detailPost) {
    return (
      <PageLayer className="px-32">
        <div className="w-full "></div>
      </PageLayer>
    );
  }
  const data = await serializeMdx(detailPost.content);
  return (
    <PageLayer
      className={`mobile:px-[40px] tablet:px-[40px] laptop:px-[120px] desktop:px-[200px]`}
    >
      <div className="w-full mb-[100px]">
        <DetailTitleLayer
          title={detailPost.title}
          description={detailPost.description}
          date={detailPost.date}
          tags={detailPost.tags}
        />
        <ThumbnailImg thumbnailURL={detailPost.thumbnailURL} />
        <PostPage data={data} />
      </div>
    </PageLayer>
  );
}
