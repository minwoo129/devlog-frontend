import Title from "@/components/common/title";
import { ContentBodyProps } from "./types";
import { CategoryList } from "@/components/page/blog/main";
import CommonPostList from "@/components/common/CommonPostList";
import { ConferenceList } from "@/components/page/conference/main";

export default function ContentBody(args: ContentBodyProps) {
  const { posts } = args;
  return (
    <div className="size-full">
      <ConferenceList />
      {/* <Title className="text-5xl mt-10">dev.log</Title>
      <CategoryList posts={posts} categoryType="conferencelog" />
      <Title className="text-5xl mt-10">All Posts</Title>
      <CommonPostList posts={posts} /> */}
      <div className="h-10" />
    </div>
  );
}
