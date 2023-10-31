import useStyles from "./styles.js";
import { Typography } from "@material-ui/core";

const AboutMe = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.text}>
        I'm a junior at Olin College, studying Engineering with Computing and
        graduating in May 2025. I have a passion for front-end development, and
        pride myself in the precision and care I take while creating designs and
        user experiences.
      </Typography>
      <Typography className={classes.text}>
        I first found my love for front-end development as a cofounder of
        Sebela, where I created mobile apps with Swift and Unity. More recently,
        I was a software intern at Kuva Systems, where I expanded my abilities
        with ReactJS web development.
      </Typography>

      <div className={classes.learnMoreBtns}>
        <a href="https://www.sebela.co" target="_blank" rel="noreferrer">
          <Typography className={classes.buttonText}>
            More about Sebela
          </Typography>
        </a>
        <a href="https://www.kuvasystems.com" target="_blank" rel="noreferrer">
          <Typography className={classes.buttonText}>
            More about Kuva Systems
          </Typography>
        </a>
      </div>
    </div>
  );
};

export default AboutMe;
