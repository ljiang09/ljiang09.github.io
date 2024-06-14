import { useState, useEffect } from "react";
import {
  Typography,
  Fade,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import theme from "../../../theme.js";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    gap: "20px",
    paddingTop: "60px",
    margin: "0 auto",
    width: "60%",
    background: theme.palette.background.tan,
    paddingBottom: "100px",
    minHeight: "100vh",
    "& img": {
      height: 400,
    },
  },
  title: {
    fontSize: "40px",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: "25px",
    fontWeight: "bold",
  },
  header1: {
    fontSize: "30px",
    fontWeight: "bold",
  },
  caption: {
    fontStyle: "italic",
  },
}));

const ORU = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  return (
    <Fade in={open} timeout={1000}>
      <div className={classes.root}>This page is still being worked on..</div>
    </Fade>
  );
};

export default ORU;
