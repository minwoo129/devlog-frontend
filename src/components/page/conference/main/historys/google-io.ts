import { GOOGLEIO_2024 } from "@/utils/images";
import { ConfHistoryType, ConfLectureType } from "../defDatas";

export const GoogleIO2024_Lectures: ConfLectureType[] = [
  {
    title: "Google Keynote(Google I/O 2024)",
    description: "",
    thumbnailURL: "https://img.youtube.com/vi/XEzRZ35urlk/0.jpg",
    url: "https://www.youtube.com/live/XEzRZ35urlk?si=VoUqOldemWGh7nVf",
    createdAt: "2024-05-14",
  },
  {
    title: "Google AI에 관한 새로운 소식",
    description: "",
    thumbnailURL: "https://img.youtube.com/vi/fH4xqeu7GT0/0.jpg",
    url: "https://youtu.be/fH4xqeu7GT0?si=5vKWqZSGmy_JIdX4",
    createdAt: "2024-05-16",
    keyTags: ["AI", "Google AI"],
  },
  {
    title: "Android 개발 도구의 새로운 기능",
    description: "",
    thumbnailURL: "https://img.youtube.com/vi/2wOfYgIMf-A/0.jpg",
    url: "https://youtu.be/2wOfYgIMf-A?si=FXfg3QGgyb40tKoZ",
    createdAt: "2024-05-16",
    keyTags: ["Android", "Android Studio", "Firebase"],
  },
  {
    title: "Flutter에 관한 새로운 소식",
    description: "",
    thumbnailURL: "https://img.youtube.com/vi/lpnKWK-KEYs/0.jpg",
    url: "https://youtu.be/lpnKWK-KEYs?si=Jfz4WsXZ49yp89iO",
    createdAt: "2024-05-16",
    keyTags: ["Flutter", "Dart", "Gemini", "Impeller", "Macros", "WebAssembly"],
  },
  {
    title: "Gen AI 기능 구축을 위한 Firebase의 새로운 기능",
    description: "",
    thumbnailURL: "https://img.youtube.com/vi/2MvV-YX1eKw/0.jpg",
    url: "https://youtu.be/2MvV-YX1eKw?si=Eeg0UWn0Dh4Cwh98",
    createdAt: "2024-05-16",
    keyTags: [
      "Firebase",
      "Gen AI",
      "Gemini",
      "Firebase Data Connect",
      "GenKit",
      "Vertex AI",
    ],
  },
  {
    title: "Google Play에 관한 새로운 소식",
    description: "",
    thumbnailURL: "https://img.youtube.com/vi/xry2mQbWrio/0.jpg",
    url: "https://youtu.be/xry2mQbWrio?si=5_pe_0x1pKoVkrsE",
    createdAt: "2024-05-16",
    keyTags: ["Google Play"],
  },
  {
    title: "Chrome OS에 관한 새로운 소식",
    description: "",
    thumbnailURL: "https://img.youtube.com/vi/KFeuEMAaKfM/0.jpg",
    url: "https://youtu.be/KFeuEMAaKfM?si=262bnwnCX7Z_w6YL",
    createdAt: "2024-05-16",
  },
  {
    title: "Angular에 관한 새로운 소식",
    description: "",
    thumbnailURL: "https://img.youtube.com/vi/srP2P6j4Cqw/0.jpg",
    url: "https://youtu.be/srP2P6j4Cqw?si=QFpP8pmklYBBYAQx",
    createdAt: "2024-05-16",
  },
  {
    title: "웹에 관한 새로운 소식",
    description: "",
    thumbnailURL: "https://img.youtube.com/vi/W8bokbLn1G8/0.jpg",
    url: "https://youtu.be/W8bokbLn1G8?si=iIRyZSAa0pn6MSS9",
    createdAt: "2024-05-16",
  },
];

export const GoogleIOHistorys: ConfHistoryType[] = [
  {
    title: "Google I/O 2024",
    openedAt: "2024-05-14",
    keyTags: ["Gemini", "생성형 AI", "Project Astra"],
    thumbnailURL: GOOGLEIO_2024,
    lectures: [...GoogleIO2024_Lectures],
  },
];
