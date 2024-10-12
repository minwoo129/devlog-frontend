"use client";
import React, { useState } from "react";
import { SmallNavigation } from "./smallNavigation";
import UpperDrawer from "./upperDrawer";
import LargeNavigation from "./largeNavigation";

export default function Navigation({}) {
  const [isOpen, setOpen] = useState(false);
  const [openedDetailMenu, setOpenedDetailMenu] = useState("");

  return (
    <div className="flex basis-60 h-screen sm:basis-20 overflow-y-hidden">
      {/* <div className="size-full bg-zinc-600 sm:basis-2 md:hidden lg:hidden xl:hidden">
      </div> */}
      <SmallNavigation setOpen={setOpen} />
      <UpperDrawer
        isOpen={isOpen}
        setOpen={setOpen}
        openedDetailMenu={openedDetailMenu}
        setOpenedDetailMenu={setOpenedDetailMenu}
      />
      <LargeNavigation
        setOpen={setOpen}
        openedDetailMenu={openedDetailMenu}
        setOpenedDetailMenu={setOpenedDetailMenu}
      />
    </div>
  );
}
