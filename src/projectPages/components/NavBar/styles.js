import { makeStyles } from "@material-ui/core/styles";
import theme from "../../../theme.js";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: "100px",
    background: theme.palette.primary.main,
  },
  homeBtn: {
    fontSize: "30px",
    color: "white",
    textTransform: "none",
    padding: "10px 20px",
    margin: "10px 20px",
  },
  projectsBtn: {
    fontSize: "24px",
    color: "white",
    textTransform: "none",
    padding: "10px 20px",
    margin: "10px 20px",
  },
  icon: {
    marginLeft: "5px",
    fontSize: "30px",
    transition: "transform 0.3s ease",
    transform: ({ open }) => (open ? "rotate(-180deg)" : ""),
  },
  menu: {
    maxHeight: "300px",
  },
}));

export default useStyles;
