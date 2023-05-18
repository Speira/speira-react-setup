import React from "react";
import { styled } from "styled-components";

import { enClassname } from "~utils/dom.utils";
import { keysToString } from "~utils/object.utils";
import { DefaultProps } from "~utils/type.utils";

type ImageProps = DefaultProps & {
  width?: string;
  height?: string;
  rounded?: boolean;
};

/**
 * BaseImage
 * @styled-component
 */
const BaseImage = styled.img`
  height: ${({ height }) => height};
  max-height: 100%;
  max-width: 100%;
  width: ${({ width }) => width};
  .rouded {
    border-radius: 100%;
  }
`;

/**
 * Image
 * @component
 */
function Image(props: ImageProps) {
  const { className, rounded = false, height = "auto", width = "auto" } = props;
  const stringProps = keysToString({ rounded }).split(" ");
  const propsClass = enClassname(stringProps, className);
  return <BaseImage className={propsClass} height={height} width={width} />;
}

export default Image;
