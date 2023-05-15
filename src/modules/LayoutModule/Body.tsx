import Flex from "~components/Flex";
import { DefaultProps } from "~utils/types";

import layoutCSS from "./layoutCSS";

/**
 * Body
 * @module LayoutModule
 * @description
 * The whole page of the App
 */
function Body(props: DefaultProps) {
  const { children } = props;
  return <Flex css={layoutCSS.container}>{children}</Flex>;
}

export default Body;
