import { ConferenceLectureDetailPageProps } from "./types";

export default function ConferenceLectureDetailPage(
  args: ConferenceLectureDetailPageProps
) {
  const {
    params: { slugs },
  } = args;
  return (
    <div>
      <h1>ConferenceLectureDetailPage</h1>
    </div>
  );
}
