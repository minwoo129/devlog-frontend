import { NavigationDevLogCategoryType } from "@/components/common/navigation/navDatas";
import { MDXRemoteSerializeResult } from "next-mdx-remote";

export interface DevLogPostDetailPageProps {
  params: {
    category: NavigationDevLogCategoryType;
    post: string;
  };
}

export interface PostPageProps {
  data: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, unknown>
  >;
}
