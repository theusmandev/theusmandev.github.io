/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Usman's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "The Usman Dev Portfolio",
    type: "website",
    url: "http://theusmandev.com",
  },
};

//Home Page
const greeting = {
  title: "Muhammad Usman",
  logo_name: "Muhammad Usman",
  nickname: "theusmandev",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1XOmEhO77rkID_XqAf5zBYJvgX8vfUW3p/view?usp=drive_link",
  portfolio_repository: "https://github.com/theusmandev/theusmandev.github.io",
  githubProfile: "https://github.com/theusmandev",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/theusmandev",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/theusmandev-/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/@theusmandev",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:theusmandeveloper@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://x.com/theusmandev_",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/theusmandev/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/theusmandev/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

// Projects Data
const projects = {
  data: [
    {
      name: "ETL Pipeline",
      description:
        "Automated data processing pipeline using Python and SQL Server.",
      url: "https://github.com/theusmandev/your-repo-name",
    },
    {
      name: "Smart Urdu Novel Bank",
      description: "Scraping and search system for 70,000+ Urdu novels.",
      url: "https://github.com/theusmandev/your-repo-name",
    },
  ],
};

// File mein jahan purana projectsHeader likha hai, usay dhund kar ye change kar dein:
const projectsHeader = {
  title: "Projects",
  description: "My Data Engineering, Automation, and Web Scraping projects.",
  avatar_image_path: "projects_image.svg",
};

// const skills = {
//   data: [
//     {
//       title: "Data Science & AI",
//       fileName: "DataScienceImg",
//       skills: [
//         "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
//         "⚡ Experience of working with Computer Vision and NLP projects",
//         "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
//       ],
//       softwareSkills: [
//         {
//           skillName: "Tensorflow",
//           fontAwesomeClassname: "logos-tensorflow",
//           style: {
//             backgroundColor: "transparent",
//           },
//         },
//         {
//           skillName: "Keras",
//           fontAwesomeClassname: "simple-icons:keras",
//           style: {
//             backgroundColor: "white",
//             color: "#D00000",
//           },
//         },
//         {
//           skillName: "PyTorch",
//           fontAwesomeClassname: "logos-pytorch",
//           style: {
//             backgroundColor: "transparent",
//           },
//         },
//         {
//           skillName: "Python",
//           fontAwesomeClassname: "ion-logo-python",
//           style: {
//             backgroundColor: "transparent",
//             color: "#3776AB",
//           },
//         },
//         {
//           skillName: "Deeplearning",
//           imageSrc: "deeplearning_ai_logo.png",
//         },
//       ],
//     },
//     {
//       title: "Full Stack Development",
//       fileName: "FullStackImg",
//       skills: [
//         "⚡ Building responsive website front end using React-Redux",
//         "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
//         "⚡ Creating application backend in Node, Express & Flask",
//       ],
//       softwareSkills: [
//         {
//           skillName: "HTML5",
//           fontAwesomeClassname: "simple-icons:html5",
//           style: {
//             color: "#E34F26",
//           },
//         },
//         {
//           skillName: "CSS3",
//           fontAwesomeClassname: "fa-css3",
//           style: {
//             color: "#1572B6",
//           },
//         },
//         {
//           skillName: "Sass",
//           fontAwesomeClassname: "simple-icons:sass",
//           style: {
//             color: "#CC6699",
//           },
//         },
//         {
//           skillName: "JavaScript",
//           fontAwesomeClassname: "simple-icons:javascript",
//           style: {
//             backgroundColor: "#000000",
//             color: "#F7DF1E",
//           },
//         },
//         {
//           skillName: "ReactJS",
//           fontAwesomeClassname: "simple-icons:react",
//           style: {
//             color: "#61DAFB",
//           },
//         },
//         {
//           skillName: "NodeJS",
//           fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
//           style: {
//             color: "#339933",
//           },
//         },
//         {
//           skillName: "NPM",
//           fontAwesomeClassname: "simple-icons:npm",
//           style: {
//             color: "#CB3837",
//           },
//         },
//         {
//           skillName: "Yarn",
//           fontAwesomeClassname: "simple-icons:yarn",
//           style: {
//             color: "#2C8EBB",
//           },
//         },
//         {
//           skillName: "Gatsby",
//           fontAwesomeClassname: "simple-icons:gatsby",
//           style: {
//             color: "#663399",
//           },
//         },
//         {
//           skillName: "Flutter",
//           fontAwesomeClassname: "simple-icons:flutter",
//           style: {
//             color: "#02569B",
//           },
//         },
//       ],
//     },
//     {
//       title: "Cloud Infra-Architecture",
//       fileName: "CloudInfraImg",
//       skills: [
//         "⚡ Experience working on multiple cloud platforms",
//         "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
//         "⚡ Deploying deep learning models on cloud to use on mobile devices",
//         "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
//       ],
//       softwareSkills: [
//         {
//           skillName: "GCP",
//           fontAwesomeClassname: "simple-icons:googlecloud",
//           style: {
//             color: "#4285F4",
//           },
//         },
//         {
//           skillName: "AWS",
//           fontAwesomeClassname: "simple-icons:amazonaws",
//           style: {
//             color: "#FF9900",
//           },
//         },
//         {
//           skillName: "Azure",
//           fontAwesomeClassname: "simple-icons:microsoftazure",
//           style: {
//             color: "#0089D6",
//           },
//         },
//         {
//           skillName: "Firebase",
//           fontAwesomeClassname: "simple-icons:firebase",
//           style: {
//             color: "#FFCA28",
//           },
//         },
//         {
//           skillName: "PostgreSQL",
//           fontAwesomeClassname: "simple-icons:postgresql",
//           style: {
//             color: "#336791",
//           },
//         },
//         {
//           skillName: "MongoDB",
//           fontAwesomeClassname: "simple-icons:mongodb",
//           style: {
//             color: "#47A248",
//           },
//         },
//         {
//           skillName: "Docker",
//           fontAwesomeClassname: "simple-icons:docker",
//           style: {
//             color: "#1488C6",
//           },
//         },
//         {
//           skillName: "Kubernetes",
//           fontAwesomeClassname: "simple-icons:kubernetes",
//           style: {
//             color: "#326CE5",
//           },
//         },
//       ],
//     },
//     {
//       title: "UI/UX Design",
//       fileName: "DesignImg",
//       skills: [
//         "⚡ Designing highly attractive user interface for mobile and web applications",
//         "⚡ Customizing logo designs and building logos from scratch",
//         "⚡ Creating the flow of application functionalities to optimize user experience",
//       ],
//       softwareSkills: [
//         {
//           skillName: "Adobe XD",
//           fontAwesomeClassname: "simple-icons:adobexd",
//           style: {
//             color: "#FF2BC2",
//           },
//         },
//         {
//           skillName: "Figma",
//           fontAwesomeClassname: "simple-icons:figma",
//           style: {
//             color: "#F24E1E",
//           },
//         },
//         {
//           skillName: "Adobe Illustrator",
//           fontAwesomeClassname: "simple-icons:adobeillustrator",
//           style: {
//             color: "#FF7C00",
//           },
//         },
//         {
//           skillName: "Inkscape",
//           fontAwesomeClassname: "simple-icons:inkscape",
//           style: {
//             color: "#000000",
//           },
//         },
//       ],
//     },
//   ],
// };

const skills = {
  data: [
    {
      title: "Data Engineering & ETL",
      fileName: "DataScienceImg", // Keeping default illustration names so images don't break
      skills: [
        "⚡ Building robust ETL (Extract, Transform, Load) pipelines to process large textual and numerical datasets",
        "⚡ Designing automated data scraping, cleaning, and storage workflows for various web applications",
        "⚡ Working with SQL Server Integration Services (SSIS) and SQL Server Reporting Services (SSRS)",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "Pandas/Selenium",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            color: "#150458",
          },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "#181717",
          },
        },
      ],
    },
    {
      title: "Data Analytics & BI",
      fileName: "FullStackImg",
      skills: [
        "⚡ Developing interactive dashboards and visualizations to track e-commerce sales and metrics",
        "⚡ Performing complex data modeling and quantitative analysis to drive business decisions",
        "⚡ Writing advanced SQL queries for relational database design and performance optimization",
      ],
      softwareSkills: [
        {
          skillName: "Power BI",
          fontAwesomeClassname: "simple-icons:powerbi",
          style: {
            color: "#F2C811",
          },
        },
        {
          skillName: "Microsoft Excel",
          fontAwesomeClassname: "simple-icons:microsoftexcel",
          style: {
            color: "#217346",
          },
        },
        {
          skillName: "Data Analytics",
          fontAwesomeClassname: "simple-icons:googleanalytics",
          style: {
            color: "#E37400",
          },
        },
      ],
    },
    {
      title: "Cloud Architecture & Software Dev",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience in deploying and managing data solutions on cloud platforms like AWS and Google Cloud",
        "⚡ Developing software systems and backend scripts using C++, JavaScript, and Python",
        "⚡ Utilizing cloud storage APIs and developer infrastructure (Vercel, Hugging Face) for modern apps",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Google Cloud",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#00599C",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Vercel",
          fontAwesomeClassname: "simple-icons:vercel",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// // Education Page
// const competitiveSites = {
//   competitiveSites: [
//     {
//       siteName: "LeetCode",
//       iconifyClassname: "simple-icons:leetcode",
//       style: {
//         color: "#F79F1B",
//       },
//       profileLink: "https://leetcode.com/layman_brother/",
//     },
//     {
//       siteName: "HackerRank",
//       iconifyClassname: "simple-icons:hackerrank",
//       style: {
//         color: "#2EC866",
//       },
//       profileLink: "https://www.hackerrank.com/layman_brother",
//     },
//     {
//       siteName: "Codechef",
//       iconifyClassname: "simple-icons:codechef",
//       style: {
//         color: "#5B4638",
//       },
//       profileLink: "https://www.codechef.com/users/ashutosh_1919",
//     },
//     {
//       siteName: "Codeforces",
//       iconifyClassname: "simple-icons:codeforces",
//       style: {
//         color: "#1F8ACB",
//       },
//       profileLink: "http://codeforces.com/profile/layman_brother",
//     },
//     {
//       siteName: "Hackerearth",
//       iconifyClassname: "simple-icons:hackerearth",
//       style: {
//         color: "#323754",
//       },
//       profileLink: "https://www.hackerearth.com/@ashutosh391",
//     },
//     {
//       siteName: "Kaggle",
//       iconifyClassname: "simple-icons:kaggle",
//       style: {
//         color: "#20BEFF",
//       },
//       profileLink: "https://www.kaggle.com/laymanbrother",
//     },
//   ],
// };

// const degrees = {
//   degrees: [
//     {
//       title: "Indian Institute of Information Technology Kurnool",
//       subtitle: "B.Tech. in Computer Engineering",
//       logo_path: "iiitk_logo.png",
//       alt_name: "IIITDM Kurnool",
//       duration: "2016 - 2020",
//       descriptions: [
//         "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
//         "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
//         "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
//       ],
//       website_link: "http://iiitk.ac.in",
//     },
//     {
//       title: "Indiana University Bloomington",
//       subtitle: "M.S. in Computer Science",
//       logo_path: "iu_logo.png",
//       alt_name: "Indiana University Bloomington",
//       duration: "2021 - 2023",
//       descriptions: [
//         "⚡ I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.",
//         "⚡ Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.",
//         "⚡ During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.",
//       ],
//       website_link: "https://www.indiana.edu/",
//     },
//   ],
// };

const competitiveSites = {
  competitiveSites: [
    {
      siteName: "GitHub",
      iconifyClassname: "simple-icons:github",
      style: {
        color: "#181717",
      },
      profileLink: "https://github.com/theusmandev",
    },
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/", // Yahan apna exact LeetCode profile link daal lein
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/", // Data Engineering ke liye Kaggle profile zaroor banayein
    },
    {
      siteName: "Hugging Face",
      iconifyClassname: "simple-icons:huggingface",
      style: {
        color: "#FFD21E",
      },
      profileLink: "https://huggingface.co/", // Yahan apna Hugging Face link add kar lein
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Virtual University of Pakistan",
      subtitle: "BS Software Engineering",
      logo_path: "vu_logo.png", // Default image temporarily wapas lagai hai
      alt_name: "VU Pakistan",
      duration: "June 2023 - Present",
      descriptions: [
        "⚡ Currently in my 6th semester, studying core subjects like Operating Systems, Modelling and Simulation, and Financial Accounting.",
        "⚡ Building hands-on projects in Data Engineering, ETL pipelines, and Big Data technologies alongside my coursework.",
        "⚡ Actively working on real-world implementations, such as managing and automating data systems for large-scale digital libraries.",
      ],
      website_link: "https://www.vu.edu.pk/",
    },
    {
      title: "Hassan Bin Sabit Cadet College",
      subtitle: "FSC Non-Medical",
      logo_path: "Hassan_bin_sabit_logo.png", // Default image temporarily wapas lagai hai
      alt_name: "HBSCC",
      duration: "July 2020 - June 2022",
      descriptions: [
        "⚡ Completed intermediate education with a strong focus on Mathematics, Physics, and analytical problem-solving.",
      ],
      website_link: "",
    },
    {
      title: "Hassan Bin Sabit High School",
      subtitle: "Matriculation",
      logo_path: "Hassan_bin_sabit_high_school_logo.png", // Default image temporarily wapas lagai hai
      alt_name: "HBSCC",
      duration: "March 2018 - April 2020",
      descriptions: [
        "⚡ Completed matriculation building a solid foundation in core science subjects.",
      ],
      website_link: "",
    },
  ],
};

const certifications = {
  certifications: [
    // {
    //   title: "Machine Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "stanford_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
    //   alt_name: "Stanford University",
    //   color_code: "#8C151599",
    // },
    {
      title: "Introduction to Data Engineering",
      subtitle: "- Joe Reis",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/AHEWX5G7BPRH",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Foundations: Data, Data, Everywhere",
      subtitle: "- Google Career Certificates",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/OOJ88C28QBGL",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Ask Questions to Make Data-Driven Decisions",
      subtitle: "- Google Career Certificates",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/YEAWQ3I5JBXG",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Process Data from Dirty to Clean",
      subtitle: "- Google Career Certificates",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/52SV04CQG7HR",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },

    {
      title: "Python for Data Analytics",
      subtitle: "- Sean Barnes",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/Z359J8HFQRF7",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },

    {
      title: "Python Programming",
      subtitle: "- Naveed Sarwar",
      logo_path: "smit_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/18sMZQUGmogzx30zT-lYE_mJG2AB527Tw/view?usp=drive_link",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },

    {
      title: "Harnessing the Power of Data with Power BI",
      subtitle: "- Instructor: Microsoft",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/U3W6MZ81A596",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Data Analytics Essentials",
      subtitle: "- IMB Instructors",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.credly.com/badges/89c8bd79-060e-4854-94d5-74fa05d5b9e7",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },

    {
      title: "Extract, Transform and Load Data in Power BI",
      subtitle: "- Instructor: Microsoft",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/WSTPXV0DUXSR",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },

    {
      title: "Indexing, Performance Optimization & Functions in SQL Server",
      subtitle: "- Instructor: Microsoft",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/XLJX3PX2BQ9Z",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },

    {
      title: "Big Data 101",
      subtitle: "- Instructor: IBM",
      logo_path: "cognitiveclass_ai_logo.png",
      certificate_link:
        "https://courses.cognitiveclass.ai/certificates/5ee16428ba5045fda112821fdeed469a",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "SQL Problem Solving",
      subtitle: "- Katrina Glaeser Poole",
      logo_path: "ucdavis_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/U2EOLSVW49BZ",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "AWS Cloud Technical Essentials",
      subtitle: "- Morgan Willis",
      logo_path: "aws_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/R0P1X3G78MK3",
      alt_name: "GCP",
      color_code: "#2A73CC",
    },

    {
      title: "AI For Everyone",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/N42HVTDVFJ05",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },

    {
      title: "Freelancing",
      subtitle: "- Irfan Malik",
      logo_path: "digiskills_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1a95DLNaBNs4ocBb3WiQD2GrZ_w2IhNBy/view?usp=drive_link",
      alt_name: "deeplearning.ai",
      color_code: "#f2e4e499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Machine Learning Engineer",
          company: "TikTok Inc.",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "tiktok_logo.png",
          duration: "June 2023 - Present",
          location: "San Jose, CA, USA",
          description:
            "Improving ads ranking models on the core TikTok product. Experience working on modeling two-tower architectures like DeepFM, Wide & deep learning, etc. Working on Large Language Models (LLM) pretraining and Large Multi-modal Model (LMM) finetuning strategies.",
          color: "#000000",
        },
        {
          title: "Associate AI Engineer",
          company: "Legato Health Technology",
          company_url: "https://legatohealthtech.com/",
          logo_path: "legato_logo.png",
          duration: "June 2020 - Aug 2021",
          location: "Hyderabad, Telangana",
          description:
            "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
          color: "#0879bf",
        },
        {
          title: "Android and ML Developer",
          company: "Muffito Incorporation",
          company_url: "https://www.linkedin.com/company/muffito-inc/about/",
          logo_path: "muffito_logo.png",
          duration: "May 2018 - Oct 2018",
          location: "Pune, Maharashtra",
          description:
            "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
          color: "#9b1578",
        },
        {
          title: "Android Developer",
          company: "FreeCopy Pvt. Ltd.",
          company_url: "https://www.linkedin.com/company/freecopy/about/",
          logo_path: "freecopy_logo.png",
          duration: "Nov 2017 - Dec 2017",
          location: "Ahmedabad, Gujarat",
          description:
            "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Machine Learning Intern",
          company: "TikTok Inc.",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "tiktok_logo.png",
          duration: "May 2022 - Aug 2022",
          location: "San Francisco, USA",
          description:
            "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
          color: "#000000",
        },
        {
          title: "Data Science Research Intern",
          company: "Delhivery Pvt. Ltd.",
          company_url: "https://www.delhivery.com/",
          logo_path: "delhivery_logo.png",
          duration: "May 2019 - Sept 2019",
          location: "Gurgaon, Haryana",
          description:
            "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
          color: "#ee3c26",
        },
        {
          title: "Data Science Intern",
          company: "Intel Indexer LLC",
          company_url:
            "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
          logo_path: "intel_logo.jpg",
          duration: "Nov 2018 - Dec 2018",
          location: "Work From Home",
          description:
            "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Google Explore ML Facilitator",
          company: "Google",
          company_url: "https://about.google/",
          logo_path: "google_logo.png",
          duration: "June 2019 - April 2020",
          location: "Hyderabad, Telangana",
          description:
            "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
          color: "#4285F4",
        },
        {
          title: "Microsoft Student Partner",
          company: "Microsoft",
          company_url: "https://www.microsoft.com/",
          logo_path: "microsoft_logo.png",
          duration: "Aug 2019 - May 2020",
          location: "Hyderabad, Telangana",
          description:
            "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
          color: "#D83B01",
        },
        {
          title: "Mozilla Campus Captain",
          company: "Mozilla",
          company_url: "https://www.mozilla.org/",
          logo_path: "mozilla_logo.png",
          duration: "Oct 2019 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
          color: "#000000",
        },
        {
          title: "Developer Students Club Member",
          company: "DSC IIITDM Kurnool",
          company_url:
            "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
          logo_path: "dsc_logo.png",
          duration: "Jan 2018 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
          color: "#0C9D58",
        },
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "July 2019 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          color: "#181717",
        },
      ],
    },
  ],
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// // Contact Page
// const contactPageData = {
//   contactSection: {
//     title: "Contact Me",
//     profile_image_path: "animated_ashutosh.png",
//     description:
//       "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
//   },
//   blogSection: {
//     title: "Blogs",
//     subtitle:
//       "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
//     link: "https://theusmandev.blogspot.com/",
//     avatar_image_path: "blogs_image.svg",
//   },
//   addressSection: {
//     title: "Address",
//     subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
//     locality: "San Jose",
//     country: "USA",
//     region: "California",
//     postalCode: "95129",
//     streetAddress: "Saratoga Avenue",
//     avatar_image_path: "address_image.svg",
//     location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
//   },
//   phoneSection: {
//     title: "",
//     subtitle: "",
//   },
// };

// export {
//   settings,
//   seo,
//   greeting,
//   socialMediaLinks,
//   skills,
//   competitiveSites,
//   degrees,
//   certifications,
//   experience,
//   projectsHeader,
//   publicationsHeader,
//   publications,
//   contactPageData,
// };

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png", // Yahan apni tasweer ka naam likhein
    description:
      "I am available on almost every social media platform. You can message me, and I am available on almost every social media platform. You can message me, and I will reply within 24 hours. I can help you with Data Engineering, ETL Pipelines, Web Scraping, and Data Analytics.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document my experiences in data engineering, building digital libraries, and sharing technical knowledge.",
    link: "https://theusmandev.blogspot.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Faisalabad, Punjab, Pakistan",
    locality: "Faisalabad",
    country: "Pakistan",
    region: "Punjab",
    postalCode: "38000",
    streetAddress: "Faisalabad",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.google.com/?q=Faisalabad,+Pakistan",
  },
  phoneSection: {
    title: "Phone",
    subtitle: "+923277179560", // Aap chahain to yahan apna number likh sakte hain
  },
};

// Exporting all constants
export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projects,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
