import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import theme from "./theme.js";

import NavBar from "./components/NavBar/index.js";
import useStyles from "./styles.js";
import Intro from "./components/Intro";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills/index.js";
import Projects from "./components/Projects/index.js";

import ProjectPages from "./projectPages/index.js";
import {
  ContactMe as ContactMePage,
  AboutMe as AboutMePage,
  ArtHomePage,
  ArchitectureHomePage,
} from "./personalPages/index.js";

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
              <>
                <div className={classes.navBar}>
                  <NavBar />
                </div>
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
              </>
            }
          />
          <Route path="/subpages/:subpage" element={<ProjectPages />} />
          <Route path="/aboutMe" element={<AboutMePage />} />
          <Route path="/contactMe" element={<ContactMePage />} />
          <Route path="/art" element={<ArtHomePage />} />
          <Route path="/architecture" element={<ArchitectureHomePage />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
