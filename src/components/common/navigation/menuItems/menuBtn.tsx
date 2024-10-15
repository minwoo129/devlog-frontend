"use client";
import { useState } from "react";
import Link from "next/link";
import { MenuBtnProps } from "./types";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { useRouter } from "next/navigation";
import { UrlObject } from "url";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function MenuBtn(args: MenuBtnProps) {
  const { data, onClick, openedDetailMenu, setOpenedDetailMenu } = args;

  const { title, href } = data;

  /* const handleClick = (href: string) => {
    setOpenedDetailMenu("");
    if (isOpen) setOpen(false);
    if (onClick) onClick();
    router.push(href);
  };

  const { type } = data;

  if (type === "link") {
    const { href, title } = data;

    return (
      <button
        className="flex flex-row w-full h-fit py-3 justify-start items-center border-b-2 border-white"
        onClick={() => handleClick(href)}
      >
        <p className="text-2xl text-white font-bold ml-4 hover:text-orange-600">
          {title}
        </p>
      </button>
    );
  }

  const { title, menus } = data;

  const handleAccordionChange = () => {
    if (openedDetailMenu === data.menuKey) {
      setOpenedDetailMenu("");
      return;
    }

    setOpenedDetailMenu(data.menuKey);
  };

  return (
    <div>
    </div>
  ); */

  return (
    <Link href={href} className="w-fit h-max">
      <div className="flex flex-row size-full rounded-lg justify-center items-center text-xl font-nanumneo-r text-white px-4 py-2 hover:bg-zinc-600 ">
        {title}
      </div>
    </Link>
  );
}
