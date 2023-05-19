import { devices, extractMediaQueries } from "~utils/css.utils";
import { Size } from "~utils/enum.utils";

test("devices", () => {
  Object.values(Size).map((size) =>
    expect(devices[size]).toEqual(
      expect.stringMatching(/^@media (min-width: \d+px)/)
    )
  );
});

test("extractMediaQueries", () => {
  const exampleCSS = {
    width: "5em",
    sm: {
      cursor: "pointer",
    },
    md: {
      backgroundColor: "#fff",
      color: "#ffa",
    },
    lg: {
      backgroundColor: "#aaa",
      color: "#aab",
      width: "4em",
    },
  };
  const { sm, md, lg } = exampleCSS;
  const result = extractMediaQueries({ sm, md, lg });
  expect(result).toEqual(
    expect.objectContaining({
      [devices.sm]: exampleCSS.sm,
      [devices.md]: exampleCSS.md,
      [devices.lg]: exampleCSS.lg,
    })
  );
});
