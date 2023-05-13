import React, { FunctionComponent, ReactElement, ReactNode } from "react";

import Button from "~components/Button";
import Table from "~components/Table";
import TableRow from "~components/TableRow";
import TableRowItem from "~components/TableRowItem";
import useScroll from "~hooks/useScroll";
import { displayValue } from "~utils/DOM";
import { Size } from "~utils/enums";
import { TableActionType, TableSettingType } from "~utils/tables";

type TableContainerProps<T> = {
  actions?: TableActionType<T>[];
  children: (Row: FunctionComponent<{ item: T }>) => ReactElement[];
  display?: (item: T, key: keyof T) => ReactNode;
  settings: TableSettingType<T>[];
  sizes?: { row: Size; actions: Size };
};

/**
 * TableContainer
 * @container
 * @description
 * Container for displaying Table
 */
function TableContainer<T extends object>(props: TableContainerProps<T>) {
  const { actions, children, display = displayValue, sizes, settings } = props;
  const tableRef = React.useRef(null);
  const { scrollTop } = useScroll({ ref: tableRef });
  const isScrolling = scrollTop > 50;
  return (
    <Table ref={tableRef}>
      <TableRow isHead isScrolling={isScrolling}>
        {settings.map(({ label, xSize }) => (
          <TableRowItem size={xSize} isHead center>
            {label}
          </TableRowItem>
        ))}
        {actions && (
          <TableRowItem size={Size.lg} isHead center>
            Actions
          </TableRowItem>
        )}
      </TableRow>
      {children(({ item }) => (
        <TableRow size={sizes?.row}>
          {settings.map(({ key, xSize }) => (
            <TableRowItem size={xSize} center>
              {display(item, key)}
            </TableRowItem>
          ))}
          {actions && (
            <TableRowItem size={sizes?.actions} center>
              {actions.map(({ click, label, status }) => (
                <Button status={status} onClick={() => click(item)}>
                  {label}
                </Button>
              ))}
            </TableRowItem>
          )}
        </TableRow>
      ))}
    </Table>
  );
}

export default TableContainer;
