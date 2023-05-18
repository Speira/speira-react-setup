import {} from "styled-components/cssprop";

import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      quaternary: string;
      light: string;
      dark: string;
      info: string;
      success: string;
      warning: string;
      danger: string;
      light_info: string;
      light_warning: string;
      light_success: string;
      light_danger: string;
    };
    radius: string;

    boxShadowize: {
      low: (color: string) => string;
      hight: (color: string) => string;
    };
  }
}

declare module "react" {
  interface DomAttributes<T> {
    css?: CSSProp;
  }
}
