import { IoLogoIonic } from "react-icons/io";

import FraJS from "../assets/Logos/Javascript Icon.svg";
import FraReact from "../assets/Logos/React Icon.svg";
import FraHTML from "../assets/Logos/HTML5 Icon.svg";
import FraSass from "../assets/Logos/Sass Icon.svg";
import FraRedux from "../assets/Logos/Redux Icon.svg";
import FraggPlot2 from "../assets/Logos/ggPlot2 Icon.svg";
import FraRProject from "../assets/Logos/RProject Icon.svg";
import ReactTooltip from "react-tooltip";
import FraCSS from "../assets/Logos/CSS3Icon.svg";

const iconsSize = "45px";

// Helper function
const createIcon = (tag, icon) => {
  return {
    tag,
    icon,
    id: tag + "Icon",
  };
};

const htmlIcon = createIcon(
  "HTML5",
  <img src={FraHTML} alt="HTML" height={iconsSize} />
);
const cssIcon = createIcon(
  "CSS3",
  <img src={FraCSS} alt="CSS" height={iconsSize} />
);
const JSIcon = createIcon(
  "JavaScript",
  <img src={FraJS} alt="JavaScript" height={iconsSize} />
);

const reactIcon = createIcon(
  "React",
  <>
    <img
      height={iconsSize}
      alt="React Logo"
      data-tip="react"
      data-for="react"
      src={FraReact}
    />
    <ReactTooltip id="react" effect="solid">
      <span>JavaScript frontend development library</span>
    </ReactTooltip>
  </>
);

const reduxIcon = createIcon(
  "Redux",
  <>
    <img
      data-tip="redux"
      data-for="redux"
      src={FraRedux}
      alt="Redux Logo"
      height={iconsSize}
    />
    <ReactTooltip id="redux" effect="solid">
      <span>
        Open-source JavaScript library for <br />
        managing and centralizing application state
      </span>
    </ReactTooltip>
  </>
);

const ionicIcon = createIcon(
  "Ionic",
  <>
    <IoLogoIonic
      color="#367CF7"
      data-tip="ionic"
      data-for="ionic"
      size={iconsSize}
    />
    <ReactTooltip id="ionic" effect="solid">
      <span>
        Open-source UI toolkit for <br />
        building performant mobile apps
      </span>
    </ReactTooltip>
  </>
);

const sassIcon = createIcon(
  "Sass",
  <>
    <img
      data-tip="sass"
      data-for="sass"
      src={FraSass}
      alt="Redux Logo"
      height={iconsSize}
    />
    <ReactTooltip id="sass" effect="solid">
      <span>
        Sass is a preprocessor scripting language that <br />
        is interpreted or compiled into Cascading Style Sheets
      </span>
    </ReactTooltip>
  </>
);

const GGPlotIcon = createIcon(
  "ggPlot2",
  <>
    <img
      src={FraggPlot2}
      data-tip="ggplot"
      data-for="ggplot"
      alt="ggPlot2"
      height={iconsSize}
    />
    <ReactTooltip id="ggplot" effect="solid">
      <span>
        Open-source data visualization package
        <br /> for the statistical programming language R
      </span>
    </ReactTooltip>
  </>
);

const rStudioIcon = createIcon(
  "R Project",
  <>
    <img
      data-tip="rstudio"
      data-for="rstudio"
      src={FraRProject}
      alt="Redux Logo"
      height={iconsSize}
    />
    <ReactTooltip id="rstudio" effect="solid">
      <span>
        R is a programming language <br />
        for statistical computing and graphics
      </span>
    </ReactTooltip>
  </>
);

let icons = {
  reactIcon,
  reduxIcon,
  ionicIcon,
  rStudioIcon,
  cssIcon,
  htmlIcon,
  JSIcon,
  sassIcon,
  GGPlotIcon,
};

export default icons;
