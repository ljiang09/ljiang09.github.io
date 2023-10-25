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
    minHeight: "100vh",
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
}));

const ArtHomePage = () => {
  const classes = useStyles();

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
          />
          <HoverableArt src={NMNF} alt="No Mourners, No Funerals" />
          <HoverableArt
            src={RamenShopUncolored}
            hoverSrc={RamenShopColored}
            alt="Ramen Shop"
          />
          <HoverableArt
            src={BostonBuilding}
            hoverSrc={BostonBuildingUnfinished}
            alt="Boston Building"
          />
          <HoverableArt src={JapaneseCastle} alt="Japanese Castle" />
          <HoverableArt src={Kyoto} hoverSrc={KyotoUnfinished} alt="Kyoto" />
          <HoverableArt
            src={RedRoof}
            hoverSrc={RedRoofUnfinished}
            alt="Red Roof"
          />
        </div>
      </div>
    </>
  );
};

export default ArtHomePage;
