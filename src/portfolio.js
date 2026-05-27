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
    url: "https://theusmandev.github.io/",
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
      name: "SUNB Data Cleaning & Transformation Pipeline",
      description: "A robust Python pipeline featuring 15+ automated scripts to sanitize, format, and structure digital library datasets.",
      url: "https://github.com/theusmandev/SUNB-Data-Cleaning"
    },
    {
      name: "Audible SQL Data Cleaning",
      description: "An SQL-based data wrangling project that transforms inconsistent and messy audiobook data into a structured schema.",
      url: "https://github.com/theusmandev/audible-sql-cleaning-project"
    },
    {
      name: "Python GUI Folder Explorer",
      description: "An intuitive Python-based desktop file navigator with dynamic directory expansion and fast performance.",
      url: "https://github.com/theusmandev/Folder_Explorer"
    },
    {
      name: "WebLinks Data Cleaning",
      description: "Converted chaotic browser exports into a verified list of 200+ active domains using Google Apps Script and Regex.",
      url: "https://github.com/theusmandev/WebLinks-Data-Cleaning"
    },
    {
      name: "E-Commerce Power BI Dashboard",
      description: "An end-to-end Power BI solution that transforms raw sales spreadsheets into interactive visual insights and regional breakdowns.",
      url: "https://github.com/theusmandev/Ecommerce-Sales-Dashboard"
    },
    {
      name: "Smart Searching Dashboard",
      description: "A live Power BI dashboard for the Smart Urdu Novel Bank, visualizing real-time search trends via Google Sheets.",
      url: "https://github.com/theusmandev/Smart-Searching-Dashboard"
    }
  ],
};

// File mein jahan purana projectsHeader likha hai, usay dhund kar ye change kar dein:
const projectsHeader = {
  title: "Projects",
  description: "My Data Engineering, Automation, and Web Scraping projects.",
  avatar_image_path: "projects_image.svg",
};



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






const experience = {
  title: "Experience",
  subtitle: "Work, Projects, Internships and Freelance Journey",
  description:
    "I am an aspiring Data Engineer and Developer with hands-on experience in building automated ETL pipelines, managing large-scale digital libraries, and delivering robust e-commerce solutions. I specialize in Python, SQL, and Data Visualization.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Founder & Data Engineer",
          company: "Urdu Novel Bank",
          company_url: "https://www.urdunovelbanks.com/", 
          logo_path: "urdu_novel_bank_logo.png", 
          duration: "April 2024 - Present",
          location: "Remote",
          description:
            "Founded and currently managing a digital library hosting 1 Lac+ Urdu novels. Developed and deployed a live searching system and automated content generators. Built complex ETL pipelines in Python to scrape, clean, and merge extensive datasets, and integrated real-time Power BI dashboards using Google Sheets API. Also leading end-to-end SEO optimization.",
          color: "#0879bf",
        },
       
        {
          title: "E-Commerce & Fintech Consultant",
          company: "Meet Usama LTD",
          company_url: "https://www.youtube.com/@meetusama",
          logo_path: "meet_usama_logo.png", 
          duration: "Feb 2026 - Present",
          location: "On Site",
          description:
            "Facilitating fintech setups and e-commerce solutions for multiple B2B clients. Handling platform integrations and verifications for Stripe, Wise, and Payoneer to ensure seamless cross-border transactions. Drafting professional business agreements and managing secure client invoicing.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Data Analyst",
          company: "Elevvo Pathways",
          company_url: "https://elevvo.tech/home",
          logo_path: "elavopathway_log.png", // Using a safe existing logo to prevent crashes
          duration: "Aug 2025 - Nov 2025",
          location: "Remote",
          description:
            "Conducted Exploratory Data Analysis (EDA) and Statistical Data Analysis to extract meaningful insights from complex datasets. Assisted in cleaning, transforming, and visualizing data to support data-driven decision-making processes.",
          color: "#faba00", // Yellowish color to match the owl logo in your screenshot
        }
      ]
    }
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



// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "usman_pic.png", // Yahan apni tasweer ka naam likhein
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
