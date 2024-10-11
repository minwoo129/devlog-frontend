import { Logo, MenuBtn } from "../menuItems";
import { PageNavDatas, TestPageNavData } from "../navDatas";
import { LargeNavigationProps } from "./types";

export default function LargeNavigation(args: LargeNavigationProps) {
  const { setOpen } = args;
  return (
    <div className="size-full bg-zinc-800 sm:basis-20 sm:hidden">
      <Logo navigationType="large" />
      <div className="size-full overflow-y-scroll">
        {/* <MenuBtn
          data={TestPageNavData}
        /> */}
        {PageNavDatas.map((data, idx) => {
          return (
            <MenuBtn data={data} key={idx} onClick={() => setOpen(false)} />
          );
        })}
        {/* {PageNavDatas.map((data, idx) => {
          const { href, title } = data;
          return (
            <MenuBtn
              href={href}
              title={title}
              onClick={() => setOpen(false)}
              navigationType="large"
              key={idx}
            />
          );
        })} */}
      </div>
    </div>
  );
}
