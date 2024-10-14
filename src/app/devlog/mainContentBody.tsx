import Title from "@/components/common/title";
import { AllPostList, CategoryList } from "@/components/page/blog/main";
import { MainContentBodyProps } from "./types";

export default function MainContentBody(args: MainContentBodyProps) {
  const { posts } = args;
  return (
    <div className="size-full">
      <Title className="text-5xl mt-10">dev.log</Title>
      <CategoryList posts={posts} />
      <Title className="text-5xl mt-10">All Posts</Title>
      <AllPostList posts={posts} />
      <div className="h-10" />
    </div>
  );
}
