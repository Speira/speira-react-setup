import { basicsStyles, CSSPropAdapted } from "~utils/css.utils";

const layoutCSS: CSSPropAdapted = {
  container: {
    display: "flex",
    width: "100vw",
  },
  footer: {
    ...basicsStyles.flexSpaceAround,
  },
  header: {
    display: "flex",
    margin: "auto",
    flexDirection: "column",
    width: "100%",
    md: {
      width: "90%",
    },
  },
  headerTop: {
    display: "grid",
    gridTemplateColumns: "3em 1frem",
    width: "100%",
  },
  headerNav: {
    ...basicsStyles.flexCenter,
  },
};

export default layoutCSS;
