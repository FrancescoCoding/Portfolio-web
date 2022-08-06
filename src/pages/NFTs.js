import Navbar from "../components/UI/Navbar";
import Transition from "../components/UI/Transition";
import ColourSelector from "../components/UI/ColourSelector";
import NFTsContent from "../components/content/NFTsContent";

const NFTs = () => {
  return (
    <>
      <Transition />
      <Navbar />
      <ColourSelector />
      <NFTsContent />
    </>
  );
};

export default NFTs;
