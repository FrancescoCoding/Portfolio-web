import Transition from "../components/UI/Transition";
import Navbar from "../components/UI/Navbar";
import ProjectsContent from "../components/content/ProjectsContent";
import ProjectsList from "../settings/WorksList";
import Sidebar from "../components/UI/Sidebar";
import { AnimatedArrow } from "../assets/Animations";
import ColourSelector from "../components/UI/ColourSelector";

const Projects = () => {
  return (
    <>
      <Transition reverse />
      <Navbar />
      <ProjectsContent projects={ProjectsList} />
      <Sidebar concatContent={<AnimatedArrow />} />
      <ColourSelector />
    </>
  );
};

export default Projects;
