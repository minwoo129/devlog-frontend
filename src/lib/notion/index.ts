import {
  getNotionDBCategory1Table,
  getNotionDBCategory2Table,
  getNotionDBConferenceDataTable,
  getNotionDBConferenceHistoryTable,
  getNotionDBLectureDataTable,
  getNotionDBMenuCategoryTable,
  getNotionDBYoutubeVideoDataTable,
} from "./API/database";

const Notion = {
  DataBase: {
    Category1: getNotionDBCategory1Table,
    Category2: getNotionDBCategory2Table,
    MenuCategory: getNotionDBMenuCategoryTable,
    ConferenceData: getNotionDBConferenceDataTable,
    ConferenceHistory: getNotionDBConferenceHistoryTable,
    LectureData: getNotionDBLectureDataTable,
    YoutubeVideoData: getNotionDBYoutubeVideoDataTable,
  },
};

export default Notion;
