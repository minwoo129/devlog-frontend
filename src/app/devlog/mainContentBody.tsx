import Title from "@/components/common/title";
import { CategoryList } from "@/components/page/blog/main";
import { MainContentBodyProps } from "./types";
import CommonPostList from "@/components/common/CommonPostList";
import CommonCategoryList from "@/components/common/CommonCategoryList";
import { DevLogCategorys } from "@/commonDatas/categorys";

export default function MainContentBody(args: MainContentBodyProps) {
  const { posts } = args;
  return (
    <div className="size-full border-2 border-green-400">
      <Title className="text-5xl mt-10">dev.log</Title>
      <CommonCategoryList
        categorys={DevLogCategorys}
        className=" mt-10 py-4 "
      />
      <Title className="text-5xl mt-10">All Posts</Title>
      <CommonPostList posts={posts} />
      <div className="h-10" />
    </div>
  );
}
