import { NotionAPIInfoType } from "@/api/notion/types";

const NotionDatabaseID = {
  /**
   * ==================== 노션 데이터베이스 ID ====================
   * 1. DB명: ConferenceHistory
   * 2. DB설명: 네비게이션에 보이는 최상위 카테고리 데이터(devlog, conferencelog) 저장
   * 3. DB간 관계
   *    - Category1: Category2 = 1: N
   * 4. 키 정보: 실행환경에 따라서 API 키가 자동으로 바뀌게 됨(연결되는 DB가 바뀐다는 의미!!!)
   */
  Category1: process.env.NEXT_PUBLIC_NOTION_DATABASE_ID_CATEGORY1,
  /**
   * ==================== 노션 데이터베이스 ID ====================
   * 1. DB명: Category2
   * 2. DB설명: Category1에 속하는 하위 카테고리 데이터(googleio, react, toss-slash, firebase, react-native) 저장
   * 3. DB간 관계
   *     - Category2: Category1 = N: 1
   *     - Category2: ConferenceData = 1: N
   * 4. 키 정보: 실행환경에 따라서 API 키가 자동으로 바뀌게 됨(연결되는 DB가 바뀐다는 의미!!!)
   */
  Category2: process.env.NEXT_PUBLIC_NOTION_DATABASE_ID_CATEGORY2,
  /**
   * ==================== 노션 데이터베이스 ID ====================
   * 1. DB명: ConferenceData
   * 2. DB설명: 컨퍼런스 데이터(구글IO, 토스 SLASH 등) 저장
   * 3. DB간 관계
   *    - ConferenceData: Category2 = N: 1
   *    - ConferenceData: ConferenceHistory = 1: N
   * 4. 키 정보: 실행환경에 따라서 API 키가 자동으로 바뀌게 됨(연결되는 DB가 바뀐다는 의미!!!)
   */
  ConferenceData: process.env.NEXT_PUBLIC_NOTION_DATABASE_ID_CONFERENCEDATA,
  /**
   * ==================== 노션 데이터베이스 ID ====================
   * 1. DB명: ConferenceHistory
   * 2. DB설명: 컨퍼런스 연도별 데이터 저장
   * 3. DB간 관계
   *   - ConferenceHistory: ConferenceData = N: 1
   * 4. 키 정보: 실행환경에 따라서 API 키가 자동으로 바뀌게 됨(연결되는 DB가 바뀐다는 의미!!!)
   */
  ConferenceHistory:
    process.env.NEXT_PUBLIC_NOTION_DATABASE_ID_CONFERENCEHISTORY,
  /**
   * ==================== 노션 데이터베이스 ID ====================
   * 1. DB명: LectureData
   * 2. DB설명: 컨퍼런스별 강의 데이터 저장
   * 3. DB간 관계
   *     - LectureData: ConferenceData = N: 1(conferenceType)
   *     - LectureData: ConferenceHistory = N: 1(conferenceId)
   * 4. 키 정보: 실행환경에 따라서 API 키가 자동으로 바뀌게 됨(연결되는 DB가 바뀐다는 의미!!!)
   */
  LectureData: process.env.NEXT_PUBLIC_NOTION_DATABASE_ID_LECTUREDATA,
  /**
   * ==================== 노션 데이터베이스 ID ====================
   * 1. DB명: YoutubeVideoData
   * 2. DB설명: 유튜브 동영상 데이터 저장(강의마다 연결된 유튜브 동영상 데이터)
   * 3. 키 정보: 실행환경에 따라서 API 키가 자동으로 바뀌게 됨(연결되는 DB가 바뀐다는 의미!!!)
   */
  YoutubeVideoData: process.env.NEXT_PUBLIC_NOTION_DATABASE_ID_YOUTUBEVIDEODATA,
};

export const NotionAPIInfo: NotionAPIInfoType = {
  /** 노션 API 키 */
  APIKey: process.env.NEXT_PUBLIC_NOTION_API_KEY,
  /** 노션 데이터베이스 정보 */
  databases: {
    Category1: {
      name: "Category1",
      databaseId: NotionDatabaseID["Category1"],
      queryObj: null,
    },
    Category2: {
      name: "Category2",
      databaseId: NotionDatabaseID["Category2"],
      queryObj: null,
    },
    ConferenceData: {
      name: "ConferenceData",
      databaseId: NotionDatabaseID["ConferenceData"],
      queryObj: null,
    },
    ConferenceHistory: {
      name: "ConferenceHistory",
      databaseId: NotionDatabaseID["ConferenceHistory"],
      queryObj: null,
    },
    LectureData: {
      name: "LectureData",
      databaseId: NotionDatabaseID["LectureData"],
      queryObj: null,
    },
    YoutubeVideoData: {
      name: "YoutubeVideoData",
      databaseId: NotionDatabaseID["YoutubeVideoData"],
      queryObj: null,
    },
  },
};

export const GithubAPIInfo = {
  /** Github API 키 */
  APIKey: process.env.NEXT_PUBLIC_GITHUB_AUTH_TOKEN,
};
