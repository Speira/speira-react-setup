import { css as c, styled } from "styled-components";

import { devices, objectToCSS, ResponsiveStyles } from "~utils/stylesheets";
import { DefaultProps } from "~utils/types";

type FlexType = DefaultProps & {
  as?: keyof typeof styled;
  css?: ResponsiveStyles;
};

type StyledFlexType = Pick<FlexType, "as"> &
  Record<"base" | "sm" | "md" | "lg" | "xl", string>;

/**
 * @styled-components
 * @example
 * const test = {
 *    width: {value: "15em", md:"20em", xl:"35em"},
 *    height: {value: "5em", xl: "20em"}
 * };
 *
 * # return (<StyledFlex css={test} />) will give the following css:
 *   width: 15em;
 *   height: 5em;
 *   media (min-width: 600px){}
 *   media (min-width: 768px){
 *     width: 20em;
 *   }
 *   media (min-width: 1024px){}
 *   media (min-width: 1200px){
 *     width: 35em;
 *     height: 20em;
 *   }
 * */
const StyledFlex = styled.div<StyledFlexType>`
  display: flex;
  ${({ base }) => base}
  @media ${devices.sm} {
    ${({ sm }) =>
      c`
        ${sm}
      `}
  }
  @media ${devices.md} {
    ${({ md }) =>
      c`
        ${md}
      `}
  }
  @media ${devices.lg} {
    ${({ lg }) =>
      c`
        ${lg}
      `}
  }
  @media ${devices.xl} {
    ${({ xl }) =>
      c`
        ${xl}
      `}
  }
`;

/**
 * Flex
 * @component
 * @description
 * Simple and fast implementation of a Flexible component
 * @example
 *   <Flex
 *      as="section"
 *      css={{
 *        fontSize: { value: "2em" },
 *        height: { value: "3em", sm:"4em" },
 *        width: { value: "40px", lg: "50px" },
 *      }
 *   />
 */
function Flex(props: FlexType) {
  const { as = "div", children, className, css, testId } = props;

  const cssResult = !css ? {} : css;

  const base = objectToCSS(cssResult, "value");
  const sm = objectToCSS(cssResult, "sm");
  const md = objectToCSS(cssResult, "md");
  const lg = objectToCSS(cssResult, "lg");
  const xl = objectToCSS(cssResult, "xl");

  return (
    <StyledFlex
      data-testid={testId}
      as={as}
      base={base}
      sm={sm}
      md={md}
      lg={lg}
      xl={xl}
      className={className}
    >
      {children}
    </StyledFlex>
  );
}

export default Flex;
