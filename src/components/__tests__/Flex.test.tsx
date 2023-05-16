import Flex from "~components/Flex";
import { render, screen } from "~utils/testUtils";

test("Flex", () => {
  const { rerender } = render(<Flex testId="Test Flex">Test Flex</Flex>);
  const flex = screen.getByTestId("Test Flex");

  expect(flex).toBeInTheDocument();
});
