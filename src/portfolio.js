
// Pour modifier les couleurs du portefeuille de manière globale, allez dans le fichier _globalColor.scss.

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Renommez votre nom de fichier pour une animation personnalisée

// Splash Screen

const splashScreen = {
  enabled: true, // mettez false pour désactiver l'écran d'accueil
  animation: splashAnimation,
  duration: 2000 // Définissez la durée de l'animation en fonction de votre animation
};

// Résumé et section de salutation

const illustration = {
  animated: true // Mettre à false pour utiliser le SVG statique
};

const greeting = {
  username: "Victor R",
  title: "Salut à tous, je m'appelle Victor",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Définissez-le comme vide pour masquer le bouton
  displayGreeting: true // Définissez false pour masquer cette section, la valeur par défaut est true.
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/DcSault",
  linkedin: "https://www.linkedin.com/in/victor-rosique/",
  gmail: "rosiquevictor@gmail.com",
  microsoft: "https://learn.microsoft.com/fr-fr/users/victorrosique-0505/",
  // Instagram, Twitter et Kaggle sont également pris en charge dans les liens !
  // Pour personnaliser les icônes et les liens sociaux, modifiez src/components/SocialMedia.
  display: true // Définissez true pour afficher cette section, la valeur par défaut est false.
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Assurez-vous d'inclure le nom de classe Font Awesome correct pour afficher votre icône.
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Définissez false pour masquer cette section, la valeur par défaut est true.
};

// Education Section

const educationInfo = {
  display: true, // Définissez false pour masquer cette section, la valeur par défaut est true.
  schools: [
    {
      schoolName: "Open IT",
      logo: require("./assets/images/openit.png"),
      subHeader: "BTS SIO - SISR ",
      duration: "Septembre 2021 - Juin 2023",
      desc: "BTS SIO option solutions d’infrastructure, systèmes et réseaux",
      descBullets: [
        "Support et mise à disposition de services informatiques",
        "Cybersécurité des services informatiques"
      ]
    },
    {
      schoolName: "Lycée Régional Montesquieu",
      logo: require("./assets/images/sorgues.png"),
      subHeader: "Bac Pro Systèmes Numériques option C",
      duration: "September 2018 - Jullet 2021",
      desc: "télécommunications et réseaux, les systèmes participant à la mise en réseau de terminaux et aux télécommunications",
      descBullets: ["Télécommunications et réseaux",
                    "Électronique industrielle et embarquée"
    
    ]
    }
  ]
};

// Vos 3 piles/expériences technologiques les plus performantes

const techStack = {
  viewSkillBars: true, //Définissez-le à true pour montrer la section des compétences.
  experience: [
    {
      Stack: "Frontend/Design", //Insérez la pile ou la technologie dans laquelle vous avez de l'expérience
      progressPercentage: "90%" //Insérer la compétence relative en pourcentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Définir true pour afficher les badges codersrank section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Mettez-le à true pour montrer la section WorkExperiences.
  experience: [
    {
      role: "Stagiaire - Technicien Télécom ",
      company: "Orange Télécom",
      companylogo: require("./assets/images/OrangeLogo.png"),
      date: " 2020 ",
      desc: "Professionnel de terrain, le technicien réseaux et télécoms a pour mission d’installer et de connecter les équipements informatiques et téléphoniques de l’entreprise où il exerce ou bien pour le compte de clients, lorsqu’il travaille dans une société de services",
      descBullets: [
        "Relation client / Maintenance et réparation / Vérification qualité et sécurité",
      ]
    },
    {
      role: "Stagiaire - SysAdmin",
      company: "2SREI",
      companylogo: require("./assets/images/2SREILogo.png"),
      date: " 2021 ",
      desc: "Réceptionner, analyser et diagnostiquer les demandes des utilisateurs par téléphone Traiter des incidents techniques (bureautique, système, réseau, logiciel et matériel) Conseiller."
    },
    {
      role: "Technicien Support ",
      company: "Genapi",
      companylogo: require("./assets/images/GenapiLogo.png"),
      date: " Août 2021  – Maintenant",
      desc: "Réceptionner, analyser et diagnostiquer les demandes des utilisateurs par téléphone Traiter des incidents techniques (bureautique, système, réseau, logiciel et matériel) Conseiller, accompagner et orienter les clients en apportant des réponses à leurs besoins."
    }
  ]
};

/* Votre section Open Source pour visualiser vos projets épinglés sur Github
Pour savoir comment obtenir la clé github, consultez readme.md */

const openSource = {
  showGithubProfile: "true", // Définissez true ou false pour afficher le profil du contact en utilisant Github, la valeur par défaut est true.
  display: true // Définissez false pour masquer cette section, la valeur par défaut est true.
};

// Quelques grands projets sur lesquels vous avez travaillé

const bigProjects = {
  title: "Mes Projets ",
  subtitle: " En cours de Maintenance",
  projects: [
    {
      image: require("./assets/images/maintenance.gif"),
      projectName: "En cours de Maintenance",
      projectDesc: "",
      footerLink: [
        {
          name: "",
          url: ""
        }
        //  vous pouvez ajouter des boutons supplémentaires ici.
      ]
    },
    {
      image: require("./assets/images/maintenance.gif"),
      projectName: "En cours de Maintenance",
      projectDesc: "",
      footerLink: [
        {
          name: "",
          url: ""
        }
      ]
    }
  ],
  display: true // Définissez false pour masquer cette section, la valeur par défaut est true.
};

// Section des réalisations
// Inclure les certificats, les conférences, etc.

const achievementSection = {
  title: emoji("Certification en Cours 🏆 "),
  subtitle:
    "",

  achievementsCards: [
    {
      title: "Microsoft Certified",
      subtitle:
        "Windows Server Hybrid Administrator Associate  .",
      image: require("./assets/images/microsoft-certified-associate-badge.svg"),
      imageAlt: "Windows Server Hybrid Administrator Associate",
      footerLink: [
        {
          name: "Certification",
          url: "https://learn.microsoft.com/fr-fr/users/victorrosique-0505/"
        }
      ]
    },
    {
      title: "Microsoft 365 Certified",
      subtitle:
        "Microsoft 365, enterprise Administrator Expert.",
      image: require("./assets/images/microsoft-certified-expert-badge.svg"),
      imageAlt: "Enterprise Administrator Expert",
      footerLink: [
        {
          name: "Certification",
          url: "https://learn.microsoft.com/fr-fr/users/victorrosique-0505/"
        }
      ]
    }
  ],
  display: true // Définissez false pour masquer cette section, la valeur par défaut est true.
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Définissez true pour afficher les blogs des médias récupérés au lieu de ceux codés en dur.
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Définissez false pour masquer cette section, la valeur par défaut est true.
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Définissez false pour masquer cette section, la valeur par défaut est true.
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Veuillez fournir un lien intégré à votre podcast
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Définissez false pour masquer cette section, la valeur par défaut est true.
};

const contactInfo = {
  title: emoji("Contactez-moi ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+33-0787248308",
  email_address: "rosiquevictor@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "NotSault", //Remplacez "twitter" par votre nom d'utilisateur twitter sans @.
  display: true // Définissez true pour afficher cette section, la valeur par défaut est false.
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
