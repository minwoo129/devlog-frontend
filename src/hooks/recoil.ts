import { AppInfoRecoilState } from "@/recoil/appInfo";
import { AppInfoRecoilStateType } from "@/recoil/appInfo/types";
import { ConferenceLogRecoilState } from "@/recoil/conferencelog";
import { ConferenceLogRecoilStateType } from "@/recoil/conferencelog/types";
import { DevLogRecoilState } from "@/recoil/devlog";
import { DevLogRecoilStateType } from "@/recoil/devlog/types";
import { useRecoilState } from "recoil";

export const useAppInfoRecoilState = () => {
  return useRecoilState<AppInfoRecoilStateType>(AppInfoRecoilState);
};

export const useDevLogRecoilState = () => {
  return useRecoilState<DevLogRecoilStateType>(DevLogRecoilState);
};

export const useConferenceLogRecoilState = () => {
  return useRecoilState<ConferenceLogRecoilStateType>(ConferenceLogRecoilState);
};
