import { NavigationDevLogCategoryType } from "@/commonDatas/routes/types";
import { MDXRemoteSerializeResult } from "next-mdx-remote";

export interface DevLogPostDetailPageProps {
  params: {
    slugs: [NavigationDevLogCategoryType, string];
  };
  searchParams: {
    title?: string;
  };
}

export interface PostPageProps {
  data: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, unknown>
  >;
}
