import { PageLinkKey, PageNavLinkType } from "@/commonDatas/routes/types";
import { Post } from "@/lib/types";

export interface CategoryListProps {
  posts: Post[];
  categoryType: "devlog" | "conferencelog";
}

export interface CategoryListItemProps {
  categoryData: PageNavLinkType;
  categoryType: "devlog" | "conferencelog";
}

export interface CategoryListItemThumbnailProps {
  linkKey: PageLinkKey;
}

export interface CategoryListItemDetailProps {
  title: string;
}

export interface AllPostListProps {
  posts: Post[];
}
