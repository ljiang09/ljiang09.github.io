import { Typography } from "@material-ui/core";
import useStyles from "./styles";
import Skills from "../components/SkillsSection";

const NetworkKeylogger = () => {
  const classes = useStyles();

  const skills = ["C", "libevdev", "Device I/O", "Socket/Network programming"];

  return (
    <div className={classes.root}>
      <Typography className={classes.title}>Network Keylogger</Typography>
      <Typography className={classes.date}>April - May 2023</Typography>

      <div className={classes.content}>
        <Typography className={classes.date}>Skills Used</Typography>
        <Skills skills={skills} />
      </div>
    </div>
  );
};

export default NetworkKeylogger;
