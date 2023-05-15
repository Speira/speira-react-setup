import React from "react";
import { render, screen } from "@testing-library/react";

import App from "./App";

test("renders brand", () => {
  render(<App />);
  const linkElement = screen.getByText(/Brand/i);
  expect(linkElement).toBeInTheDocument();
});
