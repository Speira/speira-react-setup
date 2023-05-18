import { DefaultProps } from "~utils/type.utils";

import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";

type LayoutModuleProps = DefaultProps;

/**
 * LayoutModule
 * @module
 * @description
 * Module for the layout
 */
function LayoutModule({ children }: LayoutModuleProps) {
  return <Body>{children}</Body>;
}

export default LayoutModule;
LayoutModule.Footer = Footer;
LayoutModule.Header = Header;
