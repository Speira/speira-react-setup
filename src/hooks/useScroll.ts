import React, { RefObject } from "react";

type ScrollType = {
  ref?: RefObject<HTMLElement> | null;
};

/**
 * useScroll
 * @hook
 * @description
 * Event handler on scroll
 */
function useScroll(params: ScrollType) {
  const { ref } = params;
  const [scrollTop, setScrollTop] = React.useState(0);

  const onScroll = (e: Event) => {
    const target = e.currentTarget as HTMLElement;
    if (!target) return;
    const scrollValue = target.scrollTop;
    setScrollTop(scrollValue);
  };

  React.useEffect(() => {
    let current: HTMLElement | null;
    if (ref === null) return;
    if (ref === undefined) current = document.body;
    else current = ref.current;
    if (!current) return;
    current.addEventListener("scroll", onScroll);
    return () => {
      if (current) current.removeEventListener("scroll", onScroll);
    };
  }, [ref]);

  return { scrollTop };
}
export default useScroll;
