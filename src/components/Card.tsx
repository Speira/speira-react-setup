import React from "react";
import { styled } from "styled-components";

import { DefaultProps } from "~utils/type.utils";

/**
 * StyledCard
 * @styled-component
 */
const StyledCard = styled.div`
  align-items: center;
  border-radius: 2em;
  color: var(--bg-text-color);
  display: flex;
  height: 220px;
  justify-content: center;
  width: 240px;
`;

/**
 * Card
 * @component
 */
function Card(props: DefaultProps) {
  const { children, className } = props;
  return <StyledCard className={className}>{children}</StyledCard>;
}

export default Card;
