import React, { HTMLInputTypeAttribute } from "react";
import { styled } from "styled-components";

import useEnsafe from "~hooks/useEnsafe";
import { checkIsBoolean } from "~utils/booleans";
import { enClassname } from "~utils/DOM";
import { Size, Status } from "~utils/enums";

type InputValueType = string | number | boolean;
type InputProps = {
  className?: string;
  isAsync?: boolean;
  onChange: (value: InputValueType) => void;
  placeholder?: string;
  status?: Status;
  type?: HTMLInputTypeAttribute;
  value?: InputValueType;
  size?: Size;
};

/**
 * StyledInput
 * @styled-component
 */
const StyledInput = styled.input`
  background-color: var(--color-light);
  border-radius: ${({ theme }) => theme.radius};
  border-style: solid;
  border-width: 0;
  margin: auto;
  outline: none;
  padding: 0.4em;
  position: relative;
  transition: all 0.18s ease-in-out;
  &.border {
    border-width: 1px;
  }
  &.danger {
    border-width: 2px;
  }
  &:hover {
  }
  &:focus {
    box-shadow: 0 0 3px -1px currentcolor inset;
  }
  &:disabled {
    box-shadow: none;
    cursor: text;
    opacity: 0.6;
  }
  &:disabled:after {
    background-color: var(--color-dark);
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    transition: none;
    width: 100%;
  }
  &.xs {
    width: 3em;
  }
  &.sm {
    width: 8em;
  }
  &.md {
    width: 12em;
  }
  &.lg {
    width: 20em;
  }
  &.xl {
    width: 32em;
  }
`;

/**
 * Input
 * @component
 * @description
 * We can set isAsync at true to improve performance when we want to
 * execute an heavy task on each value update
 */
function Input(props: InputProps) {
  const {
    className,
    isAsync,
    onChange,
    placeholder,
    size = Size.md,
    status,
    type = "text",
    value,
  } = props;

  const { ensafe } = useEnsafe();
  const safeChange = ensafe((input) => onChange(input as InputValueType));

  const eventAdapter = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.type === "checkbox") return event.target.checked;
    return event.target.value;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!isAsync) safeChange(eventAdapter(event));
  };

  const handleBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (isAsync) safeChange(eventAdapter(event));
  };

  const style = status ? {} : {};
  const classed = enClassname([size], className);
  return (
    <StyledInput
      style={style}
      className={classed}
      checked={checkIsBoolean(value) ? value : undefined}
      onBlur={handleBlur}
      onChange={handleChange}
      placeholder={placeholder}
      type={type}
      value={checkIsBoolean(value) ? undefined : value}
    />
  );
}

export default Input;
