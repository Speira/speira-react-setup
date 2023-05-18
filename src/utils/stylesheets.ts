import { CSSProperties } from "react";

import { Size } from "./enums";
import { ValueOf } from "./types";

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

type ResponsiveCSSKeys = keyof CSSProperties;

type ResponsiveCSSObject = {
  value: ValueOf<CSSProperties>;
  sm?: ValueOf<CSSProperties>;
  md?: ValueOf<CSSProperties>;
  lg?: ValueOf<CSSProperties>;
  xl?: ValueOf<CSSProperties>;
};

/**
 * @note
 * Do not forget the mandatory "value" key
 * @example
 * {
 *   width: {
 *     value: "12em"
 *   }
 * }
 */
export type ResponsiveStyles = Partial<
  Record<ResponsiveCSSKeys, ResponsiveCSSObject>
>;

/**
 * objectToCSS
 * @description
 * Take a record to turn it into a CSS property
 * @example
 * const test  = {
 *   width: {value: "15em", xl:"25em"},
 *   height: {value "2em", md:"3em"},
 * }
 * # objectToCSS(test, "md") = "height: 2em;"
 * # objectToCSS(test, "value") = "width: 15em; height: 2em;"
 */
export function objectToCSS(
  responsiveEntity: ResponsiveStyles,
  size: keyof ResponsiveCSSObject
) {
  const style = Object.entries(responsiveEntity)
    .reduce(
      (acc, [key, responsiveCSS]) =>
        responsiveCSS[size]
          ? acc.concat(`${key}: ${responsiveCSS[size] as string}; `)
          : acc,
      ""
    )
    .trim();
  return style;
}
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
