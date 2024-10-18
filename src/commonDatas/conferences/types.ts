import { SVGImageName } from "@/components/common/SVGImage/types";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { NavigationConferenceLogCategoryType } from "../routes/types";

/**
 * 컨퍼런스 데이터 타입
 */
export type ConferenceDataType = {
  /**
   * 컨퍼런스 타입(일종의 ID)
   * - google-io: 구글IO
   * - toss-slash: 토스 SLASH
   */
  type: NavigationConferenceLogCategoryType;
  /** 타이틀(컨퍼런스 명) */
  title: string;
  /** 간단 설명 */
  description: string;
  /** 썸네일 URL */
  thumbnailURL: SVGImageName;
  /** 연도별 컨퍼런스 데이터 */
  confHistory: ConfHistoryType[];
  /** 키워드 태그 */
  keyTags: string[];
  /** 개최 주관사 */
  publisher: string;
  /** 페이지 이동 경로 */
  href: string;
  /**
   * 해당 컨퍼런스의 일반적인 개막시기
   * - ex)
   *     - Google I/O: 매년 5월 경
   *     - 토스 SLASH: 매년 9, 10월 경
   */
  date_개막시기: string;
};

/**
 * 컨퍼런스 연도별 데이터 타입
 */
export type ConfHistoryType = {
  /**
   * 컨퍼런스 ID
   * - 형식: ch_{연도}_{컨퍼런스명(회사명)}
   */
  id: string;
  /** 타이틀(컨퍼런스 명, 연도별) */
  title: string;
  /**
   * 요약설명
   * - 주로 그 해에 열린 컨퍼런스에서 어떤 주제를 메인으로 다뤘고 어떤 내용을 강조했는지를 요약해서 작성함!!
   */
  description: string;
  /**
   * 썸네일 URL
   * - 로컬에 썸네일 이미지를 저장해둬 해당 로컬 경로를 담고 있음
   */
  thumbnailURL: string | StaticImport;
  /** 개최일 */
  openedAt: string;
  /** 키워드 태그 */
  keyTags: string[];
  /**
   * 세부 강의 목록
   * - 해당 연도에서 열린 강의 중 내가 가장 흥미가 가는 주제이거나 실제로 블로그로 작성한 강의만 등록함
   * - 그 중에서 노출 여부를 고정데이터로 설정해둠
   */
  lectures: ConfLectureType[];
  /** 컨퍼런스 웹사이트 */
  conferenceURL?: string;
};

/**
 * 컨퍼런스 별 강의 정보
 * 1. 세부 설명
 *   - 강의는 전부 유튜브에 등록된 강의로 한정함
 * 2. Google I/O 데이터 수집 방법
 *   - Google I/O 사이트 내 강의 영상 페이지를 크롤링하여 데이터 수집
 *       - 파이썬으로 간단한 웹 크롤링 로직을 작성
 *            - Youtube 동영상 ID, 제목, 설명
 *       - Youtube Open API 호출 후 응답데이터 조합
 *            - 영상 등록 날짜
 *            - 영상 링크(임베드용), 썸네일 URL => 이 데이터들은 고정된 형식이 있어 동영상 ID만 삽입하면 바로 동작 가능!!
 */
export type ConfLectureType = {
  /**
   * 강의 ID
   * - 형식: ch_{연도}_{컨퍼런스명(회사명)}_{index(등록한 순서대로 1부터 오름차순)}
   */
  id: string;
  /**
   * Youtube 동영상 ID
   * - 나중에 사용할 일이 있을 수 있어서 일단 추가해둠
   */
  videoId?: string;
  /** 강의 제목 */
  title: string;
  /** 강의 설명 */
  description: string;
  /** Youtube 동영상 썸네일 URL */
  thumbnailURL: string;
  /** Youtube 동영상 링크(임베드용) */
  youtubeLink: string;
  /**
   * 영상 등록날짜
   * - Youtube API를 통해 수집된 데이터
   */
  createdAt: string;
  /** 키워드 태그 */
  keyTags?: string[];
  /**
   * 영상 내 발표자
   * - Google I/O 상세 페이지에 강의 발표자에 대한 정보가 추가되어 있는데 내가 개발할 상세 페이지에서 이 정보까지 보여주기는 어려울 듯...
   *     -> 추가하면 UI가 너무 지저분해질 것 같아서
   * - 언젠가 쓸일이 있을지도 모르겠어서 일단 남겨둠...
   */
  presenter?: string[];
  /**
   * 페이지 이동 경로
   */
  href: string;
  /** 컨퍼런스 ID(연도별 ID) */
  conferenceId: string;
  /** 화면 노출 여부 */
  visible: boolean;
  /** 강의 실제 사이트 */
  originalLectureURL?: string;
  /** 유튜브 접속 링크 */
  youtubeAccessURL?: string;
};

/**
 * 컨퍼런스 데이터(Object형)
 */
export type ConferenceObjDatasType = {
  [key in NavigationConferenceLogCategoryType]: ConferenceDataType;
};
