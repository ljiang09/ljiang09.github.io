import { useState } from "react";
import { Button, Menu, MenuItem } from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { useNavigate } from "react-router-dom";
import { projects } from "../../../components/Projects/projects_data.js";

import useStyles from "./styles.js";

const NavBar = () => {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const classes = useStyles({ open });

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleProjectsOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProjectsClose = () => {
    setAnchorEl(null);
  };

  const handleProjectsClick = (pageUrl) => {
    navigate(`/subpages/${pageUrl}`);
  };

  return (
    <div className={classes.root}>
      <Button onClick={handleHomeClick} className={classes.homeBtn}>
        Lily Jiang
      </Button>
      <Button onClick={handleProjectsOpen} className={classes.projectsBtn}>
        Projects
        <KeyboardArrowDownIcon className={classes.icon} />
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
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
    </div>
  );
};

export default NavBar;
