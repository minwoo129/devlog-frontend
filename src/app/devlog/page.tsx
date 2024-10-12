import PageLayer from "@/components/common/pageLayer";
import Title from "@/components/common/title";
import { CategoryList } from "@/components/page/blog/main";

export default function Devlog() {
  return (
    <PageLayer>
      <Title className="mt-10 border-2 border-red-300">dev.log</Title>
      <CategoryList />
    </PageLayer>
  );
}
