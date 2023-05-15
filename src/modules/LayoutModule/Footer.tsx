import Flex from "~components/Flex";
import { DefaultProps } from "~utils/types";

import layoutCSS from "./layoutCSS";

/**
 * Footer
 * @module LayoutModule
 * @description
 * The footer of the App
 */
function Footer(props: DefaultProps) {
  const { children } = props;
  return (
    <Flex as="footer" css={layoutCSS.footer}>
      {children}
    </Flex>
  );
}

export default Footer;
