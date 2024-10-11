import { Profile } from "@/components/page/home";
import { GithubProfile } from "@/lib/types";
import axios from "axios";

export default function Home() {
  return (
    <div className="flex-1 flex-col overflow-scroll px-4 sm:basis-full">
      <Profile />
    </div>
  );
}
