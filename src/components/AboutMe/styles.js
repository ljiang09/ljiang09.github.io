import { makeStyles } from "@material-ui/core/styles";
import theme from "../../theme";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "30px",
    width: "100%",
    background: theme.palette.primary.main,
    padding: "100px 0",
  },
  text: {
    color: "white",
    fontSize: 24,
    width: "50%",
    textAlign: "center",
  },
  learnMoreBtns: {
    display: "flex",
    flexDirection: "row",
    gap: "40px",
    "& a": {
      padding: "20px",
      background: "white",
      color: "black",
      borderRadius: "16px",
      textDecoration: "none",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
      "&:hover": {
        color: "rgba(0, 0, 0, 0.5)",
        background: theme.palette.secondary.main,
        boxShadow: "none",
      },
    },
  },
  buttonText: {
    fontSize: 20,
  },
}));

export default useStyles;
