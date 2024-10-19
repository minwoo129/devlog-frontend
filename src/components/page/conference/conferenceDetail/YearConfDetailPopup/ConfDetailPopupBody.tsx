import { classMerge } from "@/commonFunctions/tailwinds";
import ConfLectureItem from "./ConfLectureItem";
import { ConfDetailPopupBodyProps } from "./types";

const ConfDetailPopupBody = (args: ConfDetailPopupBodyProps) => {
  const { selectedConf } = args;

  const container = classMerge([
    "grid grid-cols-1 gap-8 justify-center max-h-[300px] px-12 py-4 mt-10 overflow-y-scroll scrollbar-hide",
    "md:grid-cols-2 md:gap-6 md:px-5 ",
    "lg:grid-cols-3 lg:gap-7 lg:px-2 ",
    "xl:grid-cols-4 xl:gap-10 xl:px-2 xl:max-h-[400px]",
  ]);
  if (!selectedConf) {
    return <div className={container} />;
  }

  const { lectures } = selectedConf;
  const visibleLectures = lectures.filter((lect) => lect.visible);

  return (
    <div className={container}>
      {visibleLectures.map((lecture, idx) => {
        return <ConfLectureItem lecture={lecture} key={idx} />;
      })}
    </div>
  );
};

export default ConfDetailPopupBody;
