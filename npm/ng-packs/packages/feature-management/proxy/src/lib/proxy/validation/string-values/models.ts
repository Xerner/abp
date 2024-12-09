
export interface IStringValueType {
  name?: string;
  item: object;
  properties: Record<string, object>;
  validator: IValueValidator;
}

export interface ISelectionStringValueType {
  itemSource: ISelectionStringValueItemSource;
}

export interface ISelectionStringValueItemSource {
  items: ISelectionStringValueType[];
}

export interface ISelectionStringValueItemSource extends IStringValueType {
  itemSource: ISelectionStringValueItemSource[];
}

export interface IValueValidator {
  name?: string;
  item: object;
  properties: Record<string, object>;
}
