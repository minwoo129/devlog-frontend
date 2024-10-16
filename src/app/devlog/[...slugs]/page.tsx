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
    <PageLayer className={`sm:px-10 md:px-20 lg:px-40 xl:px-40 `}>
      <div className="w-full mb-[100px]">
        <DetailTitleLayer
          title={detailPost.title}
          description={detailPost.description}
          date={detailPost.date}
          tags={detailPost.tags}
        />
        <div className="flex flex-row justify-center items-center mt-5">
          <Image
            src={detailPost.thumbnailURL}
            alt="thumbnail"
            width={960}
            height={540}
            layout="relative"
          />
        </div>
        <PostPage data={data} />
      </div>
    </PageLayer>
  );
}
