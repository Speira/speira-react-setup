import { styled } from "styled-components";

import { render, screen } from "~utils/test.utils";
import * as themeUtils from "~utils/theme.utils";

test("ThemeContext", () => {
  const defaultTheme = themeUtils.getDefaultTheme();
  jest.spyOn(themeUtils, "initTheme").mockReturnValue(defaultTheme);

  const StyledDiv = styled.div.attrs(({ theme }) => ({
    style: {
      backgroundColor: theme.colors.primary,
      color: theme.colors.dark,
    },
  }))`
    height: 10em;
    width: 10em;
  `;

  render(<StyledDiv data-testid="style">Theme</StyledDiv>);
  const styledDiv = screen.getByTestId("style");

  expect(styledDiv).toHaveStyle(
    `background-color: ${defaultTheme.colors.primary}`
  );
  expect(styledDiv).not.toHaveStyle(
    `background-color: ${defaultTheme.colors.secondary}`
  );
});
