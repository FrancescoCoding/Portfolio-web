import Navbar from "../components/UI/Navbar";
import NotFoundContent from "../components/content/NotFoundContent";
import ColourSelector from "../components/UI/ColourSelector";
import Sidebar from "../components/UI/Sidebar";
import { useSelector } from "react-redux";

import { AnimatedArrow } from "../assets/Animations/Animations";

const NotFound = () => {
  const storeLanguage = useSelector(state => state.languages.language);
  const isEnglish = storeLanguage === "EN";

  return (
    <>
      <Navbar />
      <NotFoundContent
        message={
          isEnglish
            ? "Uh-oh. Something went wrong..."
            : "La pagina web non è disponibile"
        }
      />
      <Sidebar concatContent={<AnimatedArrow />} />
      <ColourSelector />
    </>
  );
};

export default NotFound;
