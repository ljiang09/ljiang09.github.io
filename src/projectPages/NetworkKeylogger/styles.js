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
  header2: {
    fontSize: "30px",
    marginTop: "40px",
  },
  header3: {
    fontSize: "25px",
    marginTop: "40px",
  },
  text: {
    fontSize: "20px",
  },
  repoButton: {
    textDecoration: "none",
    background: theme.palette.primary.main,
    margin: "40px auto",
    padding: "10px 20px",
    borderRadius: "15px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
    "&:hover": {
      background: theme.palette.secondary.main,
    },
    "& button": {
      textTransform: "none",
      fontSize: "20px",
      color: "white",
    },
  },
}));

export default useStyles;
