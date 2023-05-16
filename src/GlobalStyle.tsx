import { createGlobalStyle } from "styled-components";

import "normalize.css";

export default createGlobalStyle`
  body {
    font-size: 16px;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body * {
    box-sizing: border-box;
    min-height: 100vh;
    width: 100%;
    max-width: 100%;
    display: flex;
    flex-direction:column;
  }

  a:visited {
    text-decoration: none;
  }

  /* ******************************************************************* */
  /* ***********************  Vars declaration  ************************ */
  /*         NB: The bg-text-color are created to be adapted             */
  /*           to the bg color, it is meant to be overrided              */
  /* ******************************************************************* */

  :root{
    --color-primary: ${({ theme }) => theme.colors.primary};
    --color-secondary: ${({ theme }) => theme.colors.secondary};
    --color-tertiary: ${({ theme }) => theme.colors.tertiary};
    --color-quaternary: ${({ theme }) => theme.colors.quaternary};
    --color-light: ${({ theme }) => theme.colors.light};
    --color-dark: ${({ theme }) => theme.colors.dark};

    --color-info: ${({ theme }) => theme.colors.info};
    --color-success: ${({ theme }) => theme.colors.success};
    --color-warning: ${({ theme }) => theme.colors.warning};
    --color-danger: ${({ theme }) => theme.colors.danger};

    --color-light-info: ${({ theme }) => theme.colors.light_info};
    --color-light-success: ${({ theme }) => theme.colors.light_success};
    --color-light-warning: ${({ theme }) => theme.colors.light_warning};
    --color-light-danger: ${({ theme }) => theme.colors.light_danger};

    --radius: ${({ theme }) => theme.radius};
  }


  /* ****************************************************** */
  /* *******************  Dynamic vars  ******************* */
  /* ****************************************************** */

    --bg-text-color: var(--color-dark);
    --bg-color: var(--color-primary);

  /* ****************************************************** */
  /* *********************  BG color  ********************* */
  /* ****************************************************** */

  .bg-primary {
    background-color: var(--color-primary);
    --bg-color: var(--color-primary);
    --bg-text-color: var(--color-light);
  }
  .bg-secondary {
    background-color: var(--color-secondary);
    --bg-color: var(--color-secondary);
    --bg-text-color: var(--color-dark);
  }
  .bg-tertiary {
    background-color: var(--color-tertiary);
    --bg-color: var(--color-tertiary);
    --bg-text-color: var(--color-dark);
  }
  .bg-quaternary {
    background-color: var(--color-quaternary);
    --bg-color: var(--color-quaternary);
    --bg-text-color: var(--color-dark);
  }
  .bg-dark {
    background-color: var(--color-dark);
    --bg-color: var(--color-dark);
    --bg-text-color: var(--color-light);
  }
  .bg-light {
    background-color: var(--color-light);
    --bg-color: var(--color-light);
    --bg-text-color: var(--color-dark);
  }

  /* ****************************************************** */
  /* *********************  text-align  ******************* */
  /* ****************************************************** */

  .text-center { text-align: center;}
  .text-right { text-align: right;}
  .text-left { text-align: left;}
`;
