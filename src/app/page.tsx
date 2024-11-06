import { getGithubUserData, Notion } from "@/api";
import { convertLanguageUsingStatusData } from "@/api/github/dataConvert";
import { classMerge } from "@/commonFunctions/tailwinds";
import PageLayer from "@/components/common/pageLayer";
import { Profile } from "@/components/page/home";

export const dynamic = "force-dynamic";

export default async function Home() {
  //const result = await Notion.DataBase.Category1({});
  const user = await getGithubUserData({ username: "minwoo129" });
  convertLanguageUsingStatusData(user);
  /*   console.log("result: ", result);
  console.log("user: ", user.data.user.repositories);
  const repositories = user.data.user.repositories?.nodes ?? [];
  for (const rep of repositories) {
    console.log("rep: ", rep);
  } */
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
