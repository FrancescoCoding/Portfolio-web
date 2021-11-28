import Navbar from "../components/UI/Navbar";
import Sidebar from "../components/UI/Sidebar";
import Transition from "../components/UI/Transition";
import ColourSelector from "../components/UI/ColourSelector";
import PortfolioContent from "../components/content/PortfolioContent";
import { Helmet } from "react-helmet";

const Portfolio = () => {
  return (
    <>
      <Helmet>
        <title>Francesco Gruosso - Frontend Developer</title>
      </Helmet>
      <Transition />
      <Navbar />
      <PortfolioContent astronautDelaySec={"1.2s"} />
      <ColourSelector />
      <Sidebar />
    </>
  );
};

export default Portfolio;
