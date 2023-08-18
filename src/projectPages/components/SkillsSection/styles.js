import { makeStyles } from "@material-ui/core/styles";
import theme from "../../../theme.js";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "row",
    "& .MuiGrid-item": {
      borderRadius: "10px",
      padding: "5px 15px",
      marginRight: "20px",
      marginTop: "20px",
      background: theme.palette.text.primary,
    },
  },
  skill: {
    fontSize: "20px",
    color: theme.palette.background.tan,
  },
}));

export default useStyles;
