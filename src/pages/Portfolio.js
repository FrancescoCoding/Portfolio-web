import Navbar from "../components/UI/Navbar";
import Sidebar from "../components/UI/Sidebar";
import Transition from "../components/UI/Transition";
import ColourSelector from "../components/UI/ColourSelector";
import PortfolioContent from "../components/content/PortfolioContent";

const Portfolio = () => {
  return (
    <>
      <Transition />
      <Navbar />
      <PortfolioContent astronautDelaySec={"1s"} />
      <ColourSelector />
      <Sidebar />
    </>
  );
};

export default Portfolio;
