import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import theme from "../../theme.js";

const useStyles = makeStyles(() => ({
  root: {
    boxShadow: ({ hovered }) =>
      hovered ? "0px 0px 5px gray" : "0px 0px 10px gray",
    padding: 0,
  },
}));

const HoverableArt = ({ src, hoverSrc = null, alt }) => {
  const [hovered, setHovered] = useState(false);
  const classes = useStyles({ hovered });

  return (
    <Button
      className={classes.root}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={hoverSrc && hovered ? hoverSrc : src} alt={alt} />
    </Button>
  );
};

export default HoverableArt;
