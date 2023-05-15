import { styled } from "styled-components";

import { devices, objectToCSS, ResponsiveStyles } from "~utils/stylesheets";
import { DefaultProps } from "~utils/types";

type FlexType = DefaultProps & {
  as?: keyof typeof styled;
  css?: ResponsiveStyles;
};

type StyledFlexType = FlexType & Required<Pick<FlexType, "css">>;

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
  ${({ css }) => objectToCSS(css, "value")}
  @media ${devices.sm} {
    ${({ css }) => objectToCSS(css, "sm")}
  }
  @media ${devices.md} {
    ${({ css }) => objectToCSS(css, "md")}
  }
  @media ${devices.lg} {
    ${({ css }) => objectToCSS(css, "lg")}
  }
  @media ${devices.xl} {
    ${({ css }) => objectToCSS(css, "xl")}
  }
`;

/**
 * Flex
 * @component
 * @description
 * Simple and fast implementation of a FlexBox
 * @example
 *   <Flex
 *      as="section"
 *      css={{
 *        width: {value: '40px', lg: '50px'},
 *        height: {value: '3em', sm:'4em'},
 *        fontSize: {value: '2em'},
 *      }
 *   />
 */
function Flex(props: FlexType) {
  const { as = "div", children, className, css } = props;

  const cssResult = !css ? {} : css;

  return (
    <StyledFlex as={as} className={className} css={cssResult}>
      {children}
    </StyledFlex>
  );
}

export default Flex;
