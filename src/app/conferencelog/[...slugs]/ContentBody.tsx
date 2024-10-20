import { ContentBodyProps, getBlogPostArgs } from "./types";
import { classMerge } from "@/commonFunctions/tailwinds";
import EmptyBody from "./EmptyBody";
import Content from "./Content";
import ContentWithPost from "./ContentWithPost";

export default async function ContentBody(args: ContentBodyProps) {
  const { lecture, data } = args;

  const containerStyle = classMerge(["size-full"]);
  const postCustomContainerStyle = classMerge([
    containerStyle,
    "flex flex-col-reverse justify-between items-start",
    "px-6",
    //"xl1:flex-row",
    "xl2:flex-row xl2:px-12",
    "vxl:flex-row vxl:px-12",
    "relative",
  ]);
  /* const postCustomContainerStyle = classMerge([
    containerStyle,
    "flex flex-col-reverse justify-between items-start",
    "px-12",
    "tablet:flex-col-reverse",
    "laptop:flex-col-reverse",
    "desktop:flex-row",
    "relative",
  ]); */

  if (!lecture) {
    return <EmptyBody containerStyle={containerStyle} />;
  }
  if (!data) {
    return <Content containerStyle={containerStyle} lecture={lecture} />;
  }

  console.log("data: ", data);
  return (
    <ContentWithPost
      containerStyle={postCustomContainerStyle}
      data={data}
      conferenceId={lecture.conferenceId}
      createdAt={lecture.createdAt}
      description={lecture.description}
      title={lecture.title}
      keyTags={lecture.keyTags}
      youtubeEmbedLink={lecture.youtubeVideoInfo.embedURL}
    />
  );
}
