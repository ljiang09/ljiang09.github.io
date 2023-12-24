import { useState } from "react";
import NavBar from "../../components/NavBar";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import theme from "../../theme.js";
import HoverableArt from "./HoverableArt";
import {
  BookstoreDrawing,
  BookstoreUnfinished,
  BostonBuilding,
  BostonBuildingUnfinished,
  JapaneseCastle,
  Kyoto,
  KyotoUnfinished,
  NMNF,
  RamenShopColored,
  RamenShopUncolored,
  RedRoof,
  RedRoofUnfinished,
  TalaveraShopColored,
  TalaveraShopUncolored,
} from "./media/index.js";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    paddingTop: "60px",
    margin: 0,
    background: theme.palette.background.tan,
    paddingBottom: "100px",
    height: "calc(100vh - 240px)",
    overflow: "scroll",
  },
  title: {
    fontSize: "40px",
    fontWeight: "bold",
  },
  images: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "30px",
    width: "90vw",
    "& img": {
      border: "1px solid black",
      height: "70vh",
    },
  },
  loading: {
    position: "absolute",
    top: "80px",
    left: "0",
    width: "100%",
    height: "calc(100vh - 80px)",
    background: theme.palette.background.tan,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

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
          <HoverableArt
            src={BookstoreDrawing}
            hoverSrc={BookstoreUnfinished}
            alt="Bookstore Drawing"
            // onLoad={() => setLoading(loading + 1)}
          />
          <HoverableArt
            src={NMNF}
            alt="No Mourners, No Funerals"
            onLoad={() => setLoading(loading + 1)}
          />
          <HoverableArt
            src={RamenShopColored}
            hoverSrc={RamenShopUncolored}
            alt="Ramen Shop"
            onLoad={() => setLoading(loading + 1)}
          />
          <HoverableArt
            src={BostonBuilding}
            hoverSrc={BostonBuildingUnfinished}
            alt="Boston Building"
            onLoad={() => setLoading(loading + 1)}
          />
          <HoverableArt
            src={JapaneseCastle}
            alt="Japanese Castle"
            onLoad={() => setLoading(loading + 1)}
          />
          <HoverableArt
            src={Kyoto}
            hoverSrc={KyotoUnfinished}
            alt="Kyoto"
            onLoad={() => setLoading(loading + 1)}
          />
          <HoverableArt
            src={RedRoof}
            hoverSrc={RedRoofUnfinished}
            alt="Red Roof"
            onLoad={() => setLoading(loading + 1)}
          />
          <HoverableArt
            src={TalaveraShopColored}
            hoverSrc={TalaveraShopUncolored}
            alt="Talavera Shop"
            onLoad={() => setLoading(loading + 1)}
          />
        </div>
      </div>

      {loading && <div className={classes.loading}>Loading...</div>}
    </>
  );
};

export default ArtHomePage;
