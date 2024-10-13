import Title from "@/components/common/title";
import { CategoryList } from "@/components/page/blog/main";
import { MainContentBodyProps } from "./types";

export default function MainContentBody(args: MainContentBodyProps) {
  const { posts } = args;
  return (
    <div className="size-full">
      <Title className="text-5xl mt-10">dev.log</Title>
      <CategoryList posts={posts} />
    </div>
  );
}
