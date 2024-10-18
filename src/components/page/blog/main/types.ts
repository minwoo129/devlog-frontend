import { PageNavLinkType } from "@/commonDatas/routes/types";
import { Post } from "@/lib/types";

export interface CategoryListProps {
  posts: Post[];
  categoryType: "devlog" | "conferencelog";
}

export interface CategoryListItemProps {
  categoryData: PageNavLinkType;
  categoryType: "devlog" | "conferencelog";
}

export interface AllPostListProps {
  posts: Post[];
}
