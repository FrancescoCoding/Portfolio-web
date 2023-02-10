import Navbar from "../components/UI/Navbar";
import Transition from "../components/UI/Transition";
import ColourSelector from "../components/UI/ColourSelector";
import CVContent from "../components/content/CVContent";

const CV = () => {
  return (
    <>
      <Transition />
      <Navbar />
      <ColourSelector />
      <CVContent />
    </>
  );
};

export default CV;
