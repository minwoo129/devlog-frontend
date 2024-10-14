import PageLayer from "@/components/common/pageLayer";
import { DevLogPostDetailPageProps } from "./types";

export default function DevLogPostDetailPage(args: DevLogPostDetailPageProps) {
  console.log("args: ", args);
  const {} = args;
  return (
    <PageLayer>
      <h1>블로그 포스트 상세 페이지</h1>
    </PageLayer>
  );
}
