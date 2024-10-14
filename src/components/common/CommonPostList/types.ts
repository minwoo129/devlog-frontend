import { Post } from "@/lib/types";

export interface CommonPostListProps {
  posts: Post[];
  className?: string;
}

export interface CommonPostListItemProps {
  post: Post;
}

export interface CommonPostListItemFooterProps {
  tags: string[];
  date: string;
}

export interface TagProps {
  tag: string;
}
