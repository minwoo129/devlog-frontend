import { Logo, MenuBtn } from "../menuItems";
import { LargeNavigationProps } from "./types";

export default function LargeNavigation(args: LargeNavigationProps) {
  const { setOpen } = args;
  return (
    <div className="size-full bg-zinc-800 sm:basis-20 sm:hidden overflow-y-scroll">
      <Logo navigationType="large" />

      <MenuBtn
        href={"/testPage"}
        title="테스트1"
        onClick={() => setOpen(false)}
        navigationType="large"
      />
    </div>
  );
}
