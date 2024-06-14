import NavBar from "../../components/NavBar";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Routes, Route } from "react-router-dom";

import theme from "../../theme.js";
import PendletonHall from "./PendletonHall";
import ORU from "./ORU";
import GrundtvigsKirke from "./GrundtvigsKirke";

import Pendleton_front from "./PendletonHall/images/Pendleton_front.JPG";
import ORU_LRC from "./ORU/images/LRC.jpg";
import GrundtvigsChandelier from "./GrundtvigsKirke/images/fig6.jpg";

import ArchitectureBlogButton from "./architecture-blog-button";

const ORU_PAGE_FINISHED = false;

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
  content: {
    display: "flex",
    flexDirection: "row",
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

                <div className={classes.content}>
                  <ArchitectureBlogButton
                    title="Pendleton Hall"
                    src={Pendleton_front}
                    alt="Pendleton Hall"
                    to={`/architecture/pendletonHall`}
                  />

                  {ORU_PAGE_FINISHED && (
                    <ArchitectureBlogButton
                      title="Oral Roberts University"
                      src={ORU_LRC}
                      alt="ORU's LRC"
                      to={`/architecture/ORU`}
                    />
                  )}

                  <ArchitectureBlogButton
                    title="Grundtvig's Church"
                    src={GrundtvigsChandelier}
                    alt="Grundtvig's Church"
                    to={`/architecture/grundtvigsKirke`}
                  />
                </div>
              </>
            }
          />
          <Route path="pendletonHall" element={<PendletonHall />} />
          {ORU_PAGE_FINISHED && <Route path="ORU" element={<ORU />} />}
          <Route path="grundtvigsKirke" element={<GrundtvigsKirke />} />
        </Routes>
      </div>
    </>
  );
};

export default ArchitectureHomePage;
