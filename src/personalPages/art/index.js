import NavBar from "../../components/NavBar";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import theme from "../../theme.js";
import {
  BookstoreDrawing,
  BostonBuilding,
  JapaneseCastle,
  Kyoto,
  NMNF,
  RamenShopColored,
  RamenShopUncolored,
  RedRoof,
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
      boxShadow: "0px 0px 10px gray",
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
          <img src={BookstoreDrawing} alt="Bookstore Drawing" />
          <img src={NMNF} alt="Six of Crows" />
          {/* TODO: make uncolored appear on hover */}
          <img src={RamenShopUncolored} alt="Ramen Shop Uncolored" />
          <img src={RamenShopColored} alt="Ramen Shop Colored" />
          <img src={BostonBuilding} alt="Boston Building" />
          <img src={JapaneseCastle} alt="Japanese Castle" />
          <img src={Kyoto} alt="Kyoto" />
          <img src={RedRoof} alt="Red Roof" />
        </div>
      </div>
    </>
  );
};

export default ArtHomePage;
