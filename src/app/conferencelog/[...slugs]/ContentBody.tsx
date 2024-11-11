import { ContentBodyProps, getBlogPostArgs } from "./types";
import { classMerge } from "@/commonFunctions/tailwinds";
import EmptyBody from "./EmptyBody";
import Content from "./Content";

export default async function ContentBody(args: ContentBodyProps) {
  const { lecture, data } = args;

  const containerStyle = classMerge(["size-full"]);
  const postCustomContainerStyle1 = classMerge([
    containerStyle,
    "flex flex-col justify-between items-start",
  ]);

  if (!lecture) {
    return <EmptyBody containerStyle={containerStyle} />;
  }
  return (
    <Content containerStyle={postCustomContainerStyle1} lecture={lecture} />
  );
}
