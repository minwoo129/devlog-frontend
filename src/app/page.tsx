import { classMerge } from "@/commonFunctions/tailwinds";
import PageLayer from "@/components/common/pageLayer";
import { Profile } from "@/components/page/home";
import { GithubProfile } from "@/lib/types";

export default function Home() {
  const style = classMerge([
    "flex flex-col w-full ",
    "lg2:w-[1000px]",
    "xl1:w-[1000px]",
    "xl2:w-[1000px]",
    "vxl:w-[1000px]",
    "border-2 border-red-400",
  ]);
  return (
    <PageLayer className="px-0 flex justify-start items-center size-full ">
      <div className={style}>
        <Profile />
      </div>
    </PageLayer>
  );
}
