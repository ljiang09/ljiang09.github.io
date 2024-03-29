import { makeStyles } from "@material-ui/core/styles";
import theme from "../theme.js";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    gap: "20px",
    padding: "60px 15vw 100px",
    margin: 0,
    background: theme.palette.background.tan,
    minHeight: "100vh",
  },
  title: {
    fontSize: "40px",
    fontWeight: "bold",
  },
  date: {
    fontSize: "30px",
    fontWeight: "bold",
  },
  header2: {
    fontSize: "30px",
    marginTop: "60px",
    marginBottom: "10px",
    fontWeight: "bold",
  },
  header3: {
    fontSize: "25px",
    marginTop: "40px",
    fontWeight: "bold",
  },
  text: {
    fontSize: "20px",
    marginBottom: "10px",
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  repoButton: {
    textDecoration: "none",
    background: theme.palette.primary.main,
    margin: "10px 40px",
    padding: "5px 20px",
    borderRadius: "15px",
    boxShadow: "0 0 4px rgba(0, 0, 0, 0.5)",
    "&:hover": {
      background: theme.palette.secondary.main,
    },
    "& button": {
      textTransform: "none",
      fontSize: "20px",
      color: "white",
    },
  },
  section: {
    gap: "0px",
  },
  bulletPoint: {
    display: "flex",
    flexDirection: "row",
    alignItems: "start",
    gap: "10px",
    "& svg": {
      marginTop: "3px",
    },
  },
}));

export default useStyles;
