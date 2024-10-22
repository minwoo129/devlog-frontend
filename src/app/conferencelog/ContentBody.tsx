import { ContentBodyProps } from "./types";
import { ConferenceList } from "@/components/page/conference/main";

export default function ContentBody(args: ContentBodyProps) {
  // const { posts } = args;
  return (
    <div className="size-full">
      <ConferenceList />
      <div className="h-10" />
    </div>
  );
}
