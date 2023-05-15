import { objectToCSS } from "~utils/stylesheets";

test("objectToCSS", () => {
  const params = {
    width: {
      value: "10em",
      md: "40em",
      xl: "60em",
    },
    gridTemplateColumns: {
      value: "repeat(1fr, 2)",
      lg: "repeat(40em, 2)",
      xl: "repeat(60em, 2)",
    },
  };
  const styleValue = "width: 10em; gridTemplateColumns: repeat(1fr, 2);";
  const styleMD = "width: 40em;";
  const styleXL = "width: 60em; gridTemplateColumns: repeat(60em, 2);";

  const resultValue = objectToCSS(params, "value");
  expect(resultValue).toEqual(expect.arrayContaining([styleValue]));
  expect(resultValue).not.toEqual(expect.arrayContaining([styleMD]));

  const resultMD = objectToCSS(params, "md");
  expect(resultMD).toEqual(expect.arrayContaining([styleMD]));
  expect(resultMD).not.toEqual(expect.arrayContaining([styleValue]));

  const resultXL = objectToCSS(params, "xl");
  expect(resultXL).toEqual(expect.arrayContaining([styleXL]));
  expect(resultXL).not.toEqual(expect.arrayContaining([styleMD]));
});
