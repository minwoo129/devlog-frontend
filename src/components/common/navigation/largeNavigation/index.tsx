import LargeMenuBtn from "./largeMenuBtn";
import Logo from "./logo";
import { LargeNavigationProps } from "./types";

export default function LargeNavigation(args: LargeNavigationProps) {
  const { setOpen } = args;
  return (
    <div className="size-full bg-zinc-800 sm:basis-20 sm:hidden overflow-y-scroll">
      <Logo />
      <LargeMenuBtn
        href={"/testPage"}
        title="테스트1"
        onClick={() => setOpen(false)}
      />
    </div>
  );
}
