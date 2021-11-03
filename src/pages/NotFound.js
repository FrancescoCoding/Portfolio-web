import { AnimatedArrow } from "../assets/Animations";
import NotFoundContent from "../components/content/NotFoundContent";
import ColourSelector from "../components/UI/ColourSelector";
import Sidebar from "../components/UI/Sidebar";

const NotFound = () => {
  return (
    <>
      <NotFoundContent />
      <Sidebar concatContent={<AnimatedArrow />} />
      <ColourSelector />
    </>
  );
};

export default NotFound;
