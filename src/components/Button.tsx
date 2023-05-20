import React from "react";
import { styled } from "styled-components";

import useEnsafe from "~hooks/useEnsafe";
import { enClassname } from "~utils/dom.utils";
import { Size, Status } from "~utils/enum.utils";
import { DefaultProps } from "~utils/type.utils";

type ButtonProps = DefaultProps & {
  onClick: () => void;
  status?: Status;
  size?: Size;
};

/**
 * StyledButton
 * @styled-component
 */
const StyledButton = styled.button`
  border: none;
  border-radius: ${({ theme }) => theme.radius};
  box-shadow: ${({ theme }) => theme.boxShadowize.low("var(--color-dark)")};
  color: var(--bg-text-color);
  cursor: pointer;
  font-size: 1em;
  margin: 0.5em;
  outline: none;
  padding: 0.5em;
  position: relative;
  transition: all 0.05s ease-in-out;
  &:hover {
  }
  &:active {
    box-shadow: 0px 0px 1px -1px var(--color-dark),
      0px 0px 1px -1px currentcolor inset;
    opacity: 0.5;
    transform: scale(0.96);
    transform-origin: bottom center;
  }
  &:disabled {
    box-shadow: none;
    cursor: text;
    opacity: 0.6;
  }
  &:after {
    background-color: #ffffff33;
    border-radius: ${({ theme }) => theme.radius};
    content: "";
    display: flex;
    height: 100%;
    left: 0;
    opacity: 0.5;
    position: absolute;
    top: 0;
    transform: scale(0, 1);
    transform-origin: left;
    transition: none;
    width: 100%;
  }
  &:hover:after {
    transform: scale(1, 1);
    transition: all 0.2s ease-in-out;
  }
  &:active:after {
    transform: scale(0, 1);
  }
  &:disabled:after {
    transform: none;
  }
  &.rounded {
    border-radius: 100%;
  }
  &.unboxed {
    border: none;
    box-shadow: none;
  }
  &.xs {
    width: 2em;
  }
  &.sm {
    width: 4em;
  }
  &.md {
    width: 8em;
  }
  &.lg {
    width: 14em;
  }
  &.xl {
    width: 18em;
  }
`;

/**
 * Button
 * @component
 */
function Button(props: ButtonProps) {
  const {
    children,
    className,
    id,
    onClick,
    size = Size.md,
    status = Status.info,
  } = props;
  const { ensafe } = useEnsafe();
  const handleClick = () => {
    const safeClick = ensafe(() => onClick());
    safeClick();
  };

  const classed = enClassname([size], className).concat(` bg-light-${status}`);

  return (
    <StyledButton
      id={id}
      className={classed}
      onClick={handleClick}
      role="button"
    >
      {children}
    </StyledButton>
  );
}

export default Button;
