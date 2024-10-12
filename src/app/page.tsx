import PageLayer from "@/components/common/pageLayer";
import { Profile } from "@/components/page/home";
import { GithubProfile } from "@/lib/types";
import axios from "axios";

export default function Home() {
  return (
    <PageLayer>
      <Profile />
    </PageLayer>
  );
}
