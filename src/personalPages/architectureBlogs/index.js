import NavBar from "../../components/NavBar";
import { Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Routes, Route, NavLink } from "react-router-dom";

import theme from "../../theme.js";
import PendletonHall from "./PendletonHall";

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

  window.scrollTo(0, 0);

  return (
    <>
      <NavBar />
      <div className={classes.root}>
        <Routes>
          <Route
            path=""
            element={
              <>
                <Typography className={classes.title}>Architecture</Typography>

                <NavLink to={`/architecture/pendletonHall`}>
                  <Button>Pendleton Hall</Button>
                </NavLink>
                <NavLink to={`/architecture/ORU`}>
                  <Button>Oral Roberts University</Button>
                </NavLink>
              </>
            }
          />
          <Route path="pendletonHall" element={<PendletonHall />} />
        </Routes>
      </div>
    </>
  );
};

export default ArchitectureHomePage;
