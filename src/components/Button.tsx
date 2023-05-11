import React from "react";
import { styled } from "styled-components";

import useEnsafe from "~hooks/useEnsafe";
import { DefaultProps } from "~utils/types";

type ButtonProps = DefaultProps & {
  onClick: () => void;
};

/**
 * StyledButton
 * @component
 *
 */
const StyledButton = styled.button`
  border: none;
  border-radius: ${({ theme }) => theme.radius};
  box-shadow: 1px 1px 1px -1px var(--color-dark),
    -0.5px -0.5px 0.5px 0px var(--color-dark) inset;
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
`;

/**
 * Button
 * @component
 */
function Button(props: ButtonProps) {
  const { children, className, onClick } = props;
  const { ensafe } = useEnsafe();
  const handleClick = () => {
    ensafe(() => onClick());
  };

  return (
    <StyledButton className={className} onClick={handleClick} role="button">
      {children}
    </StyledButton>
  );
}

export default Button;
