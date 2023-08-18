import { makeStyles } from "@material-ui/core/styles";
import theme from "../../../theme.js";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "70px",
    width: "100%",
  },
  header: {
    fontSize: "30px",
    fontWeight: "bold",
  },
}));

export default useStyles;
