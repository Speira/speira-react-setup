import { ReactNode } from "react";

export type AnyObject<T = unknown> = { [key: string]: T };
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type ValueOf<T> = T[keyof T];
export type FunctionType<T, P> = (...argv: T[]) => P;
export type DefaultProps = {
  testId?: string;
  children?: ReactNode;
  className?: string;
};
