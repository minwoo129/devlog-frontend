import {
  Category1,
  Category2,
  ConferenceData,
  ConferenceHistory,
  MenuCategory,
  MenuCategoryNotionOriginal,
  YoutubeVideoData,
} from "../../dataObjects";
import { convertDBData } from "../../functions/convertDatabaseData";
import { extractUpperData } from "../../functions/extractUppperData";
import { requestNotionAPI } from "../request";
import {
  getNotionCategory1DataFuncType,
  getNotionCategory2DataFuncType,
  getNotionConferenceDataFuncType,
  getNotionConferenceHistoryDataFuncType,
  getNotionDBDataSort,
  getNotionLectureDataFuncType,
  getNotionMenuCategoryDataFuncType,
  getNotionYoutubeVideoDataFuncType,
} from "./types";

export const getNotionDBCategory1Table: getNotionCategory1DataFuncType = async (
  args
) => {
  const { sorts = [] } = args;

  const _sorts: getNotionDBDataSort[] = [
    {
      property: "categoryId",
      direction: "ascending",
    },
    ...sorts,
  ];
  try {
    const result = await requestNotionAPI({
      type: "database",
      databaseName: "Category1",
      sorts: _sorts,
    });

    return convertDBData<Category1>({
      result,
      initResult: {
        categoryId: -1,
        href: "",
        key: "",
        title: "",
        visible: false,
      },
    });
  } catch (e) {
    throw e;
  }
};

export const getNotionDBCategory2Table: getNotionCategory2DataFuncType = async (
  args
) => {
  const { sorts = [] } = args;

  const _sorts: getNotionDBDataSort[] = [
    {
      property: "categoryId",
      direction: "ascending",
    },
    ...sorts,
  ];
  try {
    const result = await requestNotionAPI({
      type: "database",
      databaseName: "Category2",
      sorts: _sorts,
    });
    return convertDBData<Category2>({
      result,
      initResult: {
        categoryId: -1,
        key: "",
        title: "",
        description: "",
        href: "",
        upperCategoryId: -1,
        visible: false,
      },
    });
  } catch (e) {
    throw e;
  }
};

export const getNotionDBMenuCategoryTable: getNotionMenuCategoryDataFuncType =
  async (args) => {
    const { sorts = [], upperCategoryId, upperCategoryKey } = args;

    const _sorts: getNotionDBDataSort[] = [
      {
        property: "categoryId",
        direction: "ascending",
      },
      ...sorts,
    ];

    try {
      const result = await requestNotionAPI({
        type: "database",
        databaseName: "MenuCategory",
        sorts: _sorts,
      });

      const results = convertDBData<MenuCategoryNotionOriginal>({
        result,
        initResult: {
          categoryId: -1,
          key: "",
          title: "",
          description: "",
          href: "",
          upperCategoryId: null,
          visible: false,
        },
      });
      let convertedDatas = extractUpperData<
        MenuCategoryNotionOriginal,
        MenuCategory
      >({
        primaryKey: "categoryId",
        foreignKey: "upperCategoryId",
        key_삽입_데이터: "upperCategory",
        originalDatas: results,
        defaultConvertedData: {
          categoryId: -1,
          key: "",
          title: "",
          description: "",
          href: "",
          upperCategoryId: null,
          visible: false,
          upperCategory: null,
        },
      });

      if (upperCategoryId) {
        convertedDatas = convertedDatas.filter(
          (data) => data.upperCategoryId === upperCategoryId
        );
        return convertedDatas;
      }
      if (upperCategoryKey) {
        const upperCategory = convertedDatas.find(
          (item) => item.key === upperCategoryKey
        );
        if (upperCategory) {
          convertedDatas = convertedDatas.filter(
            (data) => data.upperCategoryId === upperCategory.categoryId
          );
        }
        return convertedDatas;
      }

      return convertedDatas;
    } catch (e) {
      throw e;
    }
  };

export const getNotionDBConferenceDataTable: getNotionConferenceDataFuncType =
  async (args) => {
    const { sorts = [] } = args;

    const _sorts: getNotionDBDataSort[] = [
      {
        property: "conferenceId",
        direction: "ascending",
      },
      ...sorts,
    ];
    try {
      const result = await requestNotionAPI({
        type: "database",
        databaseName: "ConferenceData",
        sorts: _sorts,
      });
      return convertDBData<ConferenceData>({
        result,
        initResult: {
          conferenceId: -1,
          key: "",
          title: "",
          description: "",
          href: "",
          publisher: "",
          introduceIcon: "none",
          upperCategoryId: -1,
          visible: false,
        },
      });
    } catch (e) {
      throw e;
    }
  };

export const getNotionDBConferenceHistoryTable: getNotionConferenceHistoryDataFuncType =
  async (args) => {
    const { sorts = [] } = args;

    const _sorts: getNotionDBDataSort[] = [
      {
        property: "conferenceId",
        direction: "ascending",
      },
      ...sorts,
    ];

    try {
      const result = await requestNotionAPI({
        type: "database",
        databaseName: "ConferenceHistory",
        sorts: _sorts,
      });
      return convertDBData<ConferenceHistory>({
        result,
        initResult: {
          conferenceId: -1,
          key: "",
          title: "",
          description: "",
          openedAt: "",
          keyTags: [],
          conferenceURL: "",
          conferenceType: "",
          visible: false,
          upperConferenceId: -1,
        },
      });
    } catch (e) {
      throw e;
    }
  };

export const getNotionDBLectureDataTable: getNotionLectureDataFuncType = async (
  args
) => {
  const { sorts = [] } = args;

  const _sorts: getNotionDBDataSort[] = [
    {
      property: "lectureId",
      direction: "ascending",
    },
    ...sorts,
  ];
  try {
    const result = await requestNotionAPI({
      type: "database",
      databaseName: "LectureData",
      sorts: _sorts,
    });
    return convertDBData({
      result,
      initResult: {
        lectureId: -1,
        key: "",
        title: "",
        description: "",
        conferenceId: -1,
        upperConferenceId: -1,
        originalLectureURL: "",
        createdAt: "",
        videoId: "",
        href: "",
        keyTags: [],
        visible: false,
      },
    });
  } catch (e) {
    throw e;
  }
};

export const getNotionDBYoutubeVideoDataTable: getNotionYoutubeVideoDataFuncType =
  async (args) => {
    const { sorts = [] } = args;

    const _sorts: getNotionDBDataSort[] = [
      {
        property: "id",
        direction: "ascending",
      },
      ...sorts,
    ];

    try {
      const result = await requestNotionAPI({
        type: "database",
        databaseName: "YoutubeVideoData",
        sorts: _sorts,
      });
      return convertDBData<YoutubeVideoData>({
        result,
        initResult: {
          id: -1,
          youtubeVideoId: "",
          title: "",
          description: "",
          thumbnailURL: "",
          embedURL: "",
          publishedAt: "",
          accessURL: "",
          videoType: "uploaded",
          visible: false,
        },
      });
    } catch (e) {
      throw e;
    }
  };
