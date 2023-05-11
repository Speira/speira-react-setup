import { DefaultTheme } from "styled-components";

import { checkIsKeyof } from "./objects";

/**
 * getDefaultTheme
 * @description
 * The default style theme, implement DefaultTheme
 * @see src/styled.d.ts for the interface definition
 */
function getDefaultTheme(): DefaultTheme {
  return {
    colors: {
      primary: "#174f69",
      secondary: "#accad8",
      tertiary: "#cfdde3",
      quaternary: "#ecf4f8",
      light: "#ececf8",
      dark: "#302e32",
      info: "#035397",
      success: "#1C7947",
      warning: "#C36A2D",
      danger: "#A9333A",
      light_info: "#cce5fa",
      light_warning: "#fedec8",
      light_success: "#d7e8df",
      light_danger: "#fbc2c5",
    },
    radius: "4px",
    boxShadowize: {
      low: (color: string) => `0px 0px 1px -1px ${color}`,
      hight: (color: string) => `1px 1px 2px -1px ${color}`,
    },
  };
}

enum ThemeKeys {
  defaultTheme = "defaultTheme",
}

/**
 * initThene()
 * @description
 * Init the theme
 *
 */
export function initTheme(nextKey?: ThemeKeys): DefaultTheme {
  const themeStorageID = "themeStorageID";
  const themes = {
    [ThemeKeys.defaultTheme]: getDefaultTheme,
  };
  if (nextKey) {
    const ChoosenTheme = themes[nextKey];
    localStorage.setItem(themeStorageID, nextKey);
    return ChoosenTheme();
  }

  const loadedThemeKey = localStorage.getItem(themeStorageID);
  if (!loadedThemeKey || !checkIsKeyof(themes, loadedThemeKey))
    return getDefaultTheme();

  const ChoosenTheme = themes[loadedThemeKey];
  return ChoosenTheme();
}

export default initTheme();
