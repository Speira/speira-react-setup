import * as StyledIcons from "@styled-icons/material-rounded";

type IconProps = {
  name: keyof typeof StyledIcons;
  size?: string;
};

/**
 * Icon
 * @component
 * @styled-icons
 * @description
 * Calling Icon from "@styled-icons/material-rounded" library
 */
function Icon(props: IconProps) {
  const { name, size = "1em" } = props;
  const IconComponent = StyledIcons[name];
  return <IconComponent size={size} />;
}

export default Icon;
