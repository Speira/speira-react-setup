import React from "react";

import Button from "~components/Button";
import Card from "~components/Card";
import Input from "~components/Input";
import TableContainer from "~containers/TableContainer";
import Contexts from "~contexts";
import { Size, Status } from "~utils/enums";

import GlobalStyle from "./GlobalStyle";

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
];

type ItemType = (typeof tableContents)[number];

function App() {
  const onDelete = () => {};

  const display = (item: ItemType, key: keyof ItemType) => {
    const value = item[key];
    if ((key = "description")) return value?.slice(0, 20) || "";
    return item[key];
  };
  return (
    <Contexts>
      <GlobalStyle />
      <Button onClick={() => null}>Button</Button>
      <Card />
      <Input onChange={() => null} />
      <TableContainer<ItemType>
        sizes={{ row: Size.md, actions: Size.md }}
        actions={[{ label: "Delete", click: onDelete, status: Status.danger }]}
        display={display}
        settings={[
          { key: "id", label: "ID", xSize: Size.xs },
          { key: "description", label: "Description", xSize: Size.xl },
          { key: "area", label: "Area" },
          { key: "address", label: "Adress", xSize: Size.lg },
        ]}
      >
        {(Row) => tableContents.map((item) => <Row item={item} />)}
      </TableContainer>
    </Contexts>
  );
}

export default App;
