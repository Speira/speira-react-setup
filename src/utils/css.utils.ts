import { CSSProperties } from "react";

import { Size } from "./enum.utils";
import { ValueOf } from "./type.utils";

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

type MediaCSS = Partial<Record<ValueOf<typeof devices>, CSSProperties>>;

/**
 * extractMediaQueries
 * @description
 * extract the media queries props and turn them into CSS props
 */
export function extractMediaQueries(cssProp: SizedCSSProperties): MediaCSS {
  const { xs, sm, md, lg, xl } = cssProp;

  return Object.entries({ xs, sm, md, lg, xl }).reduce(
    (acc, [itemKey, itemCSS]) => {
      if (!itemCSS) return acc;
      return { ...acc, [devices[itemKey as Size]]: itemCSS };
    },
    {}
  );
}

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
