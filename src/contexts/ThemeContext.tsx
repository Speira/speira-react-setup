import React from "react";
import {
  DefaultTheme,
  ThemeContext as SCThemeContext,
  ThemeProvider as SCThemeProvider,
} from "styled-components";

import { initTheme } from "~utils/themes";
import { DefaultProps } from "~utils/types";

export type ThemeContextInterface = {
  colors: DefaultTheme["colors"];
  radius: DefaultTheme["radius"];
  boxShadowize: DefaultTheme["boxShadowize"];
  switchToDefault: () => void;
};

/**
 * ThemeProvider
 * @context
 * @description
 * The Theme Manager
 */
function ThemeProvider(props: DefaultProps) {
  const { children } = props;
  const initialTheme = initTheme();
  const [theme, setTheme] = React.useState<DefaultTheme>(initialTheme);

  const value: ThemeContextInterface = React.useMemo(
    () => ({
      colors: theme.colors,
      radius: theme.radius,
      boxShadowize: theme.boxShadowize,
      switchToDefault() {
        const nextTheme = initTheme();
        setTheme(nextTheme);
      },
    }),
    [theme]
  );
  return <SCThemeProvider theme={value}>{children}</SCThemeProvider>;
}

export default ThemeProvider;

export const useTheme = () => {
  const context = React.useContext(SCThemeContext);
  if (!context) throw new Error("ThemeContext must be called in ThemeProvider");
  return context;
};
