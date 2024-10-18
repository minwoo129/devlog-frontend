import { ConferenceLectureDetailPageProps } from "./types";
import PageLayer from "@/components/common/pageLayer";
import ContentBody from "./ContentBody";
import { TotalConferenceLectures } from "@/commonDatas/conferences";

export default function ConferenceLectureDetailPage(
  args: ConferenceLectureDetailPageProps
) {
  const {
    params: { slugs },
  } = args;
  const [conferenceId, lectureId] = slugs;
  const lecture = TotalConferenceLectures.find(
    (lecture) => lecture.id === lectureId
  );
  return (
    <PageLayer>
      <ContentBody lecture={lecture} />
    </PageLayer>
  );
}
