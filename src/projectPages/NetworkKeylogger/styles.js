import { makeStyles } from "@material-ui/core/styles";
import theme from "../../theme.js";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    paddingTop: "60px",
    margin: 0,
    background: theme.palette.background.tan,
    paddingBottom: "100px",
  },
  title: {
    fontSize: "40px",
  },
  date: {
    fontSize: "30px",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    width: "70vw",
    margin: "auto",
  },
}));

export default useStyles;
