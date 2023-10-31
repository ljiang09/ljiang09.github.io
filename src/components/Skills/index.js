import useStyles from "./styles.js";
import { Typography } from "@material-ui/core";
import { Terminal } from "@mui/icons-material";

const Skills = () => {
  const classes = useStyles();

  const languages = [
    "ReactJS",
    "JavaScript",
    "Python",
    "Java",
    "Swift/SwiftUI",
    "Golang",
    "C",
    "MATLAB",
    "R",
    "C#",
    "C++ (Arduino)",
    "HTML/CSS",
  ];

  const technologies = [
    "Git/GitHub",
    "Redux",
    "Linux",
    "Unity",
    // "Terraform",
    "MATLAB",
    // "Command Line",
    "Azure",
    "XCode",
    // "Latex",
    "Firebase",
    "Arduino",
    "Raspberry Pi",
  ];

  return (
    <div className={classes.root}>
      <div className={classes.iconBlock}>
        <Terminal className={classes.terminalIcon} />
      </div>
      <div className={classes.info}>
        <Typography className={classes.header}>Languages</Typography>
        <div className={classes.cells}>
          {languages.map((language) => (
            <Typography className={classes.cell}>{language}</Typography>
          ))}
        </div>
        <Typography className={classes.header}>Technologies</Typography>
        <div className={classes.cells}>
          {technologies.map((tech) => (
            <Typography className={classes.cell}>{tech}</Typography>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
