import { IoLogoIonic } from "react-icons/io";
import IconTooltip from "../components/UI/IconTooltip";

import FraJS from "../assets/Logos/Javascript Icon.svg";
import FraReact from "../assets/Logos/React Icon.svg";
import FraHTML from "../assets/Logos/HTML5 Icon.svg";
import FraSass from "../assets/Logos/Sass Icon.svg";
import FraRedux from "../assets/Logos/Redux Icon.svg";
import FraggPlot2 from "../assets/Logos/ggPlot2 Icon.svg";
import FraRProject from "../assets/Logos/RProject Icon.svg";
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

// Helper function. Tooltips are anchored to the icon itself (IconTooltip),
// so they can't drift inside scrolling or fixed-position containers.
const createIcon = (tag, icon, tooltip) => {
  return {
    tag,
    icon: tooltip ? <IconTooltip text={tooltip}>{icon}</IconTooltip> : icon,
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
  <img src={FraReact} alt="React Logo" height={iconsSize} />,
  "JavaScript frontend development library"
);

export const reduxIcon = createIcon(
  "Redux",
  <img src={FraRedux} alt="Redux Logo" height={iconsSize} />,
  "Open-source JavaScript library for managing and centralising application state"
);

export const ionicIcon = createIcon(
  "Ionic",
  <IoLogoIonic color="#367CF7" size={iconsSize} />,
  "Open-source UI toolkit for building performant mobile apps"
);

export const sassIcon = createIcon(
  "Sass",
  <img src={FraSass} alt="Sass Logo" height={iconsSize} />,
  "Preprocessor scripting language that is compiled into Cascading Style Sheets"
);

export const GGPlotIcon = createIcon(
  "ggPlot2",
  <img src={FraggPlot2} alt="ggPlot2" height={iconsSize} />,
  "Open-source data visualisation package for the statistical programming language R"
);

export const rStudioIcon = createIcon(
  "R Project",
  <img src={FraRProject} alt="R Project Logo" height={iconsSize} />,
  "R is a programming language for statistical computing and graphics"
);

export const mongoDBIcon = createIcon(
  "MongoDB",
  <img src={MongoDB} alt="MongoDB" height={iconsSize} />,
  "Cross-platform document-oriented NoSQL database program"
);

export const expressIcon = createIcon(
  "express",
  <img src={ExpressIcon} alt="Express" height={iconsSize} />,
  "Minimal and flexible Node.js web application framework for web and mobile applications"
);

export const npmIcon = createIcon(
  "npm",
  <img src={NpmIcon} alt="npm" height={iconsSize} />,
  "Package manager for the JavaScript ecosystem"
);

export const typescriptIcon = createIcon(
  "TypeScript",
  <img src={TypeScript} alt="TypeScript" height={iconsSize} />,
  "Strongly typed programming language developed and maintained by Microsoft"
);

export const javaIcon = createIcon(
  "Java",
  <img src={JavaIcon} alt="Java" height={iconsSize} />,
  "General-purpose, class-based, object-oriented programming language"
);

export const vercelIcon = createIcon(
  "Vercel",
  <img src={VercelIcon} alt="Vercel" height={iconsSize} />,
  "Cloud platform for static sites, hybrid apps, and Serverless Functions"
);

export const puppeteerIcon = createIcon(
  "Puppeteer",
  <img src={PuppeteerIcon} alt="Puppeteer" height={iconsSize} />,
  "Node library providing a high-level API to control Chrome over the DevTools Protocol"
);

export const netlifyIcon = createIcon(
  "Netlify",
  <img src={NetlifyIcon} alt="Netlify" height={iconsSize} />,
  "Cloud computing company offering hosting and serverless backend services for static websites"
);
