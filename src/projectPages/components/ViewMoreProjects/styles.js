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
  projects: {
    display: "flex",
    justifyContent: "center",
    gap: "50px",
    marginTop: "50px",
    // TODO: change this into a responsive sizing. breakpoints
    "& .MuiGrid-item": {
      borderRadius: "20px",
      "& a": {
        textDecoration: "none",
      },
    },
  },
  link: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    background: "white",
    borderRadius: "20px",
    boxShadow: "0 0 20px " + theme.palette.text.primary,
    "&:hover": {
      background: theme.palette.background.gray,
    },
    "&:active": {
      boxShadow: "0 0 10px " + theme.palette.text.primary,
    },
  },
  projectImage: {
    width: "275px",
    height: "275px",
    margin: "25px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& img": {
      maxWidth: "100%",
      minWidth: "100%",
      width: "auto",
      height: "auto",
    },
  },
  projectName: {
    fontSize: "30px",
    textTransform: "none",
  },
  projectDate: {
    fontSize: "20px",
    textTransform: "none",
    marginBottom: "25px",
  },
}));

export default useStyles;
