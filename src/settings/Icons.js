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
import MongoDB from "../assets/Logos/MongoDB Icon.svg";
import ExpressIcon from "../assets/Logos/Express Icon.svg";
import TypeScript from "../assets/Logos/Typescript Icon.svg";
import NpmIcon from "../assets/Logos/Npm Icon.svg";
import JavaIcon from "../assets/Logos/Java Icon.svg";
import AndroidIcon from "../assets/Logos/Android Icon.svg";
import PythonIcon from "../assets/Logos/Python Icon.svg";
import VercelIcon from "../assets/Logos/Vercel Icon.svg";
import PuppeteerIcon from "../assets/Logos/Puppeteer Icon.svg";
import NodeIcon from "../assets/Logos/Node Icon.svg";
import NetlifyIcon from "../assets/Logos/Netlify Icon.svg";

const iconsSize = "35px";

// Helper function
const createIcon = (tag, icon) => {
  return {
    tag,
    icon,
    id: tag + "Icon",
  };
};

export const htmlIcon = createIcon(
  "HTML5",
  <img src={FraHTML} alt="HTML" height={iconsSize} />
);
export const cssIcon = createIcon(
  "CSS3",
  <img src={FraCSS} alt="CSS" height={iconsSize} />
);
export const JSIcon = createIcon(
  "JavaScript",
  <img src={FraJS} alt="JavaScript" height={iconsSize} />
);
export const androidIcon = createIcon(
  "Android",
  <img src={AndroidIcon} alt="Android" height={iconsSize} />
);
export const pythonIcon = createIcon(
  "Python",
  <img src={PythonIcon} alt="Python" height={iconsSize} />
);
export const nodeIcon = createIcon(
  "NodeJs",
  <img src={NodeIcon} alt="Node" height={iconsSize} />
);

export const reactIcon = createIcon(
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

export const reduxIcon = createIcon(
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

export const ionicIcon = createIcon(
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

export const sassIcon = createIcon(
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

export const GGPlotIcon = createIcon(
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

export const rStudioIcon = createIcon(
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

export const mongoDBIcon = createIcon(
  "MongoDB",
  <>
    <img
      data-tip="mongodb"
      data-for="mongodb"
      src={MongoDB}
      alt="MongoDB"
      height={iconsSize}
    />
    <ReactTooltip id="mongodb" effect="solid">
      <span>
        MongoDB is a cross-platform document-oriented <br />
        database program. Classified as a NoSQL database program
      </span>
    </ReactTooltip>
  </>
);

export const expressIcon = createIcon(
  "express",
  <>
    <img
      data-tip="express"
      data-for="express"
      src={ExpressIcon}
      alt="Express"
      height={iconsSize}
    />
    <ReactTooltip id="express" effect="solid">
      <span>
        Express is a minimal and flexible Node.js web application <br />
        framework that provides a robust set of features for web and mobile
        applications
        <br />
      </span>
    </ReactTooltip>
  </>
);

export const npmIcon = createIcon(
  "npm",
  <>
    <img
      data-tip="npm"
      data-for="npm"
      src={NpmIcon}
      alt="npm"
      height={iconsSize}
    />
    <ReactTooltip id="npm" effect="solid">
      <span>npm is a package manager for the JavaScript ecosystem</span>
    </ReactTooltip>
  </>
);

export const typescriptIcon = createIcon(
  "TypeScript",
  <>
    <img
      data-tip="typescript"
      data-for="typescript"
      src={TypeScript}
      alt="TypeScript"
      height={iconsSize}
    />
    <ReactTooltip id="typescript" effect="solid">
      <span>
        TypeScript is strongly typed programming language <br />
        developed and maintained by Microsoft
      </span>
    </ReactTooltip>
  </>
);

export const javaIcon = createIcon(
  "Java",
  <>
    <img
      data-tip="java"
      data-for="java"
      src={JavaIcon}
      alt="Java"
      height={iconsSize}
    />
    <ReactTooltip id="java" effect="solid">
      <span>
        Java is a general-purpose programming language <br />
        that is class-based, object-oriented, and designed to have as few
        implementation dependencies as possible
      </span>
    </ReactTooltip>
  </>
);

export const vercelIcon = createIcon(
  "Vercel",
  <>
    <img
      data-tip="vercel"
      data-for="vercel"
      src={VercelIcon}
      alt="Vercel"
      height={iconsSize}
    />
    <ReactTooltip id="vercel" effect="solid">
      <span>
        Vercel is a cloud platform for static sites, <br />
        hybrid apps, and Serverless Functions
      </span>
    </ReactTooltip>
  </>
);

export const puppeteerIcon = createIcon(
  "Puppeteer",
  <>
    <img
      data-tip="puppeteer"
      data-for="puppeteer"
      src={PuppeteerIcon}
      alt="Puppeteer"
      height={iconsSize}
    />
    <ReactTooltip id="puppeteer" effect="solid">
      <span>
        Puppeteer is a Node library which provides a high-level API <br />
        to control Chrome or Chromium over the DevTools Protocol
      </span>
    </ReactTooltip>
  </>
);

export const netlifyIcon = createIcon(
  "Netlify",
  <>
    <img
      data-tip="netlify"
      data-for="netlify"
      src={NetlifyIcon}
      alt="Netlify"
      height={iconsSize}
    />
    <ReactTooltip id="netlify" effect="solid">
      <span>
        Netlify is a cloud computing company that offers hosting and serverless
        backend services for static websites
      </span>
    </ReactTooltip>
  </>
);
