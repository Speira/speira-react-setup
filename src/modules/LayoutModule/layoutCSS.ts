import { basicsStyles } from "~utils/stylesheets";

const layoutCSS = {
  container: {
    minHeight: { value: "100vh" },
    display: { value: "flex" },
    width: { value: "100vw" },
  },
  footer: {
    ...basicsStyles.flexSpaceAround,
  },
  header: {
    display: { value: "flex" },
    flexDirection: { value: "column" },
    width: { value: "100%", md: "80%" },
  },
  headerTop: {
    display: { value: "grid" },
    gridTemplateColumns: { value: "3em 1fr 5em" },
    width: { value: "100%" },
  },
  headerNav: {
    ...basicsStyles.flexCenter,
  },
};

export default layoutCSS;
