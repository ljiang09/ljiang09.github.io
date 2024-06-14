import useStyles from "./styles.js";
import { Typography } from "@material-ui/core";
import { Terminal } from "@mui/icons-material";

const Skills = () => {
  const classes = useStyles();

  const languages = [
    "React",
    "JavaScript",
    "Python",
    "Java",
    "HTML/CSS",
    "Angular",
    "Swift/SwiftUI",
    "Golang",
    "C",
    "MATLAB",
    "R",
    "C#",
    "C++ (Arduino)",
  ];

  const technologies = [
    "Git/GitHub",
    "Flask",
    "Redux",
    "Linux",
    "Unity",
    // "Terraform",
    "MATLAB",
    // "Command Line",
    "Azure",
    "AWS",
    "XCode",
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
