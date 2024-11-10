import PageLayer from "@/components/common/pageLayer";
import { getFilteredPosts } from "@/lib/post";
import MainEmptyBody from "./mainEmptyBody";
import MainContentBody from "./mainContentBody";
import { Metadata } from "next";
//import { getDehydratedQuery } from "@/ReactQuery";
//import queryOptions from "./queryOptions";

export const metadata: Metadata = {
  title: "DevLog",
};

export default async function Devlog() {
  const posts = getFilteredPosts({ section: "devlog", category: "all" });
  /* const { queryKey, queryFn } = queryOptions.categorys();

  const query = await getDehydratedQuery({ queryKey, queryFn });
  const categorys = query.state.data ?? []; */
  /* return (
    <PageLayer.ReactQuery query={query}>
      {posts.length === 0 ? (
        <MainEmptyBody />
      ) : (
        <MainContentBody posts={posts} />
      )}
    </PageLayer.ReactQuery>
  ); */
  return (
    <PageLayer>
      {posts.length === 0 ? (
        <MainEmptyBody />
      ) : (
        <MainContentBody posts={posts} />
      )}
    </PageLayer>
  );
}
