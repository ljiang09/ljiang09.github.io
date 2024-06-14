import { makeStyles } from "@material-ui/core/styles";
import theme from "../../theme";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    gap: "50px",
    width: "75%",
    padding: "50px 25px",
    margin: "auto",
    background: "white",
    borderRadius: "30px",
    border: "3px solid " + theme.palette.text.primary,
  },
  iconBlock: {
    display: "flex",
    justifyContent: "center",
    width: "20%",
  },
  terminalIcon: {
    color: theme.palette.primary.main,
    fontSize: "10vw !important",
  },
  info: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "start",
    width: "80%",
    gap: "16px",
  },
  header: {
    color: theme.palette.primary.main,
    fontSize: 30,
  },
  cells: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "start",
    gap: "20px",
  },
  cell: {
    color: "white",
    background: theme.palette.primary.main,
    padding: "8px 12px",
    borderRadius: "10px",
    fontSize: 20,
  },
  learnMoreBtns: {
    display: "flex",
    flexDirection: "row",
    gap: "40px",
  },
}));

export default useStyles;
