import { checkIsKeyof, displayValue, keysToString } from "~utils/object.utils";

test("keysToString", () => {
  const param = { key1: "test", key2: false, key3: true };
  const expected = "key1 key3";
  const result = keysToString(param);
  expect(result).toEqual(expected);
});

test("checkIsKeyof", () => {
  const params = { key1: "test1" };
  expect(checkIsKeyof(params, "key1")).toBeTruthy();
  expect(checkIsKeyof(params, "key2")).toBeFalsy();
});

test("displayValue", () => {
  const paramString = { key1: "test" };
  const paramNumber = { key1: 55 };
  const paramBoolean = { key1: "Yes" };
  expect(displayValue(paramString, "key1")).toEqual("test");
  expect(displayValue(paramNumber, "key1")).toEqual(55);
  expect(displayValue(paramBoolean, "key1")).toEqual("Yes");
});
