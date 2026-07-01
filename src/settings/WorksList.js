import tsunamiThumbnail600w from "../assets/Thumbnails/Tsunami-thumbnail-600w.webp";
import aiThumbnail600w from "../assets/Thumbnails/AI-thumbnail-600w.webp";
import covidTrackerThumbnail600w from "../assets/Thumbnails/Covid-tracker-thumbnail-600w.webp";
import harvestTimeThumbnail600w from "../assets/Thumbnails/Harvest-time-thumbnail-600w.webp";
import ServerThumbnail600w from "../assets/Thumbnails/Server-thumbnail-600w.webp";
import EmojisThumbnail600w from "../assets/Thumbnails/Emojis-thumbnail-600w.webp";
import HydroFloraThumbnail600w from "../assets/Thumbnails/Hydroflora-Thumbnail-600w.webp";
import AlgorithmThumbnail600w from "../assets/Thumbnails/Algorithm-thumbnail-600w.webp";
import HackerThumbnail600w from "../assets/Thumbnails/Hacker-thumbnail-600w.webp";
import ChameliiThumbnail600w from "../assets/Thumbnails/Chameleon-thumbnail-600w.webp";
import AnonfeedbackThumbnail600w from "../assets/Thumbnails/Anonfeedback-thumbnail-600w.webp";


import {
  mongoDBIcon,
  expressIcon,
  npmIcon,
  typescriptIcon,
  javaIcon,
  androidIcon,
  pythonIcon,
  vercelIcon,
  nodeIcon,
  puppeteerIcon,
  JSIcon,
  cssIcon,
  htmlIcon,
  GGPlotIcon,
  ionicIcon,
  rStudioIcon,
  reactIcon,
  reduxIcon,
  netlifyIcon,
} from "./Icons.js";

const PROJECTS = [
  {
    EN: {
      name: "🦆 Personal portfolio (Web)",
      description: `
      <p>This very portfolio is a moderately big project. It utilizes several technologies, including: </p>
      <ul>
        <li><b>React</b> with <b>Redux Toolkit</b> for State management and <b>Redux Persist</b> for offline storage</li>
        <li><b>React Router</b> for navigation</li>
        <li>Custom hooks for custom keyboard shortcuts</li>
      </ul>
      <p>This web app does <b>not</b> utilize any CSS frameworks. Only pain and sweat 😊</p>
      <div style="text-align: center;">
        <img width="60%" src="https://media.giphy.com/media/3kxqq8cEMdREbprhR9/giphy.gif" alt="GIF of the portfolio in action" />
      </div>
      <br/>

      <p>For a full list of technologies, please check out the GitHub Repository's <a href="https://github.com/FrancescoCoding/Portfolio">README</a> file. </p>
      `,
      tags: ["React, Redux, i18n"],
      short:
        "React based portfolio you are looking at right now 😊 built with React, Redux and other technologies",
    },
    IT: {
      id: "p5",
      name: "🦆 Portfolio personale (Web)",
      description: `
      <p>Questo portfolio è un progetto di media entità. Utilizza diverse tecnologie, tra cui: </p> 

      <ul>
        <li><b>React</b> con <b>Redux Toolkit</b> per la gestione dello stato e <b>Redux Persist</b> per lo storage offline</li>
        <li><b>React Router</b> per la navigazione</li>
        <li>Custom hooks per le scorciatoie da tastiera</li>
      </ul>

      <p>Questa web app <b>non</b> utilizza alcun framework CSS. Solo dolore e sudore 😊</p>

      <div style="text-align: center;">
        <img width="60%" src="https://media.giphy.com/media/3kxqq8cEMdREbprhR9/giphy.gif" alt="GIF of the portfolio in action" />
      </div>
      <br/>
      
      <p>Per una lista più approfondita, controlla il file <a href="https://github.com/FrancescoCoding/Portfolio">README</a> del GitHub repo. </p>`,
      short: "Portfolio creato con React, lo stai utilizzando ora 😊",
    },
    id: "p5",
    githubLink: "https://github.com/FrancescoCoding/Portfolio",
    // image: portfolioThumbnail600w,
    image:
      "https://images.unsplash.com/photo-1553358814-833ee10c95a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    endpoint: "portfolio",
    order: 0,
    icons: [htmlIcon, cssIcon, JSIcon, reactIcon, reduxIcon, netlifyIcon],
  },
  {
    EN: {
      name: "🌊 Tsunami Prediction Model",
      description: `
      <p>This project required me to formulate, research and present\na mathematical and <b>probabilistic model</b> of attributes relating to a computer simulation.</p>

      
      <div style="text-align: center;">
        <img width="45%" src="https://media.giphy.com/media/XFITRJv9IMhi0/giphy.gif" alt="Bender Bending" />
      </div>
      <br/>

      <p>This specific model can predict the damage amount calculated in <b>Millions (GBP)</b>, and uses different methods to achieve so.</p>

      <p>Refer to the <a href="https://github.com/FrancescoCoding/Tsunami-Damage-Prediction-Model">README</a> for a more in-depth description.</p>
      `,
      tags: ["RStudio, ggPlot2"],
      short: "A mathematical model that predicts the damage of a tsunami",
    },
    IT: {
      name: "🌊 Simulatore di Tsunami",
      description: `<p>Questo progetto mi ha richiesto di formulare, ricercare e presentare un <b>modello probabilistico</b> e matematico di attributi relativi a una simulazione al computer. </p>

      <div style="text-align: center;">
        <img width="45%" src="https://media.giphy.com/media/XFITRJv9IMhi0/giphy.gif" alt="Bender Bending" />
      </div>
      <br/>
      <p>Questo modello specifico può prevedere l'ammontare del danno calcolato in <b>milioni di sterline (GBP)</b> e utilizza diversi metodi per farlo.</p>

      <p>Per ulteriori dettagli, consulta il file README nel GitHub repo. </p>
      `,
      short:
        "Un modello matematico che calcola i danni provocati da uno tsunami",
    },
    tags: ["RStudio, ggPlot2"],
    id: "p1",
    demoLink: "https://www.francescogruosso.xyz/covid/app",
    githubLink:
      "https://github.com/FrancescoCoding/Tsunami-Damage-Prediction-Model",
    image: tsunamiThumbnail600w,
    endpoint: "tsunami-computer-model",
    order: 2,
    icons: [rStudioIcon, GGPlotIcon],
  },
  {
    EN: {
      name: "🤖 easyGPT",
      description: `
      
      <h1 align="center">An Express server and npm module for ChatGPT</h1> <br/>
      
      <div style="text-align: center;">
        <img width="60%" src="https://media.giphy.com/media/pvAG72VNEeH0A/giphy.gif" alt="GIF of the portfolio in action" />
      </div>
      <p style="display: flex; justify-content: center;margin-bottom: 0px">
      <a href="https://github.com/FrancescoCoding/easyGPT/blob/main/LICENSE%20%F0%9F%A4%96" target="_blank"><img src="https://img.shields.io/github/license/francescocoding/easygpt" alt="Package License" style="margin-right: 5px;" /></a>
      <a href="https://www.npmjs.com/easygpt" target="_blank"><img src="https://img.shields.io/npm/v/easygpt" alt="NPM Version" style="margin-right: 5px;" /></a>
      <a href="https://easygpt.dev" target="_blank"><img src="https://img.shields.io/badge/docs-easygpt.dev-blue" alt="Documentation" style="margin-right: 5px;"/></a>
      <a href="https://www.npmjs.com/easygpt" target="_blank"><img src="https://img.shields.io/npm/dw/easygpt" alt="NPM Downloads" style="margin-right: 5px;" /></a>
      <a href="https://www.npmjs.com/easygpt" target="_blank"><img src="https://img.shields.io/maintenance/yes/2023" alt="Maintained" style="margin-right: 5px;" /></a>
      </p>
      <p><b>This project contains:</b></p>
      <ul>
        <li>An <b>npm module</b> to simplify the use of the server or any other Node.js project</li>
        <li>An <b>express server</b> that sends requests to the ChatGPT API with the module</li>
        <li>A <b>Postman collection</b> to test the server and the npm module</li>
      </ul>

        `,
      tags: ["Node, JavaScript"],
      short: "A ChatGPT Express server and npm module",
    },
    IT: {
      name: "🤖 easyGPT",
      description: `
      <h1 align="center">Un server Express e modulo npm per ChatGPT</h1>

      <div style="text-align: center;">
        <img width="60%" src="https://media.giphy.com/media/pvAG72VNEeH0A/giphy.gif" alt="GIF del portfolio in azione" />
      </div>

      <p style="display: flex; justify-content: center;">
        <a href="https://github.com/FrancescoCoding/easyGPT/blob/main/LICENSE%20%F0%9F%A4%96" target="_blank"><img src="https://img.shields.io/github/license/francescocoding/easygpt" alt="Package License" style="margin-right: 5px;" /></a>
        <a href="https://www.npmjs.com/easygpt" target="_blank"><img src="https://img.shields.io/npm/v/easygpt" alt="NPM Version" style="margin-right: 5px;" /></a>
        <a href="https://easygpt.dev" target="_blank"><img src="https://img.shields.io/badge/docs-easygpt.dev-blue" alt="Documentation" style="margin-right: 5px;"/></a>
        <a href="https://www.npmjs.com/easygpt" target="_blank"><img src="https://img.shields.io/npm/dw/easygpt" alt="NPM Downloads" style="margin-right: 5px;" /></a>
        <a href="https://www.npmjs.com/easygpt" target="_blank"><img src="https://img.shields.io/maintenance/yes/2023" alt="Maintained" style="margin-right: 5px;" /></a>
      </p>

      <p><b>Questo progetto contiene:</b></p>
      <ul>
        <li>Un <b>modulo npm</b> per semplificare l'uso del server o di qualsiasi altro progetto Node.js</li>
        <li>Un <b>server express</b> che invia richieste all'API ChatGPT con il modulo</li>
        <li>Una <b>raccolta Postman</b> per testare il server e il modulo npm</li>
      </ul>
      `,
      tags: ["Node, JavaScript"],
      short:
        "Modulo npm e server Express per semplificare l'utilizzo del ChatGPT API di OpenAI",
    },
    id: "p2",
    githubLink: "https://github.com/FrancescoCoding/easyGPT",
    extraLink: {
      buttonText: "Docs",
      link: "https://easygpt.dev",
    },
    image: aiThumbnail600w,
    endpoint: "easygpt",
    order: 1.5,
    icons: [expressIcon, npmIcon, JSIcon],
  },
  {
    EN: {
      name: "🦠 COVID Tracker",
      description: `
      <p>This project is a <b>COVID-19 tracker</b> that I created to teach myself the <b>Ionic Framework</b>. I used <b>HTML5</b>, <b>CSS3</b>, <b>vanilla JavaScript</b>, and <b>Ionic</b>, along with a <b>public API</b> to display <b>real-time data</b> on the number of cases, deaths, and recoveries worldwide and in individual countries.</p>

      <div style="text-align: center;">
        <img width="70%" src="https://media.giphy.com/media/MCAFTO4btHOaiNRO1k/giphy.gif" alt="GIF of the portfolio in action" />
      </div>
      <br/>

      <p>To build a <b>cross-platform mobile app</b>, I leveraged the power of the <b>Ionic Framework</b>. This helped me to create a user-friendly interface with a consistent design and experience across multiple platforms like <b>iOS</b>, <b>Android</b>, and the <b>web</b>.</p>
      <p>Further information can be found in the GitHub repository README.md file.</p>

      <p> <span style="font-size: 24px;">📌</span> Unfortunately, the <b>public API</b> that this COVID-19 tracker was using has been removed from public access. This means that the logic of the app needs to be reworked in order to retrieve data from a different source. Please keep this in mind if you plan to use or modify this project.
      </p>
          `,
      tags: ["HTML, CSS, JavaScript, Ionic"],
      short: "A COVID-19 tracker. \nEnter your country to see the stats!",
    },
    IT: {
      name: "🦠 COVID Tracker",
      description: `
      <p>Questo progetto è un <b>tracker COVID-19</b> che ho creato per imparare il <b>Framework Ionic</b>. Ho usato <b>HTML5</b>, <b>CSS3</b>, <b>vanilla JavaScript</b> e <b>Ionic</b>, insieme ad una <b>API pubblica</b> per visualizzare dati <b>in tempo reale</b> sul numero di casi, decessi e guariti in tutto il mondo e in singoli paesi.</p>
      <div style="text-align: center;">
        <img width="70%" src="https://media.giphy.com/media/MCAFTO4btHOaiNRO1k/giphy.gif" alt="GIF del portfolio in azione" />
      </div>
      <br/>

      <p>Per costruire un'app mobile cross-platform</b>, ho sfruttato la potenza del <b>Framework Ionic</b>.\n\nQuesto mi ha aiutato a creare un'interfaccia utente intuitiva con un design e un'esperienza coerenti su molteplici piattaforme come <b>iOS</b>, <b>Android</b> e <b>web</b>.</p>
      <p>Ulteriori informazioni possono essere trovate nel file README.md del repository GitHub.</p>
      <p> 📌 Purtroppo, l'<b>API pubblico</b> che questo tracker COVID-19 stava utilizzando è stata rimossa dall'accesso pubblico. Ciò significa che la logica dell'app deve essere modificata per recuperare dati da una fonte diversa. Per favore, tenere presente questo fatto se si intende utilizzare o modificare questo progetto.
      </p>
      `,
      tags: ["HTML, CSS, JavaScript, Ionic"],
      short:
        "Un'app per Android che traccia il numero di casi per la pandemia COVID-19",
    },
    id: "p3",
    githubLink: "https://github.com/FrancescoCoding/Covid-Tracker-Ionic-md-iOS",
    image: covidTrackerThumbnail600w,
    endpoint: "covid-tracker",
    order: 3,
    icons: [htmlIcon, cssIcon, JSIcon, ionicIcon],
  },
  {
    EN: {
      name: "🍄 Mushrooms Classification",
      description: `
      <div>
        <p>The project involves using a <b>Supervised Machine Learning</b> algorithm to classify mushroom samples as <b>edible</b> or <b>poisonous</b>.</p>
        
        <div style="text-align: center;">
          <img width="60%" src="https://media.giphy.com/media/vJ6LGDsUHG5RS/giphy.gif" alt="GIF of the portfolio in action" />
        </div>
        <br/>

        <p>The dataset used includes various features such as <b>cap shape</b> and <b>odor</b>, and the models implemented include <b>Logistic Regression</b>, <b>Decision Trees</b>, and <b>Random Forest</b>.</p>
      </div>`,
      tags: ["University, Python, Scikit-learn, Pandas, Numpy"],
      short:
        "A supervised Machine Learning project to classify mushrooms as edible or poisonous",
    },
    IT: {
      name: "🍄 Classificazione funghi con ML",
      description: `
      <div>
        <p>Il progetto prevede l'utilizzo di un algoritmo di <b>Machine Learning Supervisionato</b> per classificare campioni di funghi come <b>commestibili</b> o <b>velenosi</b>.</p>
        
        <div style="text-align: center;">
          <img width="60%" src="https://media.giphy.com/media/vJ6LGDsUHG5RS/giphy.gif" alt="GIF del portafoglio in azione" />
        </div>
        <br/>

        <p>Il dataset utilizzato include diverse caratteristiche come la <b>forma del cappello</b> e l'<b>odore</b>, e i modelli implementati includono la <b>Regressione Logistica</b>, gli <b>Alberi di Decisione</b> e il <b>Random Forest</b>.</p>
      </div>
      `,
      tags: ["Università, Python, Scikit-learn, Pandas, Numpy"],
      short:
        "Un progetto di Machine Learning per classificare funghi come commestibili o velenosi",
    },
    id: "p4",
    githubLink:
      "https://github.com/FrancescoCoding/Mushroom-Supervised-Machine-Learning-Classification",
    order: 4,
    image:
      "https://images.unsplash.com/photo-1611938700738-9228b326cf38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    endpoint: "tangible-chronic-pain",
    icons: [pythonIcon],
  },

  {
    EN: {
      name: "🌽 Harvest Time",
      description: `
      <p>Harvest Time is a web scraper that scrapes data from the web using Node.js and Puppeteer.</p>

      <div style="text-align: center;">
        <img width="60%" src="https://media.giphy.com/media/3orieOGI1gkpr1kaeA/giphy.gif" alt="GIF of the portfolio in action" />
      </div>
      <br/>
      `,
      tags: ["Node, Puppeteer"],
      short: `Harvest Time is a web scraper that scrapes data from the web using Node.js and Puppeteer.`,
    },
    IT: {
      name: "🌽 Harvest Time",
      description: `
      <p>Harvest Time è un web scraper che raccoglie dati dal web utilizzando Node.js e Puppeteer.</p>

      <div style="text-align: center;">
        <img width="60%" src="https://media.giphy.com/media/3orieOGI1gkpr1kaeA/giphy.gif" alt="GIF del portafoglio in azione" />
      </div>
      <br/>
      
      
      <br/>
      `,
      tags: ["Node, Puppeteer"],
      short: "Harvest Time è un web scraper che estrae dati dal web",
    },
    id: "p6",
    order: 5,
    githubLink: "https://github.com/FrancescoCoding/Harvest-Time",
    image: harvestTimeThumbnail600w,
    endpoint: "harvest",
    icons: [nodeIcon, puppeteerIcon],
  },
  {
    EN: {
      name: "🪴 HydroFlora",
      description: `
      <p>The <b>HydroFlora application</b> was created to help you keep track of the water you need to give to your plants.</p>
      <p>With the <i>watering scheduling</i> feature, you can schedule the times when you need to water your plants and receive a notification on your mobile phone to ensure you never forget to do so!</p>
      <div style="text-align: center;">
        <img width="95%" src="https://user-images.githubusercontent.com/64712227/205894827-770b28c0-e245-4b0e-8c24-219d9b388f7f.png" alt="GIF of the app in action" />
      </div>
      <br />
      <p>HydroFlora has an intuitive and easy-to-use interface, making it suitable for all types of users. Thanks to its flexibility, you can use it to keep track of your indoor plants, garden plants, or even office plants!</p>
      `,

      tags: ["Android Studio, Java, Firebase"],
      short:
        "HydroFlora is an Android app that helps you track your plants' water intake",
    },
    IT: {
      name: "🪴 HydroFlora",
      description: `
      <p>L'applicazione <b>HydroFlora</b> è stata creata per aiutarti a tenere traccia dell'acqua che devi dare alle tue piante.</p>
      <p>Grazie alla funzionalità di <i>pianificazione dell'annaffiatura</i>, puoi programmare le volte in cui devi annaffiare le tue piante e ricevere una notifica sul cellulare per assicurarti di non dimenticare mai di farlo!</p>
      <div style="text-align: center;">
        <img width="95%" src="https://user-images.githubusercontent.com/64712227/205894827-770b28c0-e245-4b0e-8c24-219d9b388f7f.png" alt="GIF dell'app in azione" />
      </div>
      <br />
      <p>HydroFlora è dotata di un'interfaccia intuitiva e facile da usare, che la rende adatta a tutti i tipi di utenti. Grazie alla sua flessibilità, puoi utilizzarla per tenere traccia delle tue piante d'appartamento, del giardino o anche per le piante d'ufficio.</p>
      `,
      tags: ["Università", "Agile"],
      short:
        "HydroFlora è un'app Android che ti aiuta a tenere traccia dell'acqua delle tue piante",
    },
    id: "p7",
    githubLink: "https://github.com/FrancescoCoding/HydroFlora-app",
    image: HydroFloraThumbnail600w,
    endpoint: "HydroFlora",
    order: 1.5,
    tags: ["Android Studio, Java, Firebase"],
    icons: [androidIcon, javaIcon],
  },
  {
    EN: {
      name: "🔬 Sort algorithms analysis",
      description: `
      <p>This exercise <b>focuses</b> on the <b>analysis</b> of two popular algorithms - <b>Quick Sort</b> and <b>Count Sort</b> - using <b>Big O Notation</b> to evaluate their <b>temporal and spatial complexities</b>.</p>
      <div style="text-align: center;">
        <img width="50%" src="https://media.giphy.com/media/WfIDKyIzU95kY/giphy.gif" alt="GIF del portafoglio in azione" />
      </div>
      <br/>
      <p>The analysis is done in the code provided in the <b>MainApp.java</b> class, which tests each algorithm. The <b>CountSort.java</b> class contains the implementation of Count Sort, while the <b>QuickSort.java</b> class contains the implementation of Quick Sort.</p>
      <p>The report discusses the <b>efficiency and scalability concerns</b> of both algorithms and provides a <b>critical comparison</b> of their designs.</p>
      `,

      tags: ["University, Team, Agile"],
      short:
        "An analysis and critical comparison between alternative sorting algorithm designs",
    },
    IT: {
      name: "🔬 Analisi di algoritmi",
      description: `
      <p><b>Questo esercizio</b> si concentra sull'analisi di due algoritmi popolari - <b>Quick Sort</b> e <b>Count Sort</b> - utilizzando la Notazione <b>Big O</b> per valutare le loro complessità <b>temporali e spaziali</b>.</p>
      <div style="text-align: center;">
        <img width="60%" src="https://media.giphy.com/media/WfIDKyIzU95kY/giphy.gif" alt="GIF del portafoglio in azione" />
      </div>
      <br/>
      <p>L'analisi viene effettuata attraverso il codice di esempio fornito nella classe <b>MainApp.java</b> che testa ciascun algoritmo. La classe <b>CountSort.java</b> contiene l'implementazione del Count Sort, mentre la classe <b>QuickSort.java</b> contiene l'implementazione del Quick Sort.</p>
      <p>La relazione discute <b>le preoccupazioni di efficienza e scalabilità</b> di entrambi gli algoritmi e fornisce <b>un confronto critico</b> dei loro progetti.</p>
      `,
      tags: ["University, Team, Agile"],
      short:
        "Un'analisi e comparazione critica tra diversi algoritmi di ordinamento (quick e count sort) basate su efficienza e scalabilità.",
    },
    id: "p8",
    githubLink:
      "https://github.com/FrancescoCoding/Quick-and-Count-sort-algorithm-analysis",
    order: 7,
    image: AlgorithmThumbnail600w,
    endpoint: "algorithms-analysis",
    tags: ["Java, Big O Notation"],
    icons: [javaIcon],
  },
  {
    EN: {
      name: "👨🏻‍💻 Ethical Hacking",
      description: `
      <p>A systematic <b>penetration test</b> was performed for Cantina Lorenzo to assess the security of its IT infrastructure and network protocol vulnerabilities. The objective was to identify any weaknesses in the system that could potentially be exploited by malicious actors.</p>

      <div style="text-align: center;">
        <img width="60%" src="https://media.giphy.com/media/xT0Gqjm3fef2Xm3Dag/giphy.gif" alt="GIF dell'app in azione" />
      </div>
      <br />

      <p>The test was conducted using the <b>Kali Linux distribution</b>, which is a popular penetration testing operating system, and the <b>Metasploit Framework</b>, which is an open-source tool used for developing and executing exploits. These tools were used to carry out attacks on the system and identify any potential vulnerabilities.</p>

      <p>The report discusses the results of the test, provides a <b>critical analysis</b> of the security of the system and suggests <b>mitigation</b> techniques.</p>
      `,
      tags: ["Kali Linux, Metasploit"],
      short:
        "A systematic penetration test for Cantina Lorenzo to assess network protocol vulnerabilities and the security its IT infrastructure",
    },
    IT: {
      name: "👨🏻‍💻 Ethical Hacking",
      description: `
      <p>Per questo progetto ho effettuato un <b>test di penetrazione sistematico</b> per Cantina Lorenzo al fine di valutare la sicurezza dell'infrastruttura IT e le vulnerabilità dei protocolli di rete. Il mio obiettivo era individuare eventuali debolezze nel sistema che potrebbero essere sfruttate da attori malevoli.</p>
      <div style="text-align: center;">
        <img width="60%" src="https://media.giphy.com/media/xT0Gqjm3fef2Xm3Dag/giphy.gif" alt="GIF dell'app in azione" />
      </div>
      <br />
      <p>Ho condotto il test utilizzando la distribuzione <b>Kali Linux</b>, che è un sistema operativo popolare per il penetration testing, e il <b>Metasploit Framework</b>, che è uno strumento open-source utilizzato per sviluppare ed eseguire exploit. Questi strumenti sono stati utilizzati per effettuare attacchi al sistema e individuare potenziali vulnerabilità.</p>
      
      <p>La relazione discute i risultati del test, fornisce un'analisi critica della sicurezza del sistema e suggerisce tecniche di <b>mitigazione</b>.</p>
      `,
      tags: ["Kali Linux, Metasploit"],
      short:
        "Un test di penetrazione sistematico per Cantina Lorenzo per valutare le vulnerabilità dei protocolli di rete e la sicurezza dell'infrastruttura IT",
    },
    id: "p9",
    githubLink:
      "https://github.com/FrancescoCoding/Ethical-Hacking-penetration-test",
    image: HackerThumbnail600w,
    order: 8,
    endpoint: "hacking",
  },
  {
    EN: {
      name: "🦎 Chamelii Chatbot",
      description: `
      <p>This <b>prototype</b> is designed for a chatbot that will be integrated with the <b>Chamelii App</b>, which \nis owned by <b>Omniscient Safety Innovations Ltd</b>, a mental health software solutions company.

      The chatbot will provide users with an interactive and personalized mental health support experience. </p>
      
      <div style="text-align: center;">
        <img width="50%" src="https://media.giphy.com/media/Xx7nOiC6bU1Gw/giphy.gif" alt="GIF of the chatbot in action" />
      </div><br/>
      <p>The full implementation will be using advanced <b>natural language processing </b>(NLP) and <b>Machine Learning</b> techniques to understand and respond to users' needs.</p>
      
      <p>The prototype also includes a dashboard that will enable users and mental health professionals to monitor and analyze data related to users' mental health, including their moods, behaviors, and progress over time. This dashboard will provide valuable insights that can help users make informed decisions about their mental health, and can also inform the development of new mental health solutions by <b>Omniscient Safety Innovations Ltd.</b></p>
      `,
      tags: ["React"],
      short:
        "This is a Prototype for a chatbot with dashboard for the Chamelii App (track your staff's happiness and productivity)",
    },
    IT: {
      name: "🦎 Chamelii Chatbot",
      description: `
        <p>Questo <b>prototipo</b> è stato progettato per un chatbot che verrà integrato con l'app <b>Chamelii</b>, di proprietà di <b>Omniscient Safety Innovations Ltd</b>, un'azienda di soluzioni software per la salute mentale.</p>
        <div style="text-align: center;">
          <img width="50%" src="https://media.giphy.com/media/Xx7nOiC6bU1Gw/giphy.gif" alt="GIF del chatbot in azione" />
        </div><br/>
        <p>L'applicazione fornirà agli utenti un'esperienza di supporto per la salute mentale interattiva e personalizzata.</p>
        <p>La piena implementazione utilizzerà avanzate tecniche di <b>elaborazione del linguaggio naturale</b> (NLP) e di <b>apprendimento automatico</b> per comprendere e rispondere alle esigenze degli utenti.</p>
        <p>Il prototipo include anche una dashboard che consentirà agli utenti e ai professionisti della salute mentale di monitorare e analizzare i dati relativi alla salute mentale degli utenti, compresi i loro umori, comportamenti e progressi nel tempo. Questa dashboard fornirà preziose informazioni che possono aiutare gli utenti a prendere decisioni informate sulla loro salute mentale e possono anche informare lo sviluppo di nuove soluzioni per la salute mentale da parte di <b>Omniscient Safety Innovations Ltd.</b></p>
      `,
      tags: ["Università, Agile"],
      short:
        "Questo è un prototipo per un chatbot con dashboard per l'app Chamelii (monitora la felicità e produttività del tuo personale)",
    },
    id: "p10",
    githubLink: "https://github.com/FrancescoCoding/Chamelii-chatbot",
    image: ChameliiThumbnail600w,
    order: 9,
    endpoint: "chameleon",
  },
  {
    EN: {
      name: "🦁 Personal Portfolio (Server)",
      description: `<p>Server and API are currently hosted on <a href='https://portfolio-api-2023-m5kgbmw7h-francescocoding.vercel.app/api/projects'>Vercel</a> and are fully functional.</p>

      <div style="text-align: center;">
        <img src="https://media.giphy.com/media/IpeYSEZshTefe/giphy.gif" alt="Server is up and running" width="50%"/>
      </div>
      <br/>
      <p>While the client (this) website is not yet connected to the server, it will be soon! <b>(Incoming!)</b></p>
      `,
      tags: ["Node, Express, TypeScript, MongoDB, Mongoose "],
      short:
        "Personal portfolio's Server and REST API, built with Node.js, Express, TypeScript, MongoDB and other magic tools 😎",
    },
    IT: {
      name: "🦁 Portfolio personale (Server)",
      description: `<p>Il server e l'API sono attualmente ospitati su <a href='https://portfolio-api-2023-m5kgbmw7h-francescocoding.vercel.app/api/projects'>Vercel</a> e sono completamente funzionanti.</p>

      <div style="text-align: center;">
        <img src="https://media.giphy.com/media/IpeYSEZshTefe/giphy.gif" alt="Server is up and running" width="50%"/>
      </div>
      <br/>
      
      <p>Anche se il sito web client non è ancora collegato al server, lo sarà presto! <b>(In arrivo!)</b></p>
      <p>Il server è costruito utilizzando Node.js, Express, TypeScript, MongoDB e altri strumenti magici. 😎</p>`,
      tags: ["Node, Express, TypeScript, MongoDB, Mongoose"],
      short:
        "Server e REST API per questo portfolio. Costruito con Node.js, Express, TypeScript, MongoDB e altri strumenti magici 🪄",
    },
    id: "p11",
    githubLink: "https://github.com/FrancescoCoding/Portfolio-api",
    image: ServerThumbnail600w,
    order: 1,
    endpoint: "portfolio-api",
    icons: [typescriptIcon, expressIcon, mongoDBIcon, vercelIcon],
  },
  {
    EN: {
      name: "🥼 Rick Sanchez Chatbot",
      description: `
        <p>The "ask-sanchez" chatbot is a project powered by the ChatGPT's Natural language processing model. This ensures intelligent and smooth conversations with this bot!</p>
        <ul>
            <li><b>Backend</b> developed using <b>Node and Express</b> and is hosted on <b>Vercel</b></li>
            <li><b>Frontend</b> is written in <b>React 18 (Vite)</b>, <b>CSS3</b>, and <b>TypeScript</b></li>
        </ul>
        <p>No external CSS frameworks were used. Only pure craftsmanship 😊 reminiscent of Rick himself!</p>
        <div style="text-align: center;">
            <img width="60%" src="https://media1.giphy.com/media/fVPnqjGGTSpz73hp14/giphy.gif?cid=ecf05e47zt7wo7hvj9hpde7nie1c3wo0ex1j3vvuqglhikvt&ep=v1_gifs_search&rid=giphy.gif" alt="GIF of the chatbot in action" />
        </div>
        <br/>
        <p>For a comprehensive list of technologies, please check out the GitHub Repository's <a href="https://github.com/FrancescoCoding/ask-Sanchez">README</a> file. </p>
        `,
      tags: ["React, Node, Express, TypeScript, ChatGPT"],
      short:
        "Full-Stack Rick Sanchez chatbot powered by ChatGPT. Backend in Node/Express, and Frontend in React 18 (Vite).",
    },
    IT: {
      name: "🥼 Chatbot Rick Sanchez",
      description: `
        <p>Il chatbot "ask-sanchez" è un progetto alimentato dal modello di NLP di ChatGPT. Questo garantisce conversazioni intelligenti e fluide.</p>
        <ul>
            <li>Il <b>backend</b> è stato sviluppato utilizzando <b>Node e Express</b> ed è hostato su <b>Vercel</b></li>
            <li>Il <b>frontend</b> è scritto in <b>React 18 (Vite)</b>, <b>CSS3</b> e <b>TypeScript</b></li>
        </ul>
        <p>Nessun framework CSS esterno è stato utilizzato.</p>
        <div style="text-align: center;">
            <img width="60%" src="https://media1.giphy.com/media/fVPnqjGGTSpz73hp14/giphy.gif?cid=ecf05e47zt7wo7hvj9hpde7nie1c3wo0ex1j3vvuqglhikvt&ep=v1_gifs_search&rid=giphy.gif" alt="GIF del chatbot in azione" />
        </div>
        <br/>
        <p>Per una lista completa delle tecnologie, si prega di consultare il file <a href="https://github.com/FrancescoCoding/ask-Sanchez">README</a> del repository GitHub. </p>
        `,
      short:
        "Chatbot Rick Sanchez full-stack potenziato da ChatGPT. Backend in Node/Express e Frontend in React 18 (Vite).",
    },
    id: "p12",
    githubLink: "https://ask-sanchez-web.vercel.app/",
    image:
      "https://images.unsplash.com/photo-1681460590033-67b0d1413550?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    endpoint: "ask-sanchez",
    order: 1.5,
    icons: [nodeIcon, expressIcon, reactIcon, typescriptIcon, vercelIcon],
  },
  {
    EN: {
      name: "🦞 TTE: Text-to-Emoji",
      description: `
        <p>"Text-to-Emoji" is a simple React hook that changes text into emojis. It's smart enough to know which emoji fits best with the words you use, thanks to OpenAI's GPT-4. It's fun to use and can add some extra flair to any React project. You can use it in different ways, like:</p>
        <ul>
            <li>Making titles or headings on your website more fun by adding emojis.</li>
            <li>Letting bloggers add a playful touch to their posts with emojis that match their writing.</li>
            <li>Giving people emoji suggestions when they fill out forms, which is great for social media or chat apps.</li>
            <li>Adding emojis to emails or texts to help people express themselves better.</li>
            <li>Using it in feedback forms to show people's feelings with emojis instead of just words.</li>
        </ul>
              <div style="text-align: center;">
            <img width="60%" src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExaTJyc2RmZGRpODJ5ZnFzcW9oNmNjM3d2d2tqOTllNGx0eDJnMXliNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/jn8rlzWSj4HQlfsEBE/giphy.gif" alt="GIF of the application in action" />
        </div>
        <br/>
        <p>Explore the full range of technologies on the GitHub Repository's <a href="https://github.com/FrancescoCoding/TTE-text-to-emoji/blob/main/README.md">README</a> file.</p>
        `,
      tags: ["React", "Node.js", "Express", "TypeScript", "Vite"],
      short:
        "Text-to-Emoji is a lightweight, easy-to-integrate React hook that converts text into emojis by using OpenAI's GPT-4 model.",
    },
    IT: {
      name: "🦞 TTE: Testo-in-Emoji",
      description: `
      <p>"TTE: Testo-in-Emoji" è un hook per React facile da integrare che trasforma qualsiasi testo in emoji. Grazie al modello GPT-4 di OpenAI, sa scegliere l'emoji più adatta alle parole utilizzate. \nÈ divertente da usare e può aggiungere un tocco in più a qualsiasi progetto. Ecco alcuni modi per utilizzarlo:</p>
      <ul>
          <li>Rendere i titoli o le intestazioni del tuo sito web più divertenti aggiungendo emoji.</li>
          <li>Permettere ai blogger di aggiungere un tocco giocoso ai loro post con emoji che corrispondono al loro contenuto.</li>
          <li>Offrire suggerimenti di emoji alle persone quando compilano i moduli, il che è ottimo per i social media o le app di messaggistica.</li>
          <li>Aggiungere emoji alle email o ai testi per aiutare le persone a esprimersi meglio.</li>
          <li>Utilizzarlo nei moduli di feedback per mostrare i sentimenti delle persone con emoji anziché solo con parole.</li>
      </ul>
      <div style="text-align: center;">
          <img width="60%" src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExaTJyc2RmZGRpODJ5ZnFzcW9oNmNjM3d2d2tqOTllNGx0eDJnMXliNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/jn8rlzWSj4HQlfsEBE/giphy.gif" alt="GIF dell'applicazione in azione" />
      </div>
      <br/>
      <p>Scopri come utilizzarlo consultando il file <a href="https://github.com/FrancescoCoding/TTE-text-to-emoji/blob/main/README.md">README</a> nel repository GitHub.</p>
    `,
      short:
        "Text-to-Emoji è un hook per React facile da integrare che converte il testo in emoji utilizzando il modello GPT-4 di OpenAI.",
    },
    id: "p13",
    githubLink: "https://github.com/FrancescoCoding/TTE-Text-to-Emoji",
    image: EmojisThumbnail600w,
    endpoint: "tte-text-to-emoji",
    order: 1.3,
    icons: [reactIcon],
    extraLink: {
      buttonText: "Demo",
      link: "https://tte.fran-dev.com/",
    },
  },
  {
    EN: {
      name: "📚 Anonfeedback.io",
      description: `
        <h2>AI-Powered Anonymous Feedback for Organizations 💬</h2>
        <br/>
        <p><a href="https://anonfeedback.io">Anonfeedback.io</a> is a live SaaS platform that transforms how organisations collect and act on feedback. Anonymity unlocks the honest, constructive criticism people hold back in traditional surveys, while AI turns unstructured comments into clear, actionable insights.</p>
        <div style="text-align: center;">
            <img width="60%" src="${AnonfeedbackThumbnail600w}" alt="Anonfeedback.io preview" />
        </div>
        <p>Organisations create fully customisable feedback forms, with sentiment emojis, tags, and categories tailored to their brand, and monitor responses in real time on an intuitive dashboard. Sentiment analysis powered by large language models captures linguistic nuance and sarcasm that keyword-based classifiers miss, and an always-on AI safety filter keeps the content moderated.</p>
        <p>Beyond collection, the platform closes the loop: critical feedback can be escalated, assigned, prioritised, and given deadlines, with public or private acknowledgements back to submitters. Slack notifications and automatic Jira ticket creation plug feedback directly into existing team workflows, and subscription tiers scale from free plans to enterprise deployments with custom integrations.</p>
        <p>The platform began as my Honours dissertation, an HCI-driven study on reducing the cognitive load of student feedback forms in higher education, and has since grown into a full product serving organisations of any kind. The original research and report are available in the <a href="https://github.com/FrancescoCoding/hons-project/tree/main">GitHub repository</a>.</p>
        <br/>
        <p>Live links:</p>
        <ul>
            <li><a href="https://anonfeedback.io/">Anonfeedback.io</a></li>
            <li><a href="https://rgu.anonfeedback.io/">RGU Org Feedback</a></li>
        </ul>
        `,
      tags: ["AI, SaaS, Sentiment Analysis, Integrations"],
      short:
        "A live SaaS platform for anonymous feedback collection, with AI sentiment analysis, real-time dashboards, and Slack & Jira integrations.",
    },
    IT: {
      name: "📚 Anonfeedback.io",
      description: `
        <h2>Feedback Anonimi Potenziati dall'AI per le Organizzazioni 💬</h2>
        <br/>
        <p><a href="https://anonfeedback.io">Anonfeedback.io</a> è una piattaforma SaaS attiva che trasforma il modo in cui le organizzazioni raccolgono e gestiscono i feedback. L'anonimato sblocca le critiche oneste e costruttive che le persone trattengono nei sondaggi tradizionali, mentre l'AI trasforma i commenti non strutturati in informazioni chiare e utilizzabili.</p>
        <div style="text-align: center;">
            <img width="60%" src="${AnonfeedbackThumbnail600w}" alt="Anteprima di Anonfeedback.io" />
        </div>
        <p>Le organizzazioni creano moduli di feedback completamente personalizzabili, con emoji di sentiment, tag e categorie su misura per il proprio brand, e monitorano le risposte in tempo reale su una dashboard intuitiva. L'analisi del sentiment basata su modelli di linguaggio di grandi dimensioni (LLM) coglie le sfumature linguistiche e il sarcasmo che i classificatori basati su parole chiave non rilevano, e un filtro di sicurezza AI sempre attivo mantiene i contenuti moderati.</p>
        <p>Oltre alla raccolta, la piattaforma chiude il cerchio: i feedback critici possono essere escalati, assegnati, prioritizzati e associati a scadenze, con riscontri pubblici o privati verso chi li ha inviati. Le notifiche Slack e la creazione automatica di ticket Jira integrano i feedback direttamente nei flussi di lavoro esistenti, e i piani di abbonamento scalano dal piano gratuito fino alle installazioni enterprise con integrazioni personalizzate.</p>
        <p>La piattaforma è nata come la mia tesi di laurea con lode, uno studio HCI sulla riduzione del carico cognitivo nei moduli di feedback per studenti nell'istruzione superiore, e da allora è cresciuta fino a diventare un prodotto completo al servizio di organizzazioni di ogni tipo. La ricerca originale e il rapporto completo sono disponibili nel <a href="https://github.com/FrancescoCoding/hons-project/tree/main">repository GitHub</a>.</p>
        <br/>
        <p>Link live:</p>
        <ul>
            <li><a href="https://anonfeedback.io/">Anonfeedback.io</a></li>
            <li><a href="https://rgu.anonfeedback.io/">Feedback dell'Org RGU</a></li>
        </ul>
        `,
      tags: ["AI, SaaS, Sentiment Analysis, Integrazioni"],
      short:
        "Una piattaforma SaaS attiva per la raccolta di feedback anonimi, con analisi del sentiment AI, dashboard in tempo reale e integrazioni Slack e Jira.",
    },
    id: "p14",
    githubLink: "https://github.com/FrancescoCoding/hons-project",
    order: 1.2,
    endpoint: "anonfeedback-io",
    icons: [reactIcon, nodeIcon, expressIcon, typescriptIcon],
    extraLink: {
      buttonText: "Website",
      link: "https://anonfeedback.io/",
    },
    image: AnonfeedbackThumbnail600w,
  },
];

export default PROJECTS;
