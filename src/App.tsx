import React from "react";

import Contexts from "~contexts";
import HomeModule from "~HomeModule";
import LayoutModule from "~LayoutModule";

import GlobalStyle from "./GlobalStyle";

/**
 * App
 * @description
 * Entry point
 */
function App() {
  return (
    <Contexts>
      <GlobalStyle />
      <LayoutModule.Header>Header description</LayoutModule.Header>
      <LayoutModule>
        <HomeModule />
      </LayoutModule>
      <LayoutModule.Footer>Footer description</LayoutModule.Footer>
    </Contexts>
  );
}

export default App;
