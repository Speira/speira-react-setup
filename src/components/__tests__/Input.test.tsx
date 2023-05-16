import { cleanup, fireEvent, render, screen } from "@testing-library/react";

import Input from "~components/Input";
import { withContext } from "~contexts/index";
import { testSpies } from "~utils/testUtils";

test("render Input", () => {
  const onChange = jest.fn();
  render(
    withContext(
      <Input placeholder="input" onChange={onChange} value="Test Input" />
    )
  );
  const input = screen.getByPlaceholderText("input");
  expect(input).toBeInTheDocument();
  expect(onChange).not.toHaveBeenCalled();
  fireEvent.change(input, { value: "new value" });
  expect(onChange).toHaveBeenCalled();
  cleanup();
});
