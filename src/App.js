import useStyles from "./styles.js";
import Intro from "./components/Intro";
import AboutMe from "./components/AboutMe";

function App() {
  const classes = useStyles();

  return (
    <div style={{ margin: 0 }}>
      <Intro />
      <AboutMe />
    </div>
  );
}

export default App;
