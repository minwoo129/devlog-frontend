import { Post } from "@/lib/types";

export interface CommonPostListProps {
  posts: Post[];
  className?: string;
  isCategoryDetailPage?: boolean;
}

export interface CommonPostListItemProps {
  post: Post;
  isCategoryDetailPage: boolean;
}

export interface CommonPostItemThumbnailProps {
  thumbnailURL: string;
}

export interface CommonPostListItemFooterProps {
  tags: string[];
  date: string;
}

export interface TagProps {
  tag: string;
}
