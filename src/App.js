import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import theme from "./theme.js";

import useStyles from "./styles.js";
import Intro from "./components/Intro";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills/index.js";
import Projects from "./components/Projects/index.js";

import AutonomousRobot from "./projectPages/AutonomousRobot/index.js";

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <Intro />
          <AboutMe />
          <div className={classes.skillsBackground}>
            <Skills
              style={{
                margin: "auto",
              }}
            />
          </div>
          <Projects />
        </div>
        <Routes>
          <Route
            exact
            path="/subpages/autonomousRobot"
            element={<AutonomousRobot />}
          />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
