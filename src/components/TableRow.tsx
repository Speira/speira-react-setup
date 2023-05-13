import React from "react";
import { styled } from "styled-components";

import { enClassname } from "~utils/DOM";
import { Size } from "~utils/enums";
import { keysToString } from "~utils/objects";
import { DefaultProps } from "~utils/types";

type TableRowtype = DefaultProps & {
  isHead?: boolean;
  size?: Size;
  isScrolling?: boolean;
};
type StyledType = Exclude<TableRowtype, "isTableScrolling" | "head">;

/**
 * BaseTableRow
 * @styled-component
 */
const StyledTableRow = styled.div<StyledType>`
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
  display: flex;
  justify-content: center;
  transition: opacity, top,
    background-color 0.4s cubic-bezier(0.22, 0.61, 0.36, 1);
  &:nth-child(odd) {
    background-color: ${({ theme }) => theme.colors.tertiary};
  }
  &.head {
    background-color: transparent;
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
    z-index: 1;
    max-height: 3.5em;
  }
  &.head.scrolling {
    background-color: ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) => theme.boxShadowize.hight(theme.colors.dark)};
    cursor: default;
    opacity: 0.95;
    position: sticky;
    top: o;
  }
  &.xs {
    height: 1.5em;
  }
  &.sm {
    height: 2em;
  }
  &.md {
    height: 3.5em;
  }
  &.lg {
    height: 7em;
  }
  &.xl {
    height: 16em;
  }
`;

/**
 * TableRow
 * @component
 * @description
 * A row in a Table
 */
function TableRow(props: TableRowtype) {
  const {
    children,
    className,
    isHead = false,
    size = Size.md,
    isScrolling = false,
  } = props;

  const classed = enClassname(
    keysToString({ head: isHead, scrolling: isScrolling, size }).split(""),
    className
  );

  return <StyledTableRow className={classed}>{children}</StyledTableRow>;
}

export default TableRow;
