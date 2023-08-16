import { useState } from "react";
import useStyles from "./styles.js";
import { Typography, Tabs, Tab, Grid, Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { TAGS, projects } from "./projects_data.js";

const Projects = () => {
  const classes = useStyles();

  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, tabIndex) => {
    setTabIndex(tabIndex);
  };

  return (
    <div className={classes.root}>
      <Typography className={classes.header}>Projects</Typography>
      <Tabs value={tabIndex} onChange={handleTabChange}>
        <Tab label="All" />
        <Tab label={TAGS.SOFTWARE} />
        <Tab label={TAGS.IOS} />
        <Tab label={TAGS.FIRMWARE} />
        <Tab label={TAGS.MECHANICAL} />
        <Tab label={TAGS.COURSE_PROJECTS} />
      </Tabs>

      <Grid container className={classes.projects}>
        {projects.map((project) => (
          <Grid item>
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
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Projects;
