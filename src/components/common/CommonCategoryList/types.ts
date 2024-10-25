import { SVGImageName } from "../SVGImage/types";

export interface CommonCategoryListProps {
  className?: string;
  categorys: CommonCategoryItemType[];
}

export interface CommonCategoryListItemProps {
  category: CommonCategoryItemType;
}

export interface CommonCategoryListItemThumbnailProps {
  thumbnail: CommonCategoryItemThumbnailData;
}

export interface CommonCategoryListItemDetailProps {
  category: CommonCategoryItemType;
}

export type CommonCategoryItemType = {
  title: string;
  href: string;
  thumbnail: CommonCategoryItemThumbnailData;
  testID: string;
};

export type CommonCategoryItemThumbnailData = {
  thumbnailURL: SVGImageName;
  width?: number;
  height?: number;
};
