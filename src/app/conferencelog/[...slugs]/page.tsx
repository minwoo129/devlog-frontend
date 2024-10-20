import {
  ConferenceLectureDetailPageProps,
  getBlogPostArgs,
  MarkdownData,
} from "./types";
import PageLayer from "@/components/common/pageLayer";
import ContentBody from "./ContentBody";
import { TotalConferenceLectures } from "@/commonDatas/conferences";
import { NavigationConferenceLogCategoryType } from "@/commonDatas/routes/types";
import { getFilteredPosts } from "@/lib/post";
import { serializeMdx } from "@/lib/mdx";

const getBlogPost = (args: getBlogPostArgs) => {
  const { postPath, conferenceId, lecture } = args;
  if (!lecture) return undefined;
  const categoryPosts = getFilteredPosts({
    category: conferenceId,
    section: "conferencelog",
  });
  if (!lecture) return undefined;
  const key = `${lecture.postPath}`;
  const detailPost = categoryPosts.find((post) => post.slug.includes(key));
  return detailPost;
};

export default async function ConferenceLectureDetailPage(
  args: ConferenceLectureDetailPageProps
) {
  const {
    params: { slugs },
  } = args;
  const [conferenceId, lectureId] = slugs;
  const lecture = TotalConferenceLectures.find(
    (lecture) => lecture.id === lectureId
  );
  const detailPost = getBlogPost({
    postPath: lectureId,
    conferenceId,
    lecture,
  });
  let data: MarkdownData | undefined = undefined;
  if (detailPost) {
    data = await serializeMdx(detailPost.content);
  }

  return (
    <PageLayer className="px-0">
      <ContentBody lecture={lecture} data={data} />
    </PageLayer>
  );
}
