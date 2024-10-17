import { getFilteredPosts } from "@/lib/post";
import { ConferenceLogPostsPageProps } from "./types";
import PageLayer from "@/components/common/pageLayer";
import { IntroduceLayer } from "@/components/page/conference/conferenceDetail";

export default function ConferenceLogPostsPage(
  args: ConferenceLogPostsPageProps
) {
  const {
    params: { category },
  } = args;
  /* const posts = getFilteredPosts({ section: "conferencelog", category });
  const tags = Array.from(new Set(posts.map((post) => post.tags).flat())); */
  return (
    <PageLayer>
      <div className="">
        <IntroduceLayer conference={category} />
        {/* <IntroduceLayer category={category} tags={tags} /> */}
        {/* <Title className="text-5xl mt-10">Posts</Title>
        <CommonPostList posts={posts} /> */}
      </div>
    </PageLayer>
  );
}
