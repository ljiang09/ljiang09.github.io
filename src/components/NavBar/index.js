import { useState } from "react";
import { Button, Menu, MenuItem } from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { useNavigate } from "react-router-dom";
import { projects } from "../Projects/projects_data.js";

import useStyles from "./styles.js";

const aboutMeReady = false;
const contactMeReady = false;
const architectureReady = false;

const NavBar = () => {
  const navigate = useNavigate();

  const [anchorElProjects, setAnchorElProjects] = useState(null);
  const openProjects = Boolean(anchorElProjects);
  const [anchorElPersonal, setAnchorElPersonal] = useState(null);
  const openPersonal = Boolean(anchorElPersonal);

  const classes = useStyles({ openProjects });

  const handleHomeClick = () => navigate("/");
  const handleProjectsOpen = (event) =>
    setAnchorElProjects(event.currentTarget);
  const handleProjectsClose = () => setAnchorElProjects(null);
  const handlePersonalOpen = (event) =>
    setAnchorElPersonal(event.currentTarget);
  const handlePersonalClose = () => setAnchorElPersonal(null);

  const handleProjectsClick = (pageUrl) => {
    if (pageUrl.includes("http")) {
      window.open(pageUrl, "_blank");
    } else {
      navigate(`/subpages/${pageUrl}`);
    }
  };

  const handleResume = () =>
    window.open(
      "https://drive.google.com/file/d/1orw7glJ5BwBvYZ005Y0DPEHXG1dIem8t/view?usp=sharing",
      "_blank"
    );
  const handleAboutMe = () => navigate("/aboutMe");
  const handleContactMe = () => navigate("/contactMe");
  const handleArt = () => navigate("/art");
  const handleArchitecture = () => navigate("/architecture");

  return (
    <div className={classes.root}>
      <Button onClick={handleHomeClick} className={classes.homeBtn}>
        Lily Jiang
      </Button>
      <div className={classes.buttons}>
        <Button onClick={handleProjectsOpen} className={classes.projectsBtn}>
          Projects
          <KeyboardArrowDownIcon className={classes.icon} />
        </Button>
        <Button onClick={handlePersonalOpen} className={classes.projectsBtn}>
          More
          <KeyboardArrowDownIcon className={classes.icon} />
        </Button>
      </div>
      <Menu
        anchorEl={anchorElProjects}
        open={openProjects}
        onClose={handleProjectsClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        getContentAnchorEl={null}
        className={classes.menu}
      >
        {projects.map((project) => (
          <MenuItem onClick={() => handleProjectsClick(project.pageUrl)}>
            {project.name}
          </MenuItem>
        ))}
      </Menu>
      <Menu
        anchorEl={anchorElPersonal}
        open={openPersonal}
        onClose={handlePersonalClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        getContentAnchorEl={null}
        className={classes.menu}
      >
        <MenuItem onClick={handleResume}>Resume</MenuItem>
        {aboutMeReady && <MenuItem onClick={handleAboutMe}>About Me</MenuItem>}
        {contactMeReady && (
          <MenuItem onClick={handleContactMe}>Contact Me</MenuItem>
        )}
        <MenuItem onClick={handleArt}>Art</MenuItem>
        {architectureReady && (
          <MenuItem onClick={handleArchitecture}>Architecture</MenuItem>
        )}
      </Menu>
    </div>
  );
};

export default NavBar;
