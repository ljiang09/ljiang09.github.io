import { makeStyles } from "@material-ui/core/styles";
import theme from "../../theme";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "24px",
    width: "100%",
    height: "100vh",
    background: theme.palette.background.tan,
  },
  title: {
    color: theme.palette.primary.main,
    fontSize: "80px !important",
  },
  subtitle: {
    color: theme.palette.text.primary,
    fontSize: "24px !important",
  },
  contactButtons: {
    display: "flex",
    flexDirection: "row",
    gap: "25px",
  },
  contactButton: {
    width: "75px",
    height: "75px",
    borderRadius: "10px !important",
    background: theme.palette.primary.main + " !important",
    "&:hover": {
      backgroundColor: theme.palette.secondary.main + " !important",
    },
  },
  contactIcon: {
    width: "50px !important",
    height: "50px !important",
    color: theme.palette.background.tan,
  },
}));

export default useStyles;
