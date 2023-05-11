import { AnyObject } from "./types";

// **************************************************************************

type KeysToLitteral = {
  prefix?: string;
  suffix?: string;
  join?: string;
};

/**
 * keysToLitterals
 *
 * @description
 *  Transform an array of object to a string.
 *  Only the non null keys are returned
 *
 */
export function keysToString(obj: AnyObject, options?: KeysToLitteral) {
  return Object.keys(obj)
    .reduce(
      (acc, cur) =>
        obj[cur]
          ? acc + ` ${options?.prefix || ""}${cur}${options?.suffix || ""}`
          : acc,
      ""
    )
    .trim();
}

// **************************************************************************

/**
 * checkIsKeyof
 * @typeGard
 *
 * @description
 * Verify if a key is in an object for typescript
 *
 *
 */
export function checkIsKeyof<T>(obj: T, key: PropertyKey): key is keyof T {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

// **************************************************************************
