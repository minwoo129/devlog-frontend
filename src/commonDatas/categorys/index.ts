import { CommonCategoryItemType } from "@/components/common/CommonCategoryList/types";
import { ConferenceDatas } from "../conferences";

export const DevLogCategorys: CommonCategoryItemType[] = [
  {
    title: "React Native",
    href: "/devlog/react-native",
    thumbnail: {
      thumbnailURL: "ReactNativeLogo",
    },
    testID: "react-native",
  },
  {
    title: "React",
    href: "/devlog/react",
    thumbnail: {
      thumbnailURL: "ReactLogo",
    },
    testID: "react",
  },
  {
    title: "Firebase",
    href: "/devlog/firebase",
    thumbnail: {
      thumbnailURL: "FirebaseLogo",
      width: 140,
      height: 200,
    },
    testID: "firebase",
  },
];

export const ConferenceLogCagetorys: CommonCategoryItemType[] =
  ConferenceDatas.map((item) => {
    const { title, href, thumbnailURL, type } = item;
    return {
      title,
      href,
      thumbnail: {
        thumbnailURL,
      },
      testID: type,
    };
  });
