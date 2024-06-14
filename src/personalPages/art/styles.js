import { makeStyles } from "@material-ui/core/styles";
import theme from "../../theme.js";

export const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    paddingTop: "60px",
    margin: 0,
    background: theme.palette.background.tan,
    paddingBottom: "100px",
    height: "calc(100vh - 240px)",
    overflow: "scroll",
  },
  title: {
    fontSize: "40px",
    fontWeight: "bold",
  },
  images: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "30px",
    width: "90vw",
    "& img": {
      border: "1px solid black",
      height: "70vh",
    },
  },
  loading: {
    position: "absolute",
    top: "80px",
    left: "0",
    width: "100%",
    height: "calc(100vh - 80px)",
    background: theme.palette.background.tan,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
