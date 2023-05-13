import React from "react";
import { styled } from "styled-components";

import { enClassname } from "~utils/DOM";
import { DefaultProps } from "~utils/types";

type FieldsetProps = DefaultProps & {
  legend: string;
  position?: "left" | "right" | "center";
  direction?: "row" | "column";
};

/**
 * StyledFieldset
 * @styled-component
 */
const StyledFieldset = styled.fieldset`
  border-color: var(--bg-text-color);
  border-width: 0.5px;
  color: var(--bg-text-color);
  max-width: 50em;
  padding: 0.7em;
  width: 100%;
  &.left legend {
    text-align: left;
  }
  &.center legend {
    text-align: center;
  }
  &.right legend {
    text-align: right;
  }
  &.row .fieldset-content {
    display: flex;
    grid-column-gap: 0.7em;
  }
  &.column .fieldset-content {
    display: inline-grid;
    grid-row-gap: 0.7em;
    grid-template-rows: auto;
    text-align: right;
  }
`;

/**
 * Fieldset
 * @component
 */
function Fieldset(props: FieldsetProps) {
  const {
    children,
    className,
    legend,
    position = "left",
    direction = "column",
  } = props;

  const propsClass = enClassname([position, direction], className);

  return (
    <StyledFieldset className={propsClass}>
      {legend && <legend>{legend}</legend>}
      <div className="fieldset-content">{children}</div>
    </StyledFieldset>
  );
}

export default Fieldset;
