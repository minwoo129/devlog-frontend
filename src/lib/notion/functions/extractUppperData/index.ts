import { ExtractUpperDataArgs } from "./types";

export const extractUpperData = <T, C>(args: ExtractUpperDataArgs<T, C>) => {
  const {
    primaryKey,
    foreignKey,
    originalDatas,
    key_삽입_데이터,
    defaultConvertedData,
  } = args;

  let newDatas: C[] = [];
  let convertedDatasMap = new Map<T[keyof T], C>();

  for (const item of originalDatas) {
    const foreignKeyVal = item[foreignKey];
    if (!foreignKeyVal) {
      const convertedData: C = { ...defaultConvertedData, ...item };
      newDatas.push(convertedData);
      convertedDatasMap.set(item[primaryKey], convertedData);
      continue;
    }
    const cachedData = convertedDatasMap.get(foreignKeyVal);
    if (cachedData) {
      const convertedData: C = {
        ...defaultConvertedData,
        ...item,
        [key_삽입_데이터]: cachedData,
      };
      newDatas.push(convertedData);
      convertedDatasMap.set(item[primaryKey], convertedData);
      continue;
    }
    const filteredData = originalDatas.find(
      (data) => data[primaryKey] === item[foreignKey]
    );
    if (filteredData) {
      const convertedData: C = {
        ...defaultConvertedData,
        ...item,
        [key_삽입_데이터]: filteredData,
      };
      newDatas.push(convertedData);
      convertedDatasMap.set(item[primaryKey], convertedData);
      continue;
    }
  }

  return newDatas;
};
