import { ConfLectureType } from "../types";
import { YoutubeVideoDatas } from "../youtubeVideos";

/**
 * ================ 강의 데이터 ================
 * 1. 컨퍼런스명: Google I/O 2023
 * 2. 컨퍼런스 ID: ch_2023_google
 */
export const GoogleIO2023_Lectures: ConfLectureType[] = [
  {
    id: "ch_2023_google_1",
    videoId: "cNfINi5CNbY",
    title: "Google 기조연설",
    description:
      "Google이 전 세계의 정보를 체계화하여 누구든 손쉽게 액세스하고 활용하도록 하기 위한 사명을 어떻게 실천하는지 알아보세요.",
    createdAt: "2023-05-10T19:49:45Z",
    href: "/conferencelog/google-io/ch_2023_google_1",
    conferenceId: "ch_2023_google",
    visible: true,
    originalLectureURL:
      "https://io.google/2023/program/396cd2d5-9fe1-4725-a3dc-c01bb2e2f38a/intl/ko/",
    youtubeVideoInfo: YoutubeVideoDatas["cNfINi5CNbY"],
    conferenceType: "google-io",
  },
  {
    id: "ch_2023_google_2",
    videoId: "qXhjN66O7Bk",
    title: "Android에 관한 새로운 소식",
    description:
      "Android 개발 업계의 최신 뉴스를 확인해보세요. Android 14, 폼 팩터, Jetpack, Compose, 툴링, 성능 등에 대한 정보를 드립니다.",
    createdAt: "2023-05-10T20:37:11Z",
    href: "/conferencelog/google-io/ch_2023_google_2",
    conferenceId: "ch_2023_google",
    visible: true,
    originalLectureURL:
      "https://io.google/2023/program/035d04f9-bc75-479e-8865-493151c867c4/intl/ko/",
    youtubeVideoInfo: YoutubeVideoDatas["qXhjN66O7Bk"],
    conferenceType: "google-io",
  },
  {
    id: "ch_2023_google_3",
    videoId: "emIxn-f9bK0",
    title: "Firebase에 관한 새로운 소식",
    description:
      "Firebase는 스택의 모든 부분이 서로 간단하게 통신할 수 있게 해 주는 스레드입니다. 서버 코드 실행 기능, 장애를 빠르게 찾아서 수정하는 기능, 앱 보안을 강화하는 기능을 비롯한 최신 기능에 대해 알아보세요.",
    createdAt: "2023-05-10T20:40:19Z",
    href: "/conferencelog/google-io/ch_2023_google_3",
    conferenceId: "ch_2023_google",
    visible: true,
    originalLectureURL:
      "https://io.google/2023/program/d2aa0ce5-06e2-4f01-b67c-3a5dea8b9caa/intl/ko/",
    youtubeVideoInfo: YoutubeVideoDatas["emIxn-f9bK0"],
    conferenceType: "google-io",
  },
  {
    id: "ch_2023_google_4",
    videoId: "36peNZUlgzU",
    title: "패스키 지원으로 Android 앱에서 비밀번호 사용을 줄이는 방법",
    description:
      "패스키와 Android의 Credential Manager API를 사용하여 앱에서 더 안전하고 원활한 인증 여정을 제공하는 방법에 대해 알아보세요. 패스키는 비밀번호를 사용하지 않는 인증을 위한 새로운 업계 표준으로, 기존의 인증 솔루션(예: 비밀번호)이 가진 여러 보안 및 사용성 관련 문제를 극복하면서도 원활하고 안전한 경험을 제공합니다. Credential Manager는 Android 앱에서 기존 인증 방식과 함께 패스키도 지원합니다.",
    createdAt: "2023-05-10T20:39:03Z",
    href: "/conferencelog/google-io/ch_2023_google_4",
    conferenceId: "ch_2023_google",
    visible: true,
    originalLectureURL:
      "https://io.google/2023/program/177fc76c-6c2c-4840-a423-e609faa51d55/intl/ko/",
    youtubeVideoInfo: YoutubeVideoDatas["36peNZUlgzU"],
    conferenceType: "google-io",
  },
  {
    id: "ch_2023_google_5",
    videoId: "PsV-wSZ2BCo",
    title: "Firebase의 Flutter SDK에 관한 새로운 소식",
    description:
      "Firebase는 Flutter를 포함한 여러 플랫폼을 위한 풀 스택 앱을 빌드하여 출시, 운영하기 위한 API와 도구를 제공합니다. 이 세션에서는 얼마 전에 적용된 최신 개선 사항과 앞으로의 개발 일정에 대해 안내합니다.",
    createdAt: "2023-05-10T20:45:07Z",
    href: "/conferencelog/google-io/ch_2023_google_5",
    conferenceId: "ch_2023_google",
    visible: true,
    originalLectureURL:
      "https://io.google/2023/program/16cd0363-98fa-4f1e-86f6-94268beef641/intl/ko/",
    youtubeVideoInfo: YoutubeVideoDatas["PsV-wSZ2BCo"],
    conferenceType: "google-io",
  },
  {
    id: "ch_2023_google_6",
    videoId: "SF8ueIn2Nlc",
    title: "패스키: 더 간단하고 안전한 로그인",
    description:
      "Google에서는 수년간의 연구를 통해 드디어 비밀번호 사용을 중단하고 모든 주요 플랫폼에서 사용자에게 원활하게 제공할 수 있는 더 간단하고 편안하면서도 안전한 경험을 구현하였습니다. 이 세션에서는 패스키의 장점, 패스키를 사용하여 간소화된 인증 플로를 사용하는 방법, 이 새로운 기술을 포용하기 위해 ID 스택을 발전시키는 방법에 대해 자세히 설명합니다.",
    createdAt: "2023-05-10T20:37:32Z",
    href: "/conferencelog/google-io/ch_2023_google_6",
    conferenceId: "ch_2023_google",
    visible: true,
    originalLectureURL:
      "https://io.google/2023/program/0c9e010f-617a-426a-a4fb-bd1d19c91358/intl/ko/",
    youtubeVideoInfo: YoutubeVideoDatas["SF8ueIn2Nlc"],
    conferenceType: "google-io",
  },
];
