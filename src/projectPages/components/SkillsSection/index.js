import { Grid, Typography } from "@material-ui/core";

import useStyles from "./styles.js";

const Skills = ({ skills }) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      {skills.map((skill) => {
        return (
          <Grid item>
            <Typography className={classes.skill}>{skill}</Typography>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Skills;
