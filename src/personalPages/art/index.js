import { useState } from "react";
import NavBar from "../../components/NavBar";
import { Typography } from "@material-ui/core";
import HoverableArt from "./HoverableArt";
import { artData } from "./art-data";

import { useStyles } from "./styles";

const ArtHomePage = () => {
  const [loading, setLoading] = useState(true);

  const classes = useStyles();

  setTimeout(() => {
    setLoading(false);
  }, "1000");

  window.scrollTo(0, 0);

  return (
    <>
      <NavBar />
      <div className={classes.root}>
        <Typography className={classes.title}>Art</Typography>
        <div className={classes.images}>
          {artData.map((art) => (
            <HoverableArt
              src={art.src}
              hoverSrc={art.hoverSrc}
              alt={art.alt}
              key={art.alt}
            />
          ))}
        </div>
      </div>

      {loading && <div className={classes.loading}>Loading...</div>}
    </>
  );
};

export default ArtHomePage;
