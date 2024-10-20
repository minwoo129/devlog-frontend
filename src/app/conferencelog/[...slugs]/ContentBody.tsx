import { IntroduceLayer } from "@/components/page/conference/lectureDetail";
import { ContentBodyProps, getBlogPostArgs } from "./types";
import { getFilteredPosts } from "@/lib/post";
import { serializeMdx } from "@/lib/mdx";
import PostMarkdown from "./PostMarkdown";

export default async function ContentBody(args: ContentBodyProps) {
  const { lecture, data } = args;

  if (!lecture) {
    return <div className="size-full" />;
  }
  if (!data) {
    return (
      <div className="size-full">
        <IntroduceLayer lecture={lecture} />
      </div>
    );
  }

  console.log("data: ", data);
  return (
    <div className="size-full ">
      <IntroduceLayer lecture={lecture} />
      <PostMarkdown data={data} />
    </div>
  );
}
