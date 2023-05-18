import { devices } from "~utils/css.utils";
import { Size } from "~utils/enum.utils";

test("devices", () => {
  Object.values(Size).map((size) =>
    expect(devices[size]).toEqual(
      expect.stringMatching(/^@media (min-width: \d+px)/)
    )
  );
});
