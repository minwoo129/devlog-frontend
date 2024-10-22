import PageLayer from "@/components/common/pageLayer";
import { DevLogPostDetailPageProps } from "./types";
import { getFilteredPosts } from "@/lib/post";
import { serializeMdx } from "@/lib/mdx";
import PostPage from "./PostPage";
import { DetailTitleLayer } from "@/components/page/blog/detail";
import Image from "next/image";
import ThumbnailImg from "@/components/page/blog/detail/ThumbnailImg";
import { NavigationDevLogCategoryType } from "@/commonDatas/routes/types";
import { Metadata } from "next";
import { introduceDatas } from "@/lib/introduceData";

const getPost = (category: NavigationDevLogCategoryType, post: string) => {
  const categoryPosts = getFilteredPosts({ category, section: "devlog" });
  const key = `/devlog/${category}/${post}`;
  const detailPost = categoryPosts.find((post) => post.slug.includes(key));
  return detailPost;
};

export function generateMetadata(args: DevLogPostDetailPageProps): Metadata {
  const {
    params: { slugs },
  } = args;
  const [category, post] = slugs;
  const detailPost = getPost(category, post);
  if (!detailPost) {
    return {
      title: "존재하지 않는 게시글",
    };
  }
  const categoryData = introduceDatas[category];
  return {
    title: {
      absolute: `${detailPost.title} | ${categoryData?.title ?? "DevLog"}`,
    },
  };
}

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
    <PageLayer className={`px-[30px] desktop:px-[200px]`}>
      <div className="w-full mb-[100px] flex flex-col items-center ">
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
