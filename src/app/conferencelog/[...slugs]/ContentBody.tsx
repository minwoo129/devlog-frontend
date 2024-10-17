import { IntroduceLayer } from "@/components/page/conference/lectureDetail";
import { ContentBodyProps } from "./types";

export default function ContentBody(args: ContentBodyProps) {
  const { lecture } = args;

  if (!lecture) {
    return <div className="size-full" />;
  }
  return (
    <div className="size-full">
      <IntroduceLayer lecture={lecture} />
    </div>
  );
}
