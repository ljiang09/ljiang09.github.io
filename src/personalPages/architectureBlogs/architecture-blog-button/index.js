import { Typography, Box } from "@material-ui/core";
import { NavLink } from "react-router-dom";

import { useStyles } from "./styles";

// {/* TODO: refactor this to make the image, on hover, show the name of the building */}
const ArchitectureBlogButton = ({ title, src, alt, to }) => {
  const classes = useStyles();

  return (
    <NavLink className={classes.root} to={to}>
      <>
        <Box component="img" src={src} alt={alt} />
        <Typography>{title}</Typography>
      </>
    </NavLink>
  );
};

export default ArchitectureBlogButton;
