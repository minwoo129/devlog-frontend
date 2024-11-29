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
    <div className="navigation">
      <Logo navigationType="large" />

      <Button onClick={() => setDrawerOpen(true)} className="navigationBtn">
        <MenuIcon sx={{ color: common["white"] }} />
      </Button>

      <DrawerMenu isDrawerOpen={isDrawerOpen} setDrawerOpen={setDrawerOpen} />
    </div>
  );
}
