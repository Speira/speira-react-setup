import { cleanup, fireEvent, render, screen } from "@testing-library/react";

import Button from "~components/Button";
import { withContext } from "~contexts";

test("render Button", () => {
  const onClick = jest.fn();
  render(withContext(<Button onClick={onClick}>Test Button</Button>));
  const button = screen.getByText("Test Button");
  expect(button).toBeInTheDocument();
  expect(onClick).not.toHaveBeenCalled();
  fireEvent.click(button);
  expect(onClick).toHaveBeenCalled();
});
