import PageLayer from "@/components/common/pageLayer";
import { DevLogPostDetailPageProps } from "./types";
import { NavigationDevLogCategoryType } from "@/components/common/navigation/navDatas";
import { getFilteredPosts } from "@/lib/post";
import { serializeMdx } from "@/lib/mdx";
import PostPage from "./PostPage";
import { DetailTitleLayer } from "@/components/page/blog/detail";
import Image from "next/image";

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
        <div className="w-full "></div>
      </PageLayer>
    );
  }
  const data = await serializeMdx(detailPost.content);
  console.log("data: ", data);
  return (
    <PageLayer className={`sm:px-10 md:px-20 lg:px-40 xl:px-40 `}>
      {/*      <Image
        src={detailPost.thumbnailURL}
        alt="배경"
        width={2250}
        height={50}
        className="relative opacity-50"
      /> */}
      <div className="w-full mb-[100px]">
        <DetailTitleLayer
          title={detailPost.title}
          description={detailPost.description}
          date={detailPost.date}
          tags={detailPost.tags}
        />
        <PostPage data={data} />
      </div>
    </PageLayer>
  );
}
