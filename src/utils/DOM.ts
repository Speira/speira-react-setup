import { RefObject } from "react";

/* ****************************************************************** */

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

/* ****************************************************************** */

/**
 * checkIsRef
 * @typeGuard
 * @description
 */
export function checkIsRef(
  ref: HTMLElement | RefObject<HTMLElement>
): ref is RefObject<HTMLElement> {
  return "current" in ref;
}
