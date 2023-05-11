import { DefaultProps } from "~utils/types";

import ErrorProvider from "./ErrorContext";
import ThemeProvider from "./ThemeContext";

/**
 * Contexts
 * @context
 */
function Contexts(props: DefaultProps) {
  const { children } = props;
  return (
    <ErrorProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </ErrorProvider>
  );
}

export default Contexts;
