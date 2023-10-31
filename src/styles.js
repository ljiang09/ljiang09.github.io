import { makeStyles } from "@material-ui/core/styles";
import theme from "./theme";

const useStyles = makeStyles(() => ({
  navBar: {
    position: "absolute",
    width: "100%",
  },
  root: {
    margin: 0,
    background: theme.palette.background.tan,
    paddingBottom: "100px",
  },
  skillsBackground: {
    background: `linear-gradient(to bottom, ${theme.palette.primary.main} 50%, ${theme.palette.background.tan} 50%)`,
  },
}));

export default useStyles;
