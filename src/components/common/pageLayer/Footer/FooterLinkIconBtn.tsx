"use client";
import { classMerge } from "@/commonFunctions/tailwinds";
import { FooterLinkIconBtnProps } from "../types";
import Link from "next/link";
import SVGImage from "../../SVGImage";
import { useState } from "react";

const FooterLinkIconBtn = (args: FooterLinkIconBtnProps) => {
  const { href, icon, className } = args;
  const [isHover, setHover] = useState(false);

  const style = classMerge([className]);
  return (
    <Link href={href} target="__blank">
      <div
        className={style}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <SVGImage
          name={icon}
          width={24}
          height={24}
          color={isHover ? "#d4d4d8" : "#fff"}
        />
      </div>
    </Link>
  );
};

export default FooterLinkIconBtn;
