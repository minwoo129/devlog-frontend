import { FooterLinkDatas } from "@/commonDatas/footerLinkData";
import { FooterLinkGridProps } from "../types";
import FooterLinkIconBtn from "./FooterLinkIconBtn";

const FooterLinkGrid = (args: FooterLinkGridProps) => {
  return (
    <div className="w-fit flex flex-col justify-start items-start">
      <div className="flex flex-row justify-start items-center">
        {FooterLinkDatas.map((data, idx) => {
          const { href, icon } = data;
          return (
            <FooterLinkIconBtn
              href={href}
              icon={icon}
              className={"mr-3"}
              key={idx}
            />
          );
        })}
      </div>
      {/* <p className="text-xl text-white font-nanumneo-r mt-3">
                  Mwoo의 개발 블로그
              </p> */}
    </div>
  );
};

export default FooterLinkGrid;
