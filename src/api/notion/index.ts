import {
  getNotionDBCategory1Table,
  getNotionDBCategory2Table,
  getNotionDBConferenceDataTable,
  getNotionDBConferenceHistoryTable,
  getNotionDBLectureDataTable,
  getNotionDBYoutubeVideoDataTable,
} from "./APIRequestFunctions/database";

const Notion = {
  DataBase: {
    Category1: getNotionDBCategory1Table,
    Category2: getNotionDBCategory2Table,
    ConferenceData: getNotionDBConferenceDataTable,
    ConferenceHistory: getNotionDBConferenceHistoryTable,
    LectureData: getNotionDBLectureDataTable,
    YoutubeVideoData: getNotionDBYoutubeVideoDataTable,
  },
};

export default Notion;
