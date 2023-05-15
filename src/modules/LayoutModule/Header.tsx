import Flex from "~components/Flex";
import { DefaultProps } from "~utils/types";

import layoutCSS from "./layoutCSS";

/**
 * Header
 * @module LayoutModule
 * @description
 * The header of the layout
 */
function Header(props: DefaultProps) {
  const { children } = props;
  return (
    <Flex as="head" css={layoutCSS.header}>
      <Flex css={layoutCSS.headerTop}>
        <Flex>Brand</Flex>
        <Flex as="nav" css={layoutCSS.headerNav}>
          Nav
        </Flex>
        <Flex>Utils</Flex>
      </Flex>
      {children && <Flex>{children}</Flex>}
    </Flex>
  );
}

export default Header;
