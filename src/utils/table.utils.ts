import { Size, Status } from "./enum.utils";

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
