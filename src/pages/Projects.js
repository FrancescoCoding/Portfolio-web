import ColourSelector from "../components/UI/ColourSelector";
import Navbar from "../components/UI/Navbar";
import ProjectsContent from "../components/content/ProjectsContent";
import Sidebar from "../components/UI/Sidebar";
import { AnimatedArrow } from "../assets/Animations";
import ProjectsList from "../settings/WorksList";
import { Helmet } from "react-helmet";

const Projects = () => {
  return (
    <>
      <Helmet>
        <title>Projects - Francesco Gruosso</title>
      </Helmet>
      <Navbar />
      <ProjectsContent projects={ProjectsList} />
      <Sidebar concatContent={<AnimatedArrow />} />
      <ColourSelector />
    </>
  );
};

export default Projects;
