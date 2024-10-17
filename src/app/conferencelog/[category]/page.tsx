import { getFilteredPosts } from "@/lib/post";
import { ConferenceLogPostsPageProps } from "./types";
import PageLayer from "@/components/common/pageLayer";
import { IntroduceLayer } from "@/components/page/conference/conferenceDetail";
import YearConfList from "@/components/page/conference/conferenceDetail/YearConfList";
import ContentBody from "./ContentBody";

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
      {/* <div className=" size-full ">
        <IntroduceLayer conference={category} />
        <YearConfList conference={category} />
        <div className="h-10" />
      </div> */}
      <ContentBody category={category} />
    </PageLayer>
  );
}
