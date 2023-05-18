import React from "react";
import { styled } from "styled-components";

import useEnsafe from "~hooks/useEnsafe";
import { enClassname } from "~utils/dom.utils";
import { Size } from "~utils/enum.utils";
import { keysToString } from "~utils/object.utils";
import { DefaultProps } from "~utils/type.utils";

type TableRowItemType = DefaultProps & {
  center?: boolean;
  onClick?: () => void;
  isHead?: boolean;
  size?: Size;
};

/**
 * BaseTableRowItem
 * @component
 */
const BaseTableRowItem = styled.div`
  align-items: center;
  box-shadow: -1px 0 4px -2px ${({ theme }) => theme.colors.primary};
  display: flex;
  justify-content: flex-start;
  min-width: 3em;
  overflow-x: auto;
  padding: 4px;
  &.head {
    cursor: pointer;
    font-weight: bold;
    justify-content: center;
  }
  &.center {
    justify-content: center;
  }
  &:first-child {
    border-left: none;
  }
  &.xs {
    width: 6em;
  }
  &.sm {
    width: 12em;
  }
  &.md {
    width: 18em;
  }
  &.lg {
    width: 24em;
  }
  &.xl {
    width: 32em;
  }
`;

/**
 * TableRowItem
 * @component
 * @description
 * A table case
 */
function TableRowItem(props: TableRowItemType) {
  const {
    className,
    onClick,
    isHead = false,
    center = false,
    size = Size.md,
    children,
  } = props;
  const { ensafe } = useEnsafe();

  const classed = enClassname(
    keysToString({ head: isHead, center }).split("".concat(size)),
    className
  );

  const handleClick = ensafe(() => {
    if (onClick) onClick();
  });

  return (
    <BaseTableRowItem className={classed} onClick={handleClick}>
      {children}
    </BaseTableRowItem>
  );
}

export default TableRowItem;
