import React from "react";
import { Logo, MenuBtn } from "./menuItems";
import { PageNavDatas } from "./navDatas";

export default function Navigation({}) {
  return (
    <div className="flex flex-row w-full min-h-16 justify-between items-center bg-zinc-800 px-4">
      <Logo navigationType="large" />

      <div className="flex flex-row w-fit h-full justify-center items-center space-x-4">
        {PageNavDatas.map((data, idx) => {
          return <MenuBtn data={data} key={idx} />;
        })}
      </div>
      {/* <div className="size-full bg-zinc-600 sm:basis-2 md:hidden lg:hidden xl:hidden">
      </div> */}
      {/* <SmallNavigation setOpen={setOpen} />
      <UpperDrawer
        isOpen={isOpen}
        setOpen={setOpen}
        openedDetailMenu={openedDetailMenu}
        setOpenedDetailMenu={setOpenedDetailMenu}
      /> */}
      {/* <LargeNavigation
        setOpen={setOpen}
        openedDetailMenu={openedDetailMenu}
        setOpenedDetailMenu={setOpenedDetailMenu}
      /> */}
    </div>
  );
}
