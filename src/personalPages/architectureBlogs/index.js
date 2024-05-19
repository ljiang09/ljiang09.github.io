import NavBar from "../../components/NavBar";
import { Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Routes, Route, NavLink } from "react-router-dom";

import theme from "../../theme.js";
import PendletonHall from "./PendletonHall";
import GrundtvigsKirke from "./GrundtvigsKirke";

import Pendleton_front from "./PendletonHall/images/Pendleton_front.JPG";
import GrundtvigsChandelier from "./GrundtvigsKirke/images/fig6.jpg";

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
  button: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
    background: "white",
    borderRadius: "20px",
    boxShadow: "0 0 20px " + theme.palette.text.primary,
    margin: "25px",
    padding: "25px",
    textDecoration: "none",
    "&:hover": {
      background: theme.palette.background.gray,
    },
    "&:active": {
      boxShadow: "0 0 10px " + theme.palette.text.primary,
    },
    "& img": {
      height: "300px",
      width: "auto",
    },
    "& p": {
      color: "black",
      fontSize: "30px",
    },
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

                <NavLink
                  to={`/architecture/pendletonHall`}
                  className={classes.button}
                >
                  <img src={Pendleton_front} alt="Pendleton Hall" />
                  <Typography>Pendleton Hall</Typography>
                </NavLink>
                <NavLink
                  to={`/architecture/grundtvigsKirke`}
                  className={classes.button}
                >
                  <img src={GrundtvigsChandelier} alt="Grundtvig's Church" />
                  <Typography>Grundtvig's Church</Typography>
                </NavLink>
              </>
            }
          />
          <Route path="pendletonHall" element={<PendletonHall />} />
          <Route path="grundtvigsKirke" element={<GrundtvigsKirke />} />
        </Routes>
      </div>
    </>
  );
};

export default ArchitectureHomePage;
