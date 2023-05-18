import Flex from "~components/Flex";
import { DefaultProps } from "~utils/types";

import CSSLayout from "./CSSLayout";

/**
 * Footer
 * @module LayoutModule
 * @description
 * The footer of the App
 */
function Footer(props: DefaultProps) {
  const { children } = props;
  return (
    <Flex as="footer" cssProp={CSSLayout.footer}>
      {children}
    </Flex>
  );
}

export default Footer;
