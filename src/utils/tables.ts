import { Size, Status } from "./enums";

export type TableActionType<T> = {
  label: string;
  click: (item: T) => void;
  status: Status;
};

export type TableSettingType<T> = {
  key: keyof T & string;
  label: string;
  xSize?: Size;
};
