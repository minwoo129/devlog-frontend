export interface ExtractUpperDataArgs<T, C> {
  primaryKey: keyof T;
  foreignKey: keyof T;
  originalDatas: T[];
  key_삽입_데이터: keyof C;
  defaultConvertedData: C;
}
