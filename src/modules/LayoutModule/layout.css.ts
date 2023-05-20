import { basicsStyles, CSSPropAdapted } from "~utils/css.utils";

const layoutCSS: CSSPropAdapted = {
  body: {
    display: "flex",
    maxWidth: "100vw",
    flexDirection: "column",
    alignItems: "center",
    alignContent: "center",
  },
  footer: {
    ...basicsStyles.flexSpaceAround,
  },
  header: {
    display: "flex",
    margin: "0 auto",
    flexDirection: "column",
    width: "100%",
    md: {
      width: "90%",
      maxWidth: "80em",
    },
  },
  headerTop: {
    display: "grid",
    gridTemplateColumns: "3em 1fr 3em",
    width: "100%",
  },
  headerNav: {
    ...basicsStyles.flexCenter,
  },
};

export default layoutCSS;
