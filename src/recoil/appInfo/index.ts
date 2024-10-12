import { atom } from "recoil";
import { AppInfoRecoilStateType } from "./types";

export const AppInfoRecoilState = atom<AppInfoRecoilStateType>({
  key: "appInfo",
  default: {
    init: false,
  },
});
