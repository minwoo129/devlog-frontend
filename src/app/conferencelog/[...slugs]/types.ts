import { ConfLectureType } from "@/commonDatas/conferences/types";
import { NavigationConferenceLogCategoryType } from "@/commonDatas/routes/types";
import { MDXRemoteSerializeResult } from "next-mdx-remote";

export interface ConferenceLectureDetailPageProps {
  params: {
    slugs: [string, NavigationConferenceLogCategoryType, string];
  };
}

export interface ContentBodyProps {
  lecture: ConfLectureType | undefined;
  data: MarkdownData | undefined;
}

export interface PostMarkdownProps {
  data: MarkdownData;
}

export type MarkdownData = MDXRemoteSerializeResult<
  Record<string, unknown>,
  Record<string, unknown>
>;

// ============================================================================

export type getBlogPostArgs = {
  lecture?: ConfLectureType;
  postPath?: string;
  conferenceId: NavigationConferenceLogCategoryType;
};

export interface EmptyBodyProps extends ContentCommonProps {}

export interface ContentProps extends ContentCommonProps {
  lecture: ConfLectureType;
}

export interface ContentWithPostProps extends ContentCommonProps {
  data: MarkdownData;
  title: string;
  description: string;
  createdAt: string;
  conferenceId: string;
  keyTags?: string[];
  youtubeEmbedLink: string;
}

interface ContentCommonProps {
  containerStyle: string;
}
