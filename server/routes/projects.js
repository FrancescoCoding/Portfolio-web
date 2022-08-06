const express = require("express");
const router = express.Router();

const projects = [
  {
    EN: {
      name: "Personal portfolio",
      description: `This very portfolio is a moderately big project. It utilizes several technologies, including:

    \u2022 React with Redux Toolkit for State management and Redux Persist for offline storage
    \u2022 React Router for navigation
    \u2022 Custom hooks for custom keyboard shortcuts

    This web app does not utilize any CSS frameworks.
    For a full list, please check out the GitHub Repository's README file.
    `,
      tags: ["React, Redux, i18n"],
      short: "React based portfolio you are looking at right now :)",
    },
    IT: {
      id: "p5",
      name: "Portfolio personale",
      description:
        "Creato con dei modelli di machine learning per predirre certi parametri e malattie in persone con problemi al cuore.",
      short: "Portfolio creato con React, lo stai utilizzando ora :)",
    },
    id: "p5",
    githubLink: "https://github.com/FrancescoCoding/Portfolio",
    // image: portfolioThumbnail600w,
    endpoint: "portfolio",
    // icons: [htmlIcon, cssIcon, JSIcon, reactIcon, reduxIcon],
  },
  {
    EN: {
      name: "Tsunami Prediction Model",
      description: `This project required me to formulate, research and present a mathematical and probabilistic model of attributes relating to a computer simulation.

    This specific model can predict the damage amount calculated in Millions (GBP), and uses different methods to achieve so.
    
    Refer to the README for a more in-depth description.
    `,
      tags: ["RStudio, ggPlot2"],
      short: "A mathematical model that predicts the damage of a tsunami",
    },
    IT: {
      name: "Simulatore di Tsunami",
      description: `Questo progetto è nato per dimostrare la mia abilità nel lavorare con varie tecnologie, coordinare lavori in un gruppo, e creare una simulazione utilizzando vari modelli e statistica.`,
      short:
        "Un modello matematico che calcola i danni provocati da uno tsunami",
    },
    tags: ["RStudio, ggPlot2"],
    id: "p1",
    demoLink: "https://www.francescogruosso.xyz/covid/app",
    githubLink:
      "https://github.com/FrancescoCoding/Tsunami-Damage-Prediction-Model",
    // image: tsunamiThumbnail600w,
    endpoint: "tsunami-simulator",
    // icons: [rStudioIcon, GGPlotIcon],
  },
  {
    EN: {
      name: "PlayList Project",
      description:
        "This project was meant to showcase my skill in working with React.",
      tags: ["React, Redux, JavaScript"],
      short: "A simple playlist app",
    },
    IT: {
      name: "PlayList",
      description:
        "Questo progetto è nato per dimostrare la mia abilità di lavorare con React.",
      tags: ["React, Redux, JavaScript"],
      short: "Una semplice app per la gestione di playlist",
    },
    id: "p2",
    githubLink: "https://github.com/",
    // image: playlistThumbnail600w,
    endpoint: "playlist-project",
    // icons: [htmlIcon, cssIcon, JSIcon, sassIcon],
  },
  {
    EN: {
      name: "COVID Tracker",
      description: `I created this project to teach myself the Ionic Framework.
      
      This app was built using HTML5, CSS3, vanilla JavaScript, Ionic, along with a public API.
      Further information can be found in the GitHub repository README.md file.`,
      tags: ["React, Redux, JavaScript"],
      short: "A COVID-19 tracker. \nEnter your country to see the stats!",
    },
    IT: {
      name: "COVID Tracker",
      description:
        "Quest'applicazione fornisce il corrente numero di morti, guarigioni, ed ammalati causati dalla pandemia COVID-19.",
      tags: ["React, Redux, JavaScript"],
      short: "Un tracker per la pandemia COVID-19",
    },
    id: "p3",
    githubLink: "https://github.com/FrancescoCoding/Covid-Tracker-Ionic-md-iOS",
    // image: covidTrackerThumbnail600w,
    endpoint: "covid-tracker",
    // icons: [htmlIcon, cssIcon, JSIcon, ionicIcon],
  },
  {
    EN: {
      name: "Tangible Pain Diary",
      description: "",
      tags: ["University, Team, Agile"],
      short: "Tangible is a pain diary that helps you log and track your pain",
    },
    IT: {
      name: "Tangible",
      description:
        "Creato per aiutare persone a comunicare con la propria famiglia e il proprio medico curante in modo veloce ed efficace.",
      tags: ["Università", "Agile"],
      short: "Tangible è un diario che ti permette di registrare i tuoi dolori",
    },
    id: "p4",
    githubLink: "https://github.com/",
    // image: tangibleThumbnail600w,
    endpoint: "tangible-chronic-pain",
  },

  {
    EN: {
      name: "Harvest Time",
      description: "",
      tags: ["Node, Puppeteer"],
      short: "Harvest Time is a web scraper that scrapes data from the web",
    },
    IT: {
      name: "Harvest Time",
      description:
        "Creato con dei modelli di machine learning per predirre certi parametri e malattie in persone con problemi al cuore.",
      tags: ["Node, Puppeteer"],
      short: "Harvest Time è un web scraper che estrae dati dal web",
    },
    id: "p6",
    githubLink: "https://github.com/FrancescoCoding/Harvest-Time",
    // image: harvestTimeThumbnail600w,
    endpoint: "cardiac-tool-2",
  },
  {
    EN: {
      name: "Smite Ocean",
      description: "",
      tags: ["University, Team, Agile"],
      short: "-",
    },
    IT: {
      name: "Strumento Cardiaco",
      description:
        "Creato con dei modelli di machine learning per predirre certi parametri e malattie in persone con problemi al cuore.",
      tags: ["Università", "Agile"],
      short: "-",
    },
    id: "p7",
    githubLink: "https://github.com/",
    // image: "https://source.unsplash.com/600x400/?poseidon",
    endpoint: "cardiac-tool-3",
    tags: ["University", "Team", "Agile"],
  },
  {
    EN: {
      name: "SunRice Weather App",
      description: "",
      tags: ["University, Team, Agile"],
      short: "SunRice is a weather app that shows the weather in your area",
    },
    IT: {
      name: "Strumento Cardiaco",
      description:
        "Creato con dei modelli di machine learning per predirre certi parametri e malattie in persone con problemi al cuore.",
      tags: ["University, Team, Agile"],
      short:
        "SunRice è una app che mostra il meteo in tempo reale in una zona a tua scelta",
    },
    id: "p8",
    githubLink: "https://github.com/",
    // image:
    // "https://images.unsplash.com/photo-1607699330031-b8552f3ce4f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1972&q=80",
    endpoint: "cardiac-tool",
  },
  {
    EN: {
      name: "Cardiac Tool",
      description: "",
      tags: ["University, Team, Agile"],
      short: "-",
    },
    IT: {
      name: "Strumento Cardiaco",
      description:
        "Creato con dei modelli di machine learning per predirre certi parametri e malattie in persone con problemi al cuore.",
      tags: ["Università, Agile"],
      short: "-",
    },
    id: "p9",
    githubLink: "https://github.com/",
    // image: "https://source.unsplash.com/600x400/?purple,flower",
    endpoint: "cardiac-tool",
  },
  {
    EN: {
      name: "Cardiac Tool",
      description: "",
      tags: ["University, Team, Agile"],
      short: "-",
    },
    IT: {
      name: "Strumento Cardiaco",
      description:
        "Creato con dei modelli di machine learning per predirre certi parametri e malattie in persone con problemi al cuore.",
      tags: ["Università, Agile"],
      short: "-",
    },
    id: "p10",
    githubLink: "https://github.com/",
    // image: "https://source.unsplash.com/600x400/?dark,woods",
    endpoint: "cardiac-tool",
  },
  {
    EN: {
      name: "Cardiac Tool",
      description: "",
      tags: ["University, Team, Agile"],
      short: "-",
    },
    IT: {
      name: "Strumento Cardiaco",
      description:
        "Creato con dei modelli di machine learning per predirre certi parametri e malattie in persone con problemi al cuore.",
      tags: ["Università, Agile"],
      short: "-",
    },
    id: "p11",
    githubLink: "https://github.com/",
    // image: "https://source.unsplash.com/600x400/?dark,forest",
    endpoint: "cardiac-tool",
  },
];

// make projects into json
const projectsJSON = JSON.stringify(projects);

router.get("/", (req, res) => {
  res.json(projectsJSON);
});

module.exports = router;

// router
//   .post("/users", function (req, res) {
//     var user = new User();
//     user.username = req.body.username;
//     user.password = req.body.password;
//     user.email = req.body.email;
//     user.save(function (err) {
//       if (err) res.send(err);
//       res.json({ message: "User created!" });
//     });
//   })
//   .get("/users", function (req, res) {
//     User.find(function (err, users) {
//       if (err) res.send(err);
//       res.json(users);
//     }).sort({ _id: -1 });
//   })
//   .get("/users/:user_id", function (req, res) {
//     User.findById(req.params.user_id, function (err, user) {
//       if (err) res.send(err);
//       res.json(user);
//     }).sort({ _id: -1 });
//   })
//   .put("/users/:user_id", function (req, res) {
//     User.findById(req.params.user_id, function (err, user) {
//       if (err) res.send(err);
//       user.username = req.body.username;
//       user.password = req.body.password;
//       user.email = req.body.email;
//       user.save(function (err) {
//         if (err) res.send(err);
//         res.json({ message: "User updated!" });
//       });
//     }).sort({ _id: -1 });
//   })
//   .delete("/users/:user_id", function (req, res) {
//     User.remove(
//       {
//         _id: req.params.user_id,
//       },
//       function (err, user) {
//         if (err) res.send(err);
//         res.json({ message: "Successfully deleted" });
//       }
//     ).sort({ _id: -1 });
//   })
//   .delete("/users", function (req, res) {
//     User.remove({}, function (err, user) {
//       if (err) res.send(err);
//       res.json({ message: "Successfully deleted" });
//     }).sort({ _id: -1 });
//   });
