import { CSSProperties } from "react";

import { Size } from "./enum.utils";

/* ****************************************************************** */

/**
 * devices
 * @description
 * All the devices sizes
 * @example
 * "@media ${devices.sm}{}"
 */
export const devices: Record<Size, string> = {
  xs: "@media (min-width: 480px)",
  sm: "@media (min-width: 600px)",
  md: "@media (min-width: 768px)",
  lg: "@media (min-width: 1024px)",
  xl: "@media (min-width: 1366px)",
};

/* ****************************************************************** */

type SizedCSSProperties = Partial<Record<Size, CSSProperties>>;
export type SizeableCSSProp = CSSProperties & SizedCSSProperties;
export type CSSPropAdapted = Record<string, SizeableCSSProp>;

/* ****************************************************************** */

export const basicsStyles: Record<string, CSSProperties> = {
  flexCenter: {
    display: "flex",
    placeContent: "center center",
  },
  flexSpaceAround: {
    display: "flex",
    placeContent: "center space-around",
  },
};
