import { CommonCategoryItemType } from "@/components/common/CommonCategoryList/types";
import { ConferenceDatas } from "../conferences";

export const DevLogCategorys: CommonCategoryItemType[] = [
  {
    title: "React Native",
    href: "/devlog/react-native",
    thumbnail: {
      thumbnailURL: "ReactNativeLogo",
      width: 100,
      height: 70,
    },
    testID: "react-native",
  },
  {
    title: "React",
    href: "/devlog/react",
    thumbnail: {
      thumbnailURL: "ReactLogo",
      width: 100,
      height: 70,
    },
    testID: "react",
  },
  {
    title: "Firebase",
    href: "/devlog/firebase",
    thumbnail: {
      thumbnailURL: "FirebaseLogo",
      width: 70,
      height: 100,
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
