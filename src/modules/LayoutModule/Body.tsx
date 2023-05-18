import Flex from "~components/Flex";
import { DefaultProps } from "~utils/types";

import CSSLayout from "./CSSLayout";

/**
 * Body
 * @module LayoutModule
 * @description
 * The whole page of the App
 */
function Body(props: DefaultProps) {
  const { children } = props;
  return <Flex cssProp={CSSLayout.container}>{children}</Flex>;
}

export default Body;
