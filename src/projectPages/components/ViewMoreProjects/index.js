import { Typography } from "@material-ui/core";
import useStyles from "./styles.js";
import { TAGS } from "../../../components/Projects/projects_data.js";

const ViewMoreProjects = ({ type }) => {
  const classes = useStyles();

  switch (type) {
    case TAGS.SOFTWARE:
    case TAGS.IOS:
      break;
    case TAGS.ROBOTICS:
      break;
    case TAGS.MECHANICAL:
      break;
    case TAGS.COURSE_PROJECTS:
      break;
    default:
      break;
  }

  return (
    <div className={classes.root}>
      <Typography className={classes.header}>
        View Other {type} Projects
      </Typography>
    </div>
  );
};

export default ViewMoreProjects;
