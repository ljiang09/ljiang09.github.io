import useStyles from "./styles.js";
import { Typography, Button } from "@material-ui/core";
import { Email, LinkedIn, GitHub } from "@mui/icons-material";

const Intro = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.title}>Hi! I'm Lily Jiang.</Typography>
      <Typography className={classes.subtitle}>
        Engineering with Computing student at Olin College.
      </Typography>
      <Typography className={classes.subtitle}>
        Experienced in React, Swift (ARKit, SwiftUI, UIKit), and Python.
      </Typography>
      <div className={classes.contactButtons}>
        <a href="mailto: ljiang@olin.edu" target="_blank" rel="noreferrer">
          <Button className={classes.contactButton}>
            <Email className={classes.contactIcon} />
          </Button>
        </a>
        <a
          href="https://www.linkedin.com/in/lilyajiang/"
          target="_blank"
          rel="noreferrer"
        >
          <Button className={classes.contactButton}>
            <LinkedIn className={classes.contactIcon} />
          </Button>
        </a>
        <a href="https://github.com/ljiang09" target="_blank" rel="noreferrer">
          <Button className={classes.contactButton}>
            <GitHub className={classes.contactIcon} />
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Intro;
