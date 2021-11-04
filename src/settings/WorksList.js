import icons from "./Icons.js";
const {
  rStudioIcon,
  reactIcon,
  ionicIcon,
  reduxIcon,
  htmlIcon,
  cssIcon,
  JSIcon,
  sassIcon,
  GGPlotIcon,
} = icons;

const PROJECTS = [
  {
    EN: {
      name: "Personal portfolio",
      description: `This very portfolio is a moderately big project. It utilizes several technologies, including:

      \u2022 A functional Figma wireframe & mockup
      \u2022 React / Redux Toolkit
      \u2022 Redux Persist
      \u2022 React Router
      \u2022 Custom hooks

      This web app does not utilize any CSS frameworks.
      For a full list, please check out the GitHub Repository's README file.
      `,
      tags: ["React", "Redux", "i18n"],
    },
    IT: {
      id: "p5",
      name: "Strumento Cardiaco",
      description:
        "Creato con dei modelli di machine learning per predirre certi parametri e malattie in persone con problemi al cuore.",
      tags: ["React", "Redux", "i18n"],
    },
    id: "p5",
    githubLink: "https://github.com/FrancescoCoding/Portfolio",
    image: "https://source.unsplash.com/xl2piFfdzyA/300x200",
    gallery: [],
    endpoint: "portfolio",
    icons: [htmlIcon, cssIcon, JSIcon, reactIcon, reduxIcon],
  },
  {
    EN: {
      name: "Tsunami Prediction Model",
      description: `This project required me to formulate, research and present a mathematical and probabilistic model of attributes relating to a computer simulation.

      This specific model can predict the damage amount calculated in Millions (GBP), and uses different methods to achieve so.
      
      Refer to the README for a more in-depth description.
      `,
      tags: ["RStudio", "ggPlot2"],
    },
    IT: {
      name: "Simulatore di Tsunami",
      description: `Questo progetto è nato per dimostrare la mia abilità nel lavorare con varie tecnologie, coordinare lavori in un gruppo, e creare una simulazione utilizzando vari modelli e statistica.`,
    },
    tags: ["RStudio", "ggPlot2"],
    id: "p1",
    demoLink: "https://www.francescogruosso.xyz/covid/app",
    githubLink:
      "https://github.com/FrancescoCoding/Tsunami-Damage-Prediction-Model",
    image: "https://source.unsplash.com/DPSrekwcAl0/300x200",
    endpoint: "tsunami-simulator",
    icons: [rStudioIcon, GGPlotIcon],
  },
  {
    EN: {
      name: "PlayList Project",
      description:
        "This project was meant to showcase my skill in working with React.",
      tags: ["React, Redux, JavaScript"],
    },
    IT: {
      name: "PlayList",
      description:
        "Questo progetto è nato per dimostrare la mia abilità di lavorare con React.",
      tags: ["React, Redux, JavaScript"],
    },
    id: "p2",
    githubLink: "https://github.com/",
    image:
      "https://images.unsplash.com/photo-1622074288753-f7649eab55ad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    endpoint: "playlist-project",
    icons: [htmlIcon, cssIcon, JSIcon, sassIcon],
  },
  {
    EN: {
      name: "COVID Tracker",
      description: `I created this project to teach myself the Ionic Framework.
        
        This app was built using HTML5, CSS3, vanilla JavaScript, Ionic, along with a public API.
        Further information can be found in the GitHub repository README.md file.`,
      tags: ["React, Redux, JavaScript"],
    },
    IT: {
      name: "COVID Tracker",
      description:
        "Quest'applicazione fornisce il corrente numero di morti, guarigioni, ed ammalati causati dalla pandemia COVID-19.",
      tags: ["React, Redux, JavaScript"],
    },
    id: "p3",
    githubLink: "https://github.com/FrancescoCoding/Covid-Tracker-Ionic-md-iOS",
    image: "https://source.unsplash.com/J-8ZxGgp0ik/300x200",
    endpoint: "covid-tracker",
    icons: [htmlIcon, cssIcon, JSIcon, ionicIcon],
  },
  {
    EN: {
      name: "Tangible Pain Diary",
      description: "",
      tags: ["University", "Team", "Agile"],
    },
    IT: {
      name: "Tangible - Diario per dolori cronici",
      description:
        "Creato per aiutare persone a comunicare con la propria famiglia e il proprio medico curante in modo veloce ed efficace.",
      tags: ["Università", "Agile"],
    },
    id: "p4",
    githubLink: "https://github.com/",
    image: "https://source.unsplash.com/300x200/?dark,pain",
    endpoint: "tangible-chronic-pain",
  },

  {
    EN: {
      name: "Cardiac Tool",
      description: "",
      tags: ["Spyder", "Python"],
    },
    IT: {
      name: "Strumento Cardiaco",
      description:
        "Creato con dei modelli di machine learning per predirre certi parametri e malattie in persone con problemi al cuore.",
      tags: ["Spyder", "Python"],
    },
    id: "p6",
    githubLink: "https://github.com/",
    image: "https://img.wallpapersafari.com/desktop/1920/1080/8/54/m2Sd5U.jpeg",
    endpoint: "cardiac-tool-2",
  },
  {
    EN: {
      name: "Smite Ocean",
      description: "",
      tags: ["University", "Team", "Agile"],
    },
    IT: {
      name: "Strumento Cardiaco",
      description:
        "Creato con dei modelli di machine learning per predirre certi parametri e malattie in persone con problemi al cuore.",
      tags: ["Università", "Agile"],
    },
    id: "p7",
    githubLink: "https://github.com/",
    image: "https://source.unsplash.com/300x200/?poseidon",
    endpoint: "cardiac-tool-3",
    tags: ["University", "Team", "Agile"],
  },
  {
    EN: {
      name: "SunRice Weather App",
      description: "",
      tags: ["University", "Team", "Agile"],
    },
    IT: {
      name: "Strumento Cardiaco",
      description:
        "Creato con dei modelli di machine learning per predirre certi parametri e malattie in persone con problemi al cuore.",
      tags: ["University", "Team", "Agile"],
    },
    id: "p8",
    githubLink: "https://github.com/",
    image: "https://source.unsplash.com/300x200/?sunrise",
    endpoint: "cardiac-tool",
  },
  {
    EN: {
      name: "Cardiac Tool",
      description: "",
      tags: ["University", "Team", "Agile"],
    },
    IT: {
      name: "Strumento Cardiaco",
      description:
        "Creato con dei modelli di machine learning per predirre certi parametri e malattie in persone con problemi al cuore.",
      tags: ["Università", "Agile"],
    },
    id: "p9",
    githubLink: "https://github.com/",
    image: "https://source.unsplash.com/300x200/?purple,flower",
    endpoint: "cardiac-tool",
  },
  {
    EN: {
      name: "Cardiac Tool",
      description: "",
      tags: ["University", "Team", "Agile"],
    },
    IT: {
      name: "Strumento Cardiaco",
      description:
        "Creato con dei modelli di machine learning per predirre certi parametri e malattie in persone con problemi al cuore.",
      tags: ["Università", "Agile"],
    },
    id: "p10",
    githubLink: "https://github.com/",
    image: "https://source.unsplash.com/300x200/?dark,woods",
    endpoint: "cardiac-tool",
  },
  {
    EN: {
      name: "Cardiac Tool",
      description: "",
      tags: ["University", "Team", "Agile"],
    },
    IT: {
      name: "Strumento Cardiaco",
      description:
        "Creato con dei modelli di machine learning per predirre certi parametri e malattie in persone con problemi al cuore.",
      tags: ["Università", "Agile"],
    },
    id: "p11",
    githubLink: "https://github.com/",
    image: "https://source.unsplash.com/300x200/?dark,forest",
    endpoint: "cardiac-tool",
  },
];

export default PROJECTS;
