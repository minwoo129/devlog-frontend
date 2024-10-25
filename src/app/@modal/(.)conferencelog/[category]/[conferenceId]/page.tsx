import Modal from "./modal";
import { YearConfDetailInterceptPageProps } from "./types";
import ConfDetailPopupHeader from "@/components/page/conference/conferenceDetail/YearConfDetailPopup/ConfDetailPopupHeader";
import ConfDetailPopupBody from "@/components/page/conference/conferenceDetail/YearConfDetailPopup/ConfDetailPopupBody";
import { ConferenceObjDatas } from "@/commonDatas/conferences";

export default function YearConfDetailInterceptPage(
  args: YearConfDetailInterceptPageProps
) {
  const {
    params: { category, conferenceId },
  } = args;
  const selectedConf = ConferenceObjDatas[category].confHistory.find(
    (conf) => conf.id === conferenceId
  );
  return (
    <Modal>
      <ConfDetailPopupHeader selectedConf={selectedConf} />
      <ConfDetailPopupBody selectedConf={selectedConf} />
    </Modal>
  );
}
