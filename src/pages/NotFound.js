import { AnimatedArrow } from "../assets/Animations";
import NotFoundContent from "../components/content/NotFoundContent";
import ColourSelector from "../components/UI/ColourSelector";
import Sidebar from "../components/UI/Sidebar";
import { Helmet } from "react-helmet";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 Error - Francesco Gruosso</title>
      </Helmet>
      <NotFoundContent />
      <Sidebar concatContent={<AnimatedArrow />} />
      <ColourSelector />
    </>
  );
};

export default NotFound;
