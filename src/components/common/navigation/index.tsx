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

      <Button
        onClick={() => setDrawerOpen(true)}
        className=" rounded-xl p-2 transition ease-in-out duration-300 hover:bg-gray-600 "
      >
        <MenuIcon sx={{ color: common["white"] }} />
      </Button>

      <DrawerMenu isDrawerOpen={isDrawerOpen} setDrawerOpen={setDrawerOpen} />
    </div>
  );
}
