"use client";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { DrawerMenuItemProps } from "./types";
import { common } from "@mui/material/colors";

export default function DrawerMenuItem(args: DrawerMenuItemProps) {
  const { data, onPressMenu } = args;
  const { title, href } = data;
  return (
    <ListItem sx={{ marginTop: 3, marginBottom: 3 }} disablePadding>
      <ListItemButton onClick={() => onPressMenu(href)}>
        <ListItemText
          sx={{ color: common.white, fontSize: 16 }}
          primary={title}
        />
      </ListItemButton>
    </ListItem>
  );
}
