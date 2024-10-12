import { atom } from "recoil";
import { DevLogRecoilStateType } from "./types";

export const DevLogRecoilState = atom<DevLogRecoilStateType>({
  key: "devlog",
  default: {
    categorys: [],
    posts: [],
  },
});
