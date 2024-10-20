import { IntroduceLayer } from "@/components/page/conference/lectureDetail";
import { ContentProps } from "./types";

export default function Content(args: ContentProps) {
  const { containerStyle, lecture } = args;
  return (
    <div className={containerStyle}>
      <IntroduceLayer lecture={lecture} />
    </div>
  );
}
