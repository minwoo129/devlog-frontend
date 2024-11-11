"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { DrawerMenuProps } from "./types";
import { PageNavDatas } from "@/commonDatas/routes";
import DrawerMenuItem from "./DrawerMenuItem";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import { grey } from "@mui/material/colors";

export default function DrawerMenu(args: DrawerMenuProps) {
  const { isDrawerOpen, setDrawerOpen } = args;
  const router = useRouter();

  const onPressMenu = (href: string) => {
    setDrawerOpen(false);
    router.push(href);
  };

  return (
    <React.Fragment>
      <Drawer
        anchor="top"
        open={isDrawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box
          sx={{ width: "auto", bgcolor: grey[900] }}
          role="presentation"
          onClick={() => setDrawerOpen(false)}
          onKeyDown={() => setDrawerOpen(false)}
        >
          <List>
            {PageNavDatas.map((data, idx) => {
              return (
                <DrawerMenuItem
                  data={data}
                  onPressMenu={onPressMenu}
                  key={idx}
                />
              );
            })}
          </List>
        </Box>
      </Drawer>
    </React.Fragment>
  );
}
