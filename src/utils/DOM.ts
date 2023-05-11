import { css } from "styled-components";

import { STATUS } from "./enums";

/**
 * enClassname()
 *
 * @description
 * Adapt props to be placed in the className of an Component
 *
 *
 */
export function enClassname(props: string[], className?: string) {
  const base = className || "";
  return [base]
    .concat(props.map((value) => `.${value}`))
    .join(" ")
    .trim();
}

// ******************************************************************

export function getStatusStyle(status: STATUS) {
  return {
    background: css`
      --bg-color: var(--color-info);
      --bg-text-color: var(--color-light);
      background-color: var(--color-info);
    `,
  };
}
