import React from "react";

import Contexts from "~contexts";
import HomeModule from "~modules/HomeModule";
import LayoutModule from "~modules/LayoutModule";

import AppCSS from "./App.css";

/**
 * App
 * @description
 * Entry point
 */
function App() {
  return (
    <Contexts>
      <AppCSS />
      <LayoutModule>
        <LayoutModule.Header>Header description</LayoutModule.Header>
        <HomeModule />
      </LayoutModule>
      <LayoutModule.Footer>Footer description</LayoutModule.Footer>
    </Contexts>
  );
}

export default App;
