import { atom } from "recoil";
import { ConferenceLogRecoilStateType } from "./types";

export const ConferenceLogRecoilState = atom<ConferenceLogRecoilStateType>({
  key: "conferenceLog",
  default: {
    categorys: [],
    conferenceLogs: [],
  },
});
