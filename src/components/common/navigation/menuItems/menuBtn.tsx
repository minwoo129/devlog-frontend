"use client";
import { useState } from "react";
import Link from "next/link";
import { DeepMenuBtnProps, MenuBtnProps, NavigationType } from "./types";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { useRouter } from "next/navigation";
import { UrlObject } from "url";

export default function MenuBtn(args: MenuBtnProps) {
  const { data, onClick, openedDetailMenu, setOpenedDetailMenu } = args;
  const [isOpen, setOpen] = useState(false);
  const router = useRouter();

  const handleClick = (href: string) => {
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
      <Accordion
        className="bg-zinc-800 border-b-2 border-white"
        expanded={openedDetailMenu === data.menuKey}
        onChange={handleAccordionChange}
      >
        <AccordionSummary
          className={`flex flex-row justify-center items-center text-2xl text-white font-bold hover:text-orange-600 `}
        >
          {title}
        </AccordionSummary>
        <AccordionDetails className="flex flex-col">
          {menus.map((menuData, idx) => {
            const { href, title } = menuData;
            return (
              <DeepMenuBtn
                handleClick={handleClick}
                href={href}
                title={title}
                key={idx}
              />
            );
          })}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

const DeepMenuBtn = (args: DeepMenuBtnProps) => {
  const { handleClick, href, title } = args;
  return (
    <button
      className="flex flex-row justify-start items-center w-full h-fit py-1"
      onClick={() => handleClick(href)}
    >
      <p className="text-xl text-white hover:text-orange-600">{title}</p>
    </button>
  );
};
