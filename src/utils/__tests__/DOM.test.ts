import { enClassname } from "~utils/DOM";

test("enClassname()", () => {
  const properties = ["warning", "rounded", "md"];
  const classname = ".col-md-5 .long";
  const expected = ".col-md-5 .long .warning .rounded .md";
  const result = enClassname(properties, classname);
  expect(result).toEqual(expected);
});
