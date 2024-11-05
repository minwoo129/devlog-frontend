import { classMerge } from "@/commonFunctions/tailwinds";
import PageLayer from "@/components/common/pageLayer";
import { Profile } from "@/components/page/home";

export default async function Home() {
  const style = classMerge([
    "flex flex-col w-full max-w-[1000px]",
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
