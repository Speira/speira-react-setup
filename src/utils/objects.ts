import { AnyObject } from "./types";

/* ************************************************************************** */

type KeysToLitteral = {
  prefix?: string;
  suffix?: string;
  join?: string;
};

/**
 * keysToString
 * @description
 * Transform Object keys to string
 * @Example
 *  const object = { header: true, blue: true, warning: false };
 *  const result = keysToString(object);
 *  console.log(result); // "header blue"
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

/* ************************************************************************** */

/**
 * checkIsKeyof
 * @typeGard
 * @description
 * Verify if a key is in an object so that typescript associates the keyof attribute
 * @example
 * checkIsKeyof({key: 1}, 'key') // true
 * checkIsKeyof({key: 1}, 'other') // false
 */
export function checkIsKeyof<T = object>(
  obj: T,
  key: PropertyKey
): key is keyof T {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

/* ************************************************************************** */

/**
 * displayValue
 * @description
 * Main display value function for table
 */
export function displayValue(item: object, key: string) {
  if (checkIsKeyof(item, key)) {
    const value = item[key];
    if (["string", "number"].includes(typeof value)) {
      return value;
    }
    if (typeof value === "boolean") return value ? "1" : "0";
  }
  return "";
}
