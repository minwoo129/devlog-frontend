import PageLayer from "@/components/common/pageLayer";
import Title from "@/components/common/title";
import { CategoryList } from "@/components/page/blog/main";

export default function Devlog() {
  return (
    <PageLayer>
      <Title className="text-5xl mt-10">dev.log</Title>
      <CategoryList />
    </PageLayer>
  );
}
