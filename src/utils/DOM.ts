import { RefObject } from "react";

import { checkIsKeyof } from "./objects";

// ******************************************************************

/**
 * enClassname
 * @description
 * Adapt props to be placed in the className of an Component
 */
export function enClassname(props: string[], className?: string) {
  const base = className || "";
  return [base]
    .concat(props.map((value) => `.${value}`))
    .join(" ")
    .trim();
}

// ******************************************************************

/**
 * checkIsRef
 * @description
 * Check if it is a ref
 */
export function checkIsRef(
  ref: HTMLElement | RefObject<HTMLElement>
): ref is RefObject<HTMLElement> {
  return "current" in ref;
}

// ******************************************************************

export function displayValue(item: object, key: string) {
  if (checkIsKeyof(item, key)) {
    const value = item[key];
    if (["string", "number"].includes(typeof value)) {
      return value;
    }
    if (typeof value === "boolean") return value ? "1" : "0";
  }
  return "";
}
