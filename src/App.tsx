import React from "react";

import Button from "~components/Button";
import Card from "~components/Card";
import Input from "~components/Input";
import Contexts from "~contexts";

import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <Contexts>
      <GlobalStyle />
      <Button onClick={() => null}>Button</Button>
      <Card />
      <Input onChange={() => null} />
    </Contexts>
  );
}

export default App;
