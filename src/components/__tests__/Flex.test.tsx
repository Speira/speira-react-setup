import Flex from "~components/Flex";
import { render, screen } from "~utils/test.utils";

test("Flex", () => {
  const { rerender } = render(<Flex testId="Test Flex">Test Flex</Flex>);
  const flex = screen.getByTestId("Test Flex");

  expect(flex).toBeInTheDocument();
  expect(flex).not.toHaveStyleRule("width", "10em");
  expect(flex).toHaveStyleRule("display", "flex");

  rerender(<Flex cssProp={{ width: "10em" }}>Test Flex</Flex>);
  expect(flex).toHaveStyleRule("width", "10em");

  rerender(
    <Flex cssProp={{ width: "10em", md: { width: "20em" } }}>Test Flex</Flex>
  );
  expect(flex).toHaveStyleRule("width", "10em");
  expect(flex).toHaveStyleRule("width", "20em");
});
