import React from "react";
import styled from "styled-components/macro";

import { extractMediaQueries, SizeableCSSProp } from "~utils/css.utils";
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
  const { as, children, className, cssProp, id, testId } = props;
  const cssResult = !cssProp ? {} : cssProp;

  const { xs, sm, md, lg, xl, ...defaultCSS } = cssResult;

  const mediasQueries = extractMediaQueries({ xs, sm, md, lg, xl });

  return (
    <StyledFlex
      id={id}
      data-testid={testId}
      css={{
        ...defaultCSS,
        ...mediasQueries,
      }}
      as={as}
      className={className}
    >
      {children}
    </StyledFlex>
  );
}

export default Flex;
