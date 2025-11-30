// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
//import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
//import postmanLogo from './assets/tech_logo/postman.png';
//import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
//import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
//import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/prodigy.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import glaLogo from './assets/education_logo/terna.png';
import bsaLogo from './assets/education_logo/RCF.png';
import vpsLogo from './assets/education_logo/DICS.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';

// certificates Section Logo's


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },  
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
       
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: webverseLogo,
      role: "Web Developer",
      company: "Prodigy InfoTech Intern",
      date: "June 2025 - July 2025",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
      ],
    },
    
    
  ];
  
  export const education = [
    
    {
      id: 0,
      img: glaLogo,
      school: "Terna Engineering College ",
      date: "Aug 2023 - May 2027",
      grade: "8.2CGPA Overall",
      desc: "I'm currently persuing Batchlor's Degree from Terna Engineering College and Currently I'm in 3rd Year who is kneen about learning about new technologies and programming languages.   .",
      degree: "Bachelor of  Engineering- Information Technology ",
    },
    {
      id: 1,
      img: bsaLogo,
      school: "Vatsalya Public School Govardhan, Mathura",
      date: "June 2022 - March 2023",
      grade: "68%",
      desc: "I completed my class 12 education from R.C.F College, Alibag, under the HSC board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "HSC(XII) - PCM with Computer Science",
    },
    {
      id: 2,
      img: vpsLogo,
      school: "D.I.C's English medium School,Nigdi",
      date: "2020",
      grade: "97.6%",
      desc: "I completed my class 10 education from D.I.C's English medium School,Nigdi, under the SSC board, which was my basic step towards my learning journey.",
      degree: "SSC(X)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Shravani Raut Portfolio",
      description:
        "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
      image: githubdetLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
      github: "https://github.com/codingmastr/GitHub-Profile-Search-App-Using-React-JS",
      webapp: "https://githubprofiledetective.netlify.app/",
    },
    {
      id: 1,
      title: "Workspace Management System",
      description:
        "A full-stack quiz-based platform designed for GATE/UGC NET students to practice previous year questions and create customized tests. The platform offers comprehensive profile stats and detailed results, helping students track and improve their preparation journey effectively.",
      image: csprepLogo,
      tags: ["python"],
      github: "https://github.com/codingmastr/CSPrep",
      webapp: "https://csprep.netlify.app/",
    },
    {
      id: 2,
      title: "Aarogya-Sahayak",
      description:
        "A React-based web application ",
      image: movierecLogo,
      tags: ["React JS","HTML", "CSS", "JavaScript"],
      github: "https://github.com/codingmastr/Movie-Recommendation-App",
      webapp: "https://movie-recommendation-app-jet.vercel.app/",
    },
    {
      id: 3,
      title: "Salon ManagementEasyQ Sysytem",
      description:
        "An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
      image: npmLogo,
      tags: ["React JS", "Node.js", "NPM", "Validation"],
      github: "https://github.com/codingmastr/cmtk-email-validator",
      webapp: "https://www.npmjs.com/package/cmtk-email-validator",
    },
    {
      id: 4,
      title: "Weather App",
      description:
        "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
      image: taskremLogo,
      tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
      github: "https://github.com/codingmastr/Task-Reminder-Tool",
      webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
    },
    {
      id: 5,
      title: "Smritika Jounal",
      description:
        "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
      image: webverLogo,
      tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
      github: "https://github.com/codingmastr/Webverse-Digital",
      webapp: "https://webversedigital.com/",
    },
  ]; 

export const Certificates = [
  {
    id: 1,
    title: "Java Programming Certificate",
    image: "/certificates/java.png",
    description: "Completed Java Programming Course from XYZ Academy.",
    tags: ["Java", "Programming", "Backend"],
    link: "/certificates/java.png" // direct link or google drive link
  },
  {
    id: 2,
    title: "Web Development Certificate",
    image: "/certificates/webdev.jpg",
    description: "Built responsive websites and learned HTML, CSS, JS.",
    tags: ["HTML", "CSS", "JS"],
    link: "/certificates/webdev.jpg"
  },
  {
    id: 3,
    title: "DSA Certificate",
    image: "/certificates/dsa.jpg",
    description: "Completed Data Structures & Algorithms training.",
    tags: ["DSA", "Algorithms"],
    link: "/certificates/dsa.jpg"
  },
  {
    id: 3,
    title: "Bit N Build Hackathon",
    image: "/certificates_logo/bitnbuild.png",
    description: "Completed Data Structures & Algorithms training.",
    tags: ["reactjs", "hackathon"],
    link: " "
  },
];
export const Extracurriculars = [
  {
    id: 1,
    title: "NSS Volunteer",
    description: "Volunteered in social activities and village programs.",
    tag: "Leadership",
    images: [
      "/extra/nss1.jpg",
      "/extra/nss2.jpg",
      "/extra/nss3.jpg"
    ]
  },
  {
    id: 2,
    title: "Art & Illustration",
    description: "Digital illustrations and project graphics.",
    tag: "Creative",
    images: [
      "/extra/art1.jpg",
      "/extra/art2.jpg"
    ]
  },
  {
    id: 3,
    title: "Tech Fest Volunteer",
    description: "Handled registrations and coordinated events.",
    tag: "Teamwork",
    images: [
      "/extra/techfest1.jpg"
    ]
  },
];
