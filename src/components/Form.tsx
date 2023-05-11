import React from "react";
import { styled } from "styled-components";

import { DefaultProps } from "~utils/types";

/**
 * StyledForm
 * @component
 *
 */
const StyledForm = styled.form`
  border-radius: 8px;
  box-shadow: 2px -2px 4px -2px var(--bg-text-color);
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 40em;
  padding: 1.5em 3%;
  transition: height 1s;
  width: 92%;
`;

/**
 * Form
 * @component
 *
 */
function Form(props: DefaultProps) {
  const { children, className } = props;
  return <StyledForm className={className}>{children}</StyledForm>;
}

export default Form;
