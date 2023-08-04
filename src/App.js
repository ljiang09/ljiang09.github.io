import useStyles from "./styles.js";
import Intro from "./components/Intro";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills/index.js";

function App() {
  const classes = useStyles();

  return (
    <div style={{ margin: 0 }}>
      <Intro />
      <AboutMe />
      <Skills style={{ margin: "auto" }} />
    </div>
  );
}

export default App;
