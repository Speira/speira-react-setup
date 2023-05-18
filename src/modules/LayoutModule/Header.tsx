import Flex from "~components/Flex";
import { DefaultProps } from "~utils/types";

import CSSLayout from "./CSSLayout";

/**
 * Header
 * @module LayoutModule
 * @description
 * The header of the layout
 */
function Header(props: DefaultProps) {
  const { children } = props;
  return (
    <Flex as="header" cssProp={CSSLayout.header}>
      <Flex cssProp={CSSLayout.headerTop}>
        <Flex>Brand</Flex>
        <Flex as="nav" cssProp={CSSLayout.headerNav}>
          Nav
        </Flex>
        <Flex>Utils</Flex>
      </Flex>
      {children && <Flex>{children}</Flex>}
    </Flex>
  );
}

export default Header;
