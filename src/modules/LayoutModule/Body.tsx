import Flex from "~components/Flex";
import { DefaultProps } from "~utils/type.utils";

import layoutCSS from "./layout.css";

/**
 * Body
 * @module LayoutModule
 * @description
 * The whole page of the App
 */
function Body(props: DefaultProps) {
  const { children } = props;
  return <Flex cssProp={layoutCSS.container}>{children}</Flex>;
}

export default Body;
