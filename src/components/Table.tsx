import React, { CSSProperties, ForwardedRef, forwardRef } from "react";
import { styled } from "styled-components";

import { DefaultProps } from "~utils/type.utils";

type TableProps = DefaultProps & { maxHeight?: CSSProperties["maxHeight"] };

/**
 * StyledTable
 * @component
 */
const StyledTable = styled.div<TableProps>`
  border: 1px solid var(--bg-color);
  border-radius: 4px;
  box-shadow: 0 0 2px -1px var(--bg-text-color) inset;
  display: inline-block;
  min-height: 6em;
  min-width: 2em;
  overflow: hidden auto;
  padding: 0em;
  position: relative;
`;

/**
 * Table
 * @component
 * @description
 * Used for Tables, must be used with TableRow and TableRowItem
 * @see See src/components/TableRow
 * @see See src/components/TableRowItem
 */
function Table(props: TableProps, ref?: ForwardedRef<HTMLDivElement>) {
  const { children, maxHeight = "20em" } = props;

  return (
    <StyledTable ref={ref} style={{ maxHeight }}>
      {children}
    </StyledTable>
  );
}

export default forwardRef(Table);
