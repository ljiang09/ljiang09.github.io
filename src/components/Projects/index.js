import { useState } from "react";
import { Typography, Tabs, Tab, Grid, Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";

import useStyles from "./styles.js";
import { TAGS, projects } from "./projects_data.js";

const tabOrder = [
  "All",
  TAGS.SOFTWARE,
  TAGS.IOS,
  TAGS.ROBOTICS,
  // TAGS.MECHANICAL,
  TAGS.COURSE_PROJECTS,
];

const Projects = () => {
  const classes = useStyles();

  const [tabIndex, setTabIndex] = useState(0);
  const [displayedProjects, setDisplayedProjects] = useState(projects);

  const handleTabChange = (event, tabIndex) => {
    setTabIndex(tabIndex);
    if (tabOrder[tabIndex] === "All") setDisplayedProjects(projects);
    else {
      setDisplayedProjects(
        projects.filter((project) => project.tags.includes(tabOrder[tabIndex]))
      );
    }
  };

  return (
    <div className={classes.root}>
      <Typography className={classes.header}>Projects</Typography>
      <Tabs
        value={tabIndex}
        onChange={handleTabChange}
        className={classes.tabs}
        TabIndicatorProps={{
          className: classes.tabIndicator,
        }}
      >
        {tabOrder.map((tab) => (
          <Tab label={tab} />
        ))}
      </Tabs>

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
              <a href={project.pageUrl}>
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

export default Projects;
