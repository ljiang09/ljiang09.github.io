import NavBar from "../../components/NavBar";
import { Typography } from "@material-ui/core";
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
    minHeight: "100vh",
  },
  title: {
    fontSize: "40px",
    fontWeight: "bold",
  },
}));

const ArchitectureHomePage = () => {
  const classes = useStyles();

  return (
    <>
      <NavBar />
      <div className={classes.root}>
        <Typography className={classes.title}>Architecture</Typography>
      </div>
    </>
  );
};

export default ArchitectureHomePage;