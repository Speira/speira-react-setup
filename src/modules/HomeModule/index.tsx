import React from "react";

import Button from "~components/Button";
import Card from "~components/Card";
import Flex from "~components/Flex";
import Input from "~components/Input";
import TableContainer from "~containers/TableContainer";
import { Size, Status } from "~utils/enum.utils";

import homeCSS from "./home.css";

const tableContents = [
  {
    id: "fakeID",
    description:
      "fakeDescription of the content, we can place a Lorem ipsum here but finally no",
    area: "fakeArea",
    address: "00 stret of a town in a country",
  },
  { id: "fakeID1", description: "fakeDescription1", area: "fakeArea1" },
  { id: "fakeID2", description: "fakeDescription2", area: "fakeArea2" },
  { id: "fakeID3", description: "fakeDescription3", area: "fakeArea3" },
  { id: "fakeID4", description: "fakeDescription4", area: "fakeArea4" },
  { id: "fakeID5", description: "fakeDescription5", area: "fakeArea5" },
  { id: "fakeID6", description: "fakeDescription6", area: "fakeArea6" },
  { id: "fakeID7", description: "fakeDescription7", area: "fakeArea7" },
  { id: "fakeID8", description: "fakeDescription8", area: "fakeArea8" },
];

type ItemType = (typeof tableContents)[number];

/**
 * HomeModule
 * @module HomeModule
 * @description
 * Manage the Homepage
 */
function HomeModule() {
  const onDelete = () => {};
  const see = () => {};

  const display = (item: ItemType, key: keyof ItemType) => {
    const value = item[key];
    if ((key = "description")) return value?.slice(0, 20) || "";
    return item[key];
  };

  return (
    <Flex as="section" cssProp={homeCSS.container}>
      <Button onClick={() => null}>Button</Button>
      <Card />
      <Input onChange={() => null} />
      <TableContainer<ItemType>
        actions={[
          { label: "Delete", click: onDelete, status: Status.warning },
          { label: "See", click: see, status: Status.info },
        ]}
        sizes={{ rowY: Size.md, actionsX: Size.md }}
        keys={[
          { key: "id", label: "ID", xSize: Size.xs },
          { key: "description", label: "Description", xSize: Size.xl },
          { key: "area", label: "Area", xSize: Size.sm },
          { key: "address", label: "Adress", xSize: Size.lg },
        ]}
      >
        {(Row) =>
          tableContents.map((item) => (
            <Row key={item.id} item={item} display={display} />
          ))
        }
      </TableContainer>
    </Flex>
  );
}

export default HomeModule;
