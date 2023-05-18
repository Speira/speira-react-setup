import Flex from "~components/Flex";
import { DefaultProps } from "~utils/type.utils";

import layoutCSS from "./layout.css";

/**
 * Header
 * @module LayoutModule
 * @description
 * The header of the layout
 */
function Header(props: DefaultProps) {
  const { children } = props;
  return (
    <Flex as="header" cssProp={layoutCSS.header}>
      <Flex cssProp={layoutCSS.headerTop}>
        <Flex>Brand</Flex>
        <Flex as="nav" cssProp={layoutCSS.headerNav}>
          Nav
        </Flex>
        <Flex>Utils</Flex>
      </Flex>
      {children && <Flex>{children}</Flex>}
    </Flex>
  );
}

export default Header;
