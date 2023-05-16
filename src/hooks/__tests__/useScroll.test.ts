import { RefObject } from "react";

import useScroll from "~hooks/useScroll";
import { fireEvent, renderHook } from "~utils/testUtils";

test("useScroll", () => {
  const htmlElement = document.createElement("div");

  const ref: RefObject<HTMLDivElement> = {
    current: htmlElement,
  };

  const { result } = renderHook(() => useScroll({ ref }));
  expect(result.current.scrollTop).toEqual(0);
  fireEvent.scroll(ref.current as Element, {
    target: { scrollTop: 700 },
  });
  expect(result.current.scrollTop).toEqual(700);
});
