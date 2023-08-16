import { useParams } from "react-router-dom";
import { projects } from "../components/Projects/projects_data";
import NavBar from "./components/NavBar";

const ProjectPages = () => {
  const { subpage } = useParams();

  const content = projects.find((project) => project.pageUrl === subpage);

  return (
    <div>
      <NavBar />
      {content?.content ?? "No Page Found"}
    </div>
  );
};

export default ProjectPages;
