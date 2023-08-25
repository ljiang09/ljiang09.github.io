import { useState } from "react";
import { Button, Menu, MenuItem } from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { useNavigate } from "react-router-dom";
import { projects } from "../../../components/Projects/projects_data.js";

import useStyles from "./styles.js";

const personalInfoReady = false;

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

  const handleAboutMe = () => navigate("/aboutMe");

  const handleContactMe = () => navigate("/contactMe");

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
        {personalInfoReady && (
          <Button onClick={handlePersonalOpen} className={classes.projectsBtn}>
            More
            <KeyboardArrowDownIcon className={classes.icon} />
          </Button>
        )}
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
        <MenuItem onClick={handleAboutMe}>About Me</MenuItem>
        <MenuItem onClick={handleContactMe}>Contact Me</MenuItem>
      </Menu>
    </div>
  );
};

export default NavBar;
