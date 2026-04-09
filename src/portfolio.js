/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Saad Pasta",
  title: "Hi all, I'm Rajat",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://rajatporwal.com/Resume-Rajat_Porwal_Full_Stack_Developer.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/rajat-porwal",
  linkedin: "https://www.linkedin.com/in/rajatporwal/",
  email: "work@rajatporwal.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
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

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
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
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Bash",
      fontAwesomeClassname: "fas fa-terminal"
    },
    {
      skillName: "Webpack",
      fontAwesomeClassname: "far fa-file-archive"
    },
    {
      skillName: "Test Driven Development",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Postman",
      fontAwesomeClassname: "fab fa-linode"
    },
    {
      skillName: "CI/CD Pipelines",
      fontAwesomeClassname: "fab fa-octopus-deploy"
    },
    {
      skillName: "GNU/Linux",
      fontAwesomeClassname: "fab fa-fedora"
    },
    {
      skillName: "Web",
      fontAwesomeClassname: "fas fa-globe"
    },
    {
      skillName: "Windows",
      fontAwesomeClassname: "fab fa-windows"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
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
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "LNMIIT",
      logo: require("./assets/images/lnmiit.jpeg"),
      subHeader: "Bachelor of Technology - Electronics and Communication",
      duration: "July 2014 - December 2019",
      desc: "Completed Bachelor of Technology in Electronics and Communication Engineering from LNMIIT, where I built a strong foundation in programming, problem-solving, and core computer science concepts while actively exploring web development.",
      descBullets: [
        "Gained hands-on experience in JavaScript, HTML, and CSS, laying the groundwork for full-stack development",
        "Developed a strong analytical and problem-solving mindset through engineering coursework and practical projects",
        "Actively explored modern web technologies and frameworks, shaping my transition into full-stack development",
        "Built multiple projects during and after graduation, strengthening concepts in frontend and backend development"
        ]
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
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
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Assistant Professor (Full Stack Development)",
      company: "DPG Degree College",
      companylogo: require("./assets/images/DPg_Logo.png"),
      date: "Sept 2024 – Present",
      desc: "Currently working as an Assistant Professor in Full Stack Development, delivering industry-relevant MERN stack training while bridging the gap between academic learning and real-world application.",
      descBullets: [
        "Led hands-on workshops and live debugging sessions, improving practical understanding and boosting student engagement significantly",
        "Mentored and managed a team of interns to successfully build and deliver a software project ahead of schedule",
        "Optimized teaching methods using continuous feedback from 40+ students, resulting in improved learning outcomes and satisfaction"
      ]
    },
    {
      role: "Full Stack Developer",
      company: "AutomatEazy",
      companylogo: require("./assets/images/automatEazy.png"),
      date: "June 2024 – Sept 2024",
      desc: "Built and scaled robust backend services and REST APIs using Node.js, ensuring high performance and seamless data flow across systems. Enhanced frontend responsiveness with Angular, improving overall user experience. Reduced bug resolution time and accelerated feature delivery through efficient debugging, code reviews, and cross-team collaboration."
    },
    {
      role: "Full Stack Developer",
      company: "The Web Agency",
      companylogo: require("./assets/images/theWebAgency.png"),
      date: "June 2023 – June 2024",
      desc: "Developed scalable full-stack applications with a focus on performance, reducing load times and improving system responsiveness. Automated deployment pipelines and optimized backend architecture, significantly cutting down deployment and query times. Played a key role in delivering production-ready features in a fast-paced environment."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Some Projects",
  subtitle: "SOME Projects I have worked on while learning Web Development",
  projects: [
    {
      image: require("./assets/images/battleship.jpeg"),
      projectName: "Battleship Game",
      projectDesc: "Developed a browser-based Battleship game to strengthen object-oriented programming concepts and game logic implementation. Focused on clean code structure, modular design, and test-driven development practices.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://rajat-porwal.github.io/Battleship-Game/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/miniMessageBoard.png"),
      projectName: "Mini Message Board",
      projectDesc: "Built a full-stack message board using Node.js and Express, implementing RESTful routing and server-side rendering with EJS. Deployed the application using Docker and Fly.io, ensuring scalability and smooth performance.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://mini-message-board-rajat.fly.dev/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Developer of the Year",
      subtitle:
        "Honored with Developer of the Year for exceptional technical contributions, rapid problem-solving, and consistent delivery of high-impact features.",
      image: require("./assets/images/devoftheyear.png"),
      imageAlt: "Award - Developer of the Year",
      footerLink: [
        {
          name: "Certification",
        },
        {
          name: "Award Letter",
        },
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
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
  display: false // Set false to hide this section, defaults to true
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
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9413976136",
  email_address: "work@rajatporwal.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  isHireable,
  resumeSection
};
