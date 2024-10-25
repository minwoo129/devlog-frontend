import { YearConfDetailInterceptPageProps } from "./types";
import ConfDetailPopupHeader from "@/components/page/conference/conferenceDetail/YearConfDetailPopup/ConfDetailPopupHeader";
import ConfDetailPopupBody from "@/components/page/conference/conferenceDetail/YearConfDetailPopup/ConfDetailPopupBody";
import { ConferenceObjDatas } from "@/commonDatas/conferences";
import PageModal from "@/components/common/PageModal";
import { Metadata } from "next";

export function generateMetadata(
  args: YearConfDetailInterceptPageProps
): Metadata {
  const {
    params: { conferenceId, category },
  } = args;
  const selectedConf = ConferenceObjDatas[category].confHistory.find(
    (conf) => conf.id === conferenceId
  );

  if (!selectedConf) {
    return {
      title: "존재하지 않는 데이터",
    };
  }

  const { title } = selectedConf;
  return {
    title: {
      absolute: `${title} | Conference Log`,
    },
  };
}

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
    <PageModal>
      <ConfDetailPopupHeader selectedConf={selectedConf} />
      <ConfDetailPopupBody selectedConf={selectedConf} />
    </PageModal>
  );
}
