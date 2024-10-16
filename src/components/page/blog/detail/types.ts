export interface DetailTitleLayerProps extends DetailTitleLayerFooterProps {
  title: string;
  description: string;
}

export interface DetailTitleLayerFooterProps
  extends DetailTitleLayerTagLayerProps,
    DetailTitleLayerDateLayerProps {}

export interface DetailTitleLayerTagLayerProps {
  tags: string[];
}

export interface DetailTitleLayerDateLayerProps {
  date: string;
}

export interface ThumbnailImgProps {
  thumbnailURL: string;
}
