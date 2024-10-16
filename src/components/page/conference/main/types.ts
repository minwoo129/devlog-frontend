import { PageNavLinkType } from "@/components/common/navigation/navDatas";
import { ConferenceDataType } from "./defDatas";
import { SVGImageName } from "@/components/common/SVGImage/types";

export interface ConferenceListProps {}

export interface ConferenceListItemProps {
  categoryData: ConferenceDataType;
}

export interface ThumbnailImgProps {
  thumbnailURL: SVGImageName;
  publisher: string;
}
