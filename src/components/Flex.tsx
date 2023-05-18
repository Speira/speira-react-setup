import React from "react";
import styled from "styled-components/macro";

import { devices, SizeableCSSProp } from "~utils/css.utils";
import { DefaultProps } from "~utils/type.utils";

type FlexType = DefaultProps & {
  as?: keyof typeof styled;
  cssProp?: SizeableCSSProp;
};

type StyledFlexType = Pick<FlexType, "as">;

/** @styled-components */
const StyledFlex = styled.div<StyledFlexType>`
  display: flex;
`;

/**
 * Flex
 * @component
 * @description
 * Simple and fast implementation of a Flexible component
 * @example
 *   <Flex
 *      as="section"
 *      cssProp={{
 *        fontSize: "2em",
 *        height: "3em",,
 *        width: "40px"
 *        lg: {
 *          // lg designates the behavior when the screen is large
 *          width: "60px",
 *          fontSize: "2.5em"
 *        }
 *      }
 *   />
 */
function Flex(props: FlexType) {
  const { as, children, className, cssProp, testId } = props;

  const cssResult = !cssProp ? {} : cssProp;

  const { xs, sm, md, lg, xl, ...defaultCSS } = cssResult;

  return (
    <StyledFlex
      data-testid={testId}
      css={{
        ...defaultCSS,
        [devices.xs]: xs,
        [devices.sm]: sm,
        [devices.md]: md,
        [devices.lg]: lg,
        [devices.xl]: xl,
      }}
      as={as}
      className={className}
    >
      {children}
    </StyledFlex>
  );
}

export default Flex;
