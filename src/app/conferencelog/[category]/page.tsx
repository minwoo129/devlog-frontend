import { getFilteredPosts } from "@/lib/post";
import { ConferenceLogPostsPageProps } from "./types";
import PageLayer from "@/components/common/pageLayer";
import { IntroduceLayer } from "@/components/page/conference/conferenceDetail";
import YearConfList from "@/components/page/conference/conferenceDetail/YearConfList";
import ContentBody from "./ContentBody";
import { ConferenceObjDatas } from "@/commonDatas/conferences";
import { Metadata } from "next";

export function generateMetadata(args: ConferenceLogPostsPageProps): Metadata {
  const {
    params: { category },
  } = args;

  const confData = ConferenceObjDatas[category];
  const { title } = confData;
  return {
    title: {
      absolute: `${title} | Conference Log`,
    },
  };
}

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
      <ContentBody category={category} />
    </PageLayer>
  );
}
