import ConfLectureItem from "./ConfLectureItem";
import { ConfDetailPopupBodyProps } from "./types";

const ConfDetailPopupBody = (args: ConfDetailPopupBodyProps) => {
  const { selectedConf } = args;

  if (!selectedConf) {
    return <div className={"confDetailPopup bodyGrid"} />;
  }

  const { lectures } = selectedConf;
  const visibleLectures = lectures.filter((lect) => lect.visible);

  return (
    <div className={"confDetailPopup bodyGrid containerLayer"}>
      {visibleLectures.map((lecture, idx) => {
        return <ConfLectureItem lecture={lecture} key={idx} />;
      })}
    </div>
  );
};

export default ConfDetailPopupBody;
