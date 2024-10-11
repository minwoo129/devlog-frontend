"use client";
import React, { useState } from "react";
import { SmallNavigation } from "./smallNavigation";
import UpperDrawer from "./upperDrawer";
import LargeNavigation from "./largeNavigation";

export default function Navigation({}) {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="basis-60 min-h-full sm:basis-20">
      {/* <div className="size-full bg-zinc-600 sm:basis-2 md:hidden lg:hidden xl:hidden">
      </div> */}
      <SmallNavigation setOpen={setOpen} />
      <UpperDrawer isOpen={isOpen} setOpen={setOpen} />
      <LargeNavigation setOpen={setOpen} />
    </div>
  );
}
