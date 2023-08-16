import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import theme from "./theme.js";

import useStyles from "./styles.js";
import Intro from "./components/Intro";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills/index.js";
import Projects from "./components/Projects/index.js";

import ProjectPages from "./projectPages/index.js";

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route
            exact
            path=""
            element={
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
            }
          />
          <Route path="/subpages/:subpage" element={<ProjectPages />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
