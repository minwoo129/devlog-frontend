import { Logo, MenuBtn } from "../menuItems";
import { PageNavDatas, TestPageNavData } from "../navDatas";
import { LargeNavigationProps } from "./types";

export default function LargeNavigation(args: LargeNavigationProps) {
  const { setOpen, openedDetailMenu, setOpenedDetailMenu } = args;
  return (
    <div className="size-full bg-zinc-800 sm:basis-20 sm:hidden md:basis-20 md:hidden">
      <Logo navigationType="large" />
      <div className="size-full overflow-y-scroll">
        {PageNavDatas.map((data, idx) => {
          return (
            <MenuBtn
              data={data}
              openedDetailMenu={openedDetailMenu}
              setOpenedDetailMenu={setOpenedDetailMenu}
              onClick={() => setOpen(false)}
              key={idx}
            />
          );
        })}
      </div>
    </div>
  );
}
