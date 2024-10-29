import { FooterProps } from "../types";
import FooterLinkGrid from "./FooterLinkGrid";

export default function Footer(args: FooterProps) {
  const {} = args;
  return (
    <div className="w-full h-[150px] bg-gray-800 grid grid-cols-2">
      <div className="w-full h-full  "></div>
      <div className="w-full h-full flex flex-row justify-end items-center pr-6">
        <FooterLinkGrid />
      </div>
    </div>
  );
}
