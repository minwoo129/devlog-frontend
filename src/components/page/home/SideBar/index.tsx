import DefaultView from "./DefaultView";
import { SideBarProps } from "./types";

export default function SideBar(args: SideBarProps) {
  const { gitUserData } = args;
  return (
    <div className="fixed top-[100px] right-[20px] w-[200px] h-fit flex flex-col justify-start items-start rounded-xl shadow-2xl border-2 border-red-400">
      <DefaultView />
    </div>
  );
}
