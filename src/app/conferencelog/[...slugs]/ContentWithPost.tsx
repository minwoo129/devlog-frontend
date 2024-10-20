import { IntroduceLayerAtPost } from "@/components/page/conference/lectureDetail";
import PostMarkdown from "./PostMarkdown";
import { ContentWithPostProps } from "./types";

export default function ContentWithPost(args: ContentWithPostProps) {
  const {
    containerStyle,
    data,
    conferenceId,
    createdAt,
    description,
    title,
    keyTags,
    youtubeEmbedLink,
  } = args;
  return (
    <div className={containerStyle}>
      <PostMarkdown data={data} />
      <IntroduceLayerAtPost
        conferenceId={conferenceId}
        createdAt={createdAt}
        description={description}
        title={title}
        keyTags={keyTags}
        youtubeEmbedLink={youtubeEmbedLink}
      />
    </div>
  );
}
