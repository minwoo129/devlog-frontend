import { PageNavLinkType } from "@/components/common/navigation/navDatas";
import { Post } from "@/lib/types";

export interface CategoryListProps {
  posts: Post[];
}

export interface CategoryListItemProps {
  categoryData: PageNavLinkType;
}

export interface AllPostListProps {
  posts: Post[];
}

export interface AllPostListItemProps {
  post: Post;
}