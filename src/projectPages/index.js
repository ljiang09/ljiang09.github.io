import { useParams } from "react-router-dom";
import { Typography, Button } from "@material-ui/core";

import { projects } from "../components/Projects/projects_data";
import NavBar from "../components/NavBar";
import Skills from "./components/SkillsSection";
import ViewMoreProjects from "./components/ViewMoreProjects";
import useStyles from "./styles";

const ProjectPages = () => {
  const { subpage } = useParams();

  const content = projects.find((project) => project.pageUrl === subpage);
  const data = content?.content;

  const classes = useStyles();

  return (
    <div>
      <NavBar />
      {data ? (
        <div className={classes.root}>
          <Typography className={classes.title}>{data.pageHeader}</Typography>
          <Typography className={classes.date}>{data.date}</Typography>

          <div className={classes.content}>
            {data.skills && (
              <>
                <Typography className={classes.header2}>Skills Used</Typography>
                <Skills skills={data.skills} />
              </>
            )}
            {data.projectOverview && (
              <>
                <Typography className={classes.header2}>
                  Project Overview
                </Typography>
                <Typography className={classes.text}>
                  {data.projectOverview}
                </Typography>
              </>
            )}
            <div className={classes.buttons}>
              {data.repoLink && (
                <a
                  href={data.repoLink}
                  target="_blank"
                  rel="noreferrer"
                  className={classes.repoButton}
                >
                  <Button>View the GitHub Repo</Button>
                </a>
              )}
              {data.additionalLink && (
                <a
                  href={data.additionalLink}
                  target="_blank"
                  rel="noreferrer"
                  className={classes.repoButton}
                >
                  <Button>Read More</Button>
                </a>
              )}
            </div>
            {data.goals && (
              <>
                <Typography className={classes.header2}>Goals</Typography>
                {data.goals.map((goal) => (
                  <Typography className={classes.text}>{goal}</Typography>
                ))}
              </>
            )}
            {data.notableFeatures && (
              <>
                <Typography className={classes.header2}>
                  Notable Features
                </Typography>
                {data.notableFeatures.map((feature) => (
                  <Typography className={classes.text}>{feature}</Typography>
                ))}
              </>
            )}
            {data.contributions && (
              <>
                <Typography className={classes.header2}>
                  Contributions
                </Typography>
                {data.contributions.map((contribution) => (
                  <Typography className={classes.text}>
                    {contribution}
                  </Typography>
                ))}
              </>
            )}
            {data.deliverables && (
              <>
                <Typography className={classes.header2}>
                  Project Deliverable
                </Typography>
                {data.deliverables.map((deliverable) => (
                  <>
                    <Typography className={classes.header3}>
                      {deliverable.sectionHeader}
                    </Typography>
                    {deliverable.sectionContent?.map((content) => (
                      <Typography className={classes.text}>
                        {content}
                      </Typography>
                    ))}
                  </>
                ))}
              </>
            )}

            <ViewMoreProjects type={data.type} />
          </div>
        </div>
      ) : (
        "No Page Found"
      )}
    </div>
  );
};

export default ProjectPages;
