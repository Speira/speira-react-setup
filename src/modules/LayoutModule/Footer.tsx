import Flex from "~components/Flex";
import { DefaultProps } from "~utils/type.utils";

import layoutCSS from "./layout.css";

/**
 * Footer
 * @module LayoutModule
 * @description
 * The footer of the App
 */
function Footer(props: DefaultProps) {
  const { children } = props;
  return (
    <Flex as="footer" cssProp={layoutCSS.footer}>
      {children}
    </Flex>
  );
}

export default Footer;
