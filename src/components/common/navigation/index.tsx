"use client";
import React, { useState } from "react";
import { Logo, MenuBtn } from "./menuItems";
import { PageNavDatas } from "@/commonDatas/routes";
import MenuIcon from "@mui/icons-material/Menu";
import { common } from "@mui/material/colors";
import { Button } from "@mui/material";
import DrawerMenu from "./DrawerMenu";

export default function Navigation({}) {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="flex flex-row w-full min-h-16 justify-between items-center bg-zinc-800 px-4">
      <Logo navigationType="large" />

      <div className="flex flex-row w-fit h-full justify-center items-center space-x-4 vsm:hidden sm1:hidden sm2:hidden">
        {PageNavDatas.map((data, idx) => {
          return <MenuBtn data={data} key={idx} />;
        })}
      </div>
      <Button
        onClick={() => setDrawerOpen(true)}
        className=" rounded-xl p-2 transition ease-in-out duration-300 hover:bg-gray-600 vsm:block sm1:block sm2:block md1:hidden md2:hidden lg1:hidden lg2:hidden xl1:hidden xl2:hidden vxl:hidden"
      >
        <MenuIcon sx={{ color: common["white"] }} />
      </Button>

      <DrawerMenu isDrawerOpen={isDrawerOpen} setDrawerOpen={setDrawerOpen} />
    </div>
  );
}
