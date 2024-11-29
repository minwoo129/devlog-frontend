"use client";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { DrawerMenuItemProps } from "./types";
import { common, red, grey, orange } from "@mui/material/colors";
import { usePathname } from "next/navigation";

export default function DrawerMenuItem(args: DrawerMenuItemProps) {
  const pathName = usePathname();
  const { data, onPressMenu } = args;
  const { title, href } = data;

  return (
    <ListItem
      sx={{
        marginTop: 3,
        marginBottom: 3,
        transitionTimingFunction: "ease-in-out",
        transitionDuration: "0.3s",
        transitionProperty: "all",
        "&:hover": {
          bgcolor: "secondary.main",
        },
      }}
      disablePadding
    >
      <ListItemButton onClick={() => onPressMenu(href)}>
        <ListItemText
          sx={{
            color: pathName === href ? orange[400] : common.white,
            fontSize: 32,
            fontWeight: 900,
          }}
          primary={title}
        />
      </ListItemButton>
    </ListItem>
  );
}
