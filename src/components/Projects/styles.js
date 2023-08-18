import { makeStyles } from "@material-ui/core/styles";
import theme from "../../theme";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "auto",
    paddingTop: "100px",
  },
  header: {
    fontSize: 60,
    color: theme.palette.primary.main,
    marginBottom: "10px",
  },
  tabs: {
    background: theme.palette.primary.main,
    color: "white",
    width: "100%",
    "& button": {
      fontSize: "30px",
      padding: "10px 15px",
      margin: "5px",
      textTransform: "none",
    },
    "& .MuiTabs-flexContainer": {
      display: "flex",
      justifyContent: "center",
    },
  },
  tabIndicator: {
    background: "white !important",
    height: "3px !important",
    borderRadius: "1px",
    marginBottom: "5px",
  },
  projects: {
    width: "80vw !important",
    display: "flex",
    justifyContent: "start",
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
