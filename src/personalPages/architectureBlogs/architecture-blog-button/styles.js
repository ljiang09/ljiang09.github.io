import { makeStyles } from "@material-ui/core/styles";
import theme from "../../../theme";

export const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
    background: "white",
    borderRadius: "20px",
    boxShadow: "0 0 20px " + theme.palette.text.primary,
    margin: "25px",
    padding: "25px",
    textDecoration: "none",
    "&:hover": {
      background: theme.palette.background.gray,
    },
    "&:active": {
      boxShadow: "0 0 10px " + theme.palette.text.primary,
    },
    "& img": {
      height: "300px",
      width: "400px",
      objectFit: "cover",
    },
    "& p": {
      color: "black",
      fontSize: "30px",
    },
  },
}));
