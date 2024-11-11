import {
  ConferenceLectureDetailPageProps,
  getBlogPostArgs,
  MarkdownData,
} from "./types";
import PageLayer from "@/components/common/pageLayer";
import ContentBody from "./ContentBody";
import {
  TotalConferenceLectures,
  TotalConferencesObj,
} from "@/commonDatas/conferences";
import { getFilteredPosts } from "@/lib/post";
import { serializeMdx } from "@/lib/mdx";
import { Metadata } from "next";

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
const getConferenceData = (lectureId: string) => {
  const lecture = TotalConferenceLectures.find(
    (lecture) => lecture.id === lectureId
  );
  if (!lecture) return { lecture: undefined, conference: undefined };
  const { conferenceId } = lecture;
  const conference = TotalConferencesObj[conferenceId];

  return { lecture, conference };
};

export function generateMetadata(
  args: ConferenceLectureDetailPageProps
): Metadata {
  const {
    params: { slugs },
  } = args;
  const [__, _, lectureId] = slugs;
  const { lecture, conference } = getConferenceData(lectureId);

  if (!lecture || !conference) {
    return {
      title: "존재하지 않는 게시글",
    };
  }
  return {
    title: {
      absolute: `${lecture.title} - ${conference.title}`,
    },
  };
}

export default async function ConferenceLectureDetailPage(
  args: ConferenceLectureDetailPageProps
) {
  const {
    params: { slugs },
  } = args;
  const [_, conferenceId, lectureId] = slugs;
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
