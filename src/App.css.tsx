import { createGlobalStyle } from "styled-components";

import "normalize.css";

export default createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body * {
    box-sizing: border-box;
  }

  #root {
    margin: 0px;
    padding: 0px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
    width: 100vw;
    max-width: 100vw;
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

  .bg-info {
    background-color: var(--color-info);
    --bg-color: var(--color-info);
    --bg-text-color: var(--color-light);
  }
  .bg-success {
    background-color: var(--color-success);
    --bg-color: var(--color-success);
    --bg-text-color: var(--color-light);
  }
  .bg-warning {
    background-color: var(--color-warning);
    --bg-color: var(--color-warning);
    --bg-text-color: var(--color-light);
  }
  .bg-danger {
    background-color: var(--color-danger);
    --bg-color: var(--color-danger);
    --bg-text-color: var(--color-light);
  }

  .bg-light-info {
    background-color: var(--color-light-info);
    --bg-color: var(--color-light-info);
    --bg-text-color: var(--color-info);
  }
  .bg-light-success {
    background-color: var(--color-light-success);
    --bg-color: var(--color-light-success);
    --bg-text-color: var(--color-success);
  }
  .bg-light-warning {
    background-color: var(--color-light-warning);
    --bg-color: var(--color-light-warning);
    --bg-text-color: var(--color-warning);
  }
  .bg-light-danger {
    background-color: var(--color-light-danger);
    --bg-color: var(--color-light-danger);
    --bg-text-color: var(--color-danger);
  }

`;
