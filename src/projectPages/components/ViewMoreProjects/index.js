import { Typography, Grid, Button } from "@material-ui/core";
import { NavLink, useParams } from "react-router-dom";
import useStyles from "./styles.js";
import {
  TAGS,
  projects as project_data,
} from "../../../components/Projects/projects_data.js";

const ViewMoreProjects = ({ type }) => {
  const classes = useStyles();

  const { subpage } = useParams();

  const getProjects = (projects, substitution = null) => {
    let updatedProjects = [];
    if (projects.includes(subpage)) {
      updatedProjects = projects.filter((project) => project !== subpage);
      if (substitution) updatedProjects.push(substitution);
    } else updatedProjects = projects;

    updatedProjects = updatedProjects.map((project) =>
      project_data.find((projectObj) => projectObj.pageUrl === project)
    );

    return updatedProjects;
  };

  let displayedProjects = [];

  switch (type) {
    case TAGS.SOFTWARE:
      displayedProjects = getProjects(
        ["rockPaperScissors", "keylogger", "sebelaApp"],
        "desktopPet"
      );
      break;
    case TAGS.IOS:
      displayedProjects = getProjects(["sebelaApp", "makeupGuideApp"]);
      break;
    case TAGS.ROBOTICS:
      displayedProjects = getProjects([
        "panTiltScanner",
        "lineFollowerRobot",
        "https://supah32.github.io/pie-2022-03/",
      ]);
      break;
    case TAGS.MECHANICAL:
      displayedProjects = getProjects(["towLab"]);
      break;
    case TAGS.COURSE_PROJECTS:
      displayedProjects = getProjects(
        ["keylogger", "lineFollowerRobot", "rushHourGame"],
        "desktopPet"
      );
      break;
    default:
      break;
  }

  return (
    <div className={classes.root}>
      {displayedProjects.length !== 0 && (
        <Typography className={classes.header}>
          View Other {type} Projects
        </Typography>
      )}

      <Grid container className={classes.projects}>
        {displayedProjects.map((project) => (
          <Grid item>
            {project.content ? (
              <NavLink to={`/subpages/${project.pageUrl}`}>
                <Button className={classes.link}>
                  <div>
                    <div className={classes.projectImage}>
                      <img src={project.imgUrl} alt={project.name} />
                    </div>
                    <Typography className={classes.projectName}>
                      {project.name}
                    </Typography>
                    <Typography className={classes.projectDate}>
                      {project.date}
                    </Typography>
                  </div>
                </Button>
              </NavLink>
            ) : (
              <a href={project.pageUrl} target="_blank" rel="noreferrer">
                <Button className={classes.link}>
                  <div>
                    <div className={classes.projectImage}>
                      <img src={project.imgUrl} alt={project.name} />
                    </div>
                    <Typography className={classes.projectName}>
                      {project.name}
                    </Typography>
                    <Typography className={classes.projectDate}>
                      {project.date}
                    </Typography>
                  </div>
                </Button>
              </a>
            )}
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ViewMoreProjects;
