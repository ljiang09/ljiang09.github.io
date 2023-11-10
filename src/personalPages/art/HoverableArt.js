import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import CrossfadeImage from "react-crossfade-image";

const useStyles = makeStyles(() => ({
  root: {
    boxShadow: ({ hovered }) =>
      hovered ? "0px 0px 5px gray" : "0px 0px 10px gray",
    padding: 0,
    transition: "all 0.25s ease",
  },
  crossFade: {
    padding: 0,
    lineHeight: 0,
  },
}));

const HoverableArt = ({ src, hoverSrc = null, alt }) => {
  const [hovered, setHovered] = useState(false);
  const classes = useStyles({ hovered, hoverSrc });

  return (
    <Button
      className={classes.root}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* <CrossfadeImage
        duration={200}
        src={hovered && hoverSrc ? hoverSrc : src}
        alt={alt}
      /> */}
      <img src={hovered && hoverSrc ? hoverSrc : src} alt={alt} />
    </Button>
  );
};

export default HoverableArt;
