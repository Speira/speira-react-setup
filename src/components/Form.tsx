import React from "react";
import { styled } from "styled-components";

import { enClassname } from "~utils/dom.utils";
import { Size } from "~utils/enum.utils";
import { DefaultProps } from "~utils/type.utils";

type FormProps = DefaultProps & {
  size: Size;
};
/**
 * StyledForm
 * @styled-component
 */
const StyledForm = styled.form`
  border-radius: ${({ theme }) => theme.radius};
  box-shadow: 2px -2px 4px -2px var(--bg-text-color);
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 97%;
  min-height: 3em;
  padding: 0.5em 1%;
  transition: height 1s;
  &.xs {
    width: 12em;
  }
  &.sm {
    width: 24em;
  }
  &.md {
    width: 36em;
  }
  &.lg {
    width: 48em;
  }
  &.xl {
    width: 60em;
  }
  @media (min-width: var(--screen-sm)) {
    padding: 1.5em 3%;
  }
`;

/**
 * Form
 * @component
 */
function Form(props: FormProps) {
  const { children, className, id, size = Size.md } = props;
  const classed = enClassname([size], className);
  return (
    <StyledForm id={id} className={classed}>
      {children}
    </StyledForm>
  );
}

export default Form;
