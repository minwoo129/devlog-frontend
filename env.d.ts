namespace NodeJS {
  interface ProcessEnv {
    // 기본 환경 변수
    /**
     * 서버환경
     * - development: 개발
     * - public: 운영
     */
    NEXT_PUBLIC_SERVER_ENVRIOMENT: string;
    /**
     * Github API 토큰
     * - 1년마다 갱신 필요
     * - 다음 갱신시기: 2025년 10월 경
     */
    NEXT_PUBLIC_GITHUB_AUTH_TOKEN: string;
    /**
     * 노션 API 키
     */
    NEXT_PUBLIC_NOTION_API_KEY: string;
    // ======================== 노션 데이터베이스 ID ========================
    /**
     * ==================== 노션 데이터베이스 ID ====================
     * 1. DB명: Category1
     * 2. DB설명: 네비게이션에 보이는 최상위 카테고리 데이터(devlog, conferencelog) 저장
     * 3. DB간 관계
     *     - Category1: Category2 = 1: N
     * 4. 키 정보: 실행환경에 따라서 API 키가 자동으로 바뀌게 됨(연결되는 DB가 바뀐다는 의미!!!)
     */
    NEXT_PUBLIC_NOTION_DATABASE_ID_CATEGORY1: string;
    /**
     * ==================== 노션 데이터베이스 ID ====================
     * 1. DB명: Category2
     * 2. DB설명: Category1에 속하는 하위 카테고리 데이터(googleio, react, toss-slash, firebase, react-native) 저장
     * 3. DB간 관계
     *     - Category2: Category1 = N: 1
     *     - Category2: ConferenceData = 1: N
     * 3. 키 정보: 실행환경에 따라서 API 키가 자동으로 바뀌게 됨(연결되는 DB가 바뀐다는 의미!!!)
     */
    NEXT_PUBLIC_NOTION_DATABASE_ID_CATEGORY2: string;
    /**
     * ==================== 노션 데이터베이스 ID ====================
     * 1. DB명: ConferenceData
     * 2. DB설명: 컨퍼런스 데이터(구글IO, 토스 SLASH 등) 저장
     * 3. DB간 관계
     *     - ConferenceData: Category2 = N: 1
     *     - ConferenceData: ConferenceHistory = 1: N
     * 4. 키 정보: 실행환경에 따라서 API 키가 자동으로 바뀌게 됨(연결되는 DB가 바뀐다는 의미!!!)
     */
    NEXT_PUBLIC_NOTION_DATABASE_ID_CONFERENCEDATA: string;
    /**
     * ==================== 노션 데이터베이스 ID ====================
     * 1. DB명: ConferenceHistory
     * 2. DB설명: 컨퍼런스 연도별 데이터 저장
     * 3. DB간 관계
     *     - ConferenceHistory: ConferenceData = N: 1
     * 4. 키 정보: 실행환경에 따라서 API 키가 자동으로 바뀌게 됨(연결되는 DB가 바뀐다는 의미!!!)
     */
    NEXT_PUBLIC_NOTION_DATABASE_ID_CONFERENCEHISTORY: string;
    /**
     * ==================== 노션 데이터베이스 ID ====================
     * 1. DB명: LectureData
     * 2. DB설명: 컨퍼런스별 강의 데이터 저장
     * 3. DB간 관계
     *     - LectureData: ConferenceData = N: 1(conferenceType)
     *     - LectureData: ConferenceHistory = N: 1(conferenceId)
     * 4. 키 정보: 실행환경에 따라서 API 키가 자동으로 바뀌게 됨(연결되는 DB가 바뀐다는 의미!!!)
     */
    NEXT_PUBLIC_NOTION_DATABASE_ID_LECTUREDATA: string;
    /**
     * ==================== 노션 데이터베이스 ID ====================
     * 1. DB명: YoutubeVideoData
     * 2. DB설명: 유튜브 동영상 데이터 저장(강의마다 연결된 유튜브 동영상 데이터)
     * 3. 키 정보: 실행환경에 따라서 API 키가 자동으로 바뀌게 됨(연결되는 DB가 바뀐다는 의미!!!)
     */
    NEXT_PUBLIC_NOTION_DATABASE_ID_YOUTUBEVIDEODATA: string;

    // ========================== Firebase API Secure Data ==========================
    /**
     * ========================== Firebase API Secure Data ==========================
     * 1. Firebase API 연동시 사용하게 될 보안정보
     * 2. 연결 데이터(Firebase): apiKey
     */
    NEXT_PUBLIC_FIREBASE_APIKEY: string;
    /**
     * ========================== Firebase API Secure Data ==========================
     * 1. Firebase API 연동시 사용하게 될 보안정보
     * 2. 연결 데이터(Firebase): authDomain
     */
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: string;
    /**
     * ========================== Firebase API Secure Data ==========================
     * 1. Firebase API 연동시 사용하게 될 보안정보
     * 2. 연결 데이터(Firebase): projectId
     */
    NEXT_PUBLIC_FIREBASE_PROJECTID: string;
    /**
     * ========================== Firebase API Secure Data ==========================
     * 1. Firebase API 연동시 사용하게 될 보안정보
     * 2. 연결 데이터(Firebase): storageBucket
     */
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: string;
    /**
     * ========================== Firebase API Secure Data ==========================
     * 1. Firebase API 연동시 사용하게 될 보안정보
     * 2. 연결 데이터(Firebase): messagingSenderId
     */
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: string;
    /**
     * ========================== Firebase API Secure Data ==========================
     * 1. Firebase API 연동시 사용하게 될 보안정보
     * 2. 연결 데이터(Firebase): appId
     */
    NEXT_PUBLIC_FIREBASE_APPID: string;
    /**
     * ========================== Firebase API Secure Data ==========================
     * 1. Firebase API 연동시 사용하게 될 보안정보
     * 2. 연결 데이터(Firebase): measurementId
     */
    NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID: string;
  }
}
