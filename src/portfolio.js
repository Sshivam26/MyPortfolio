/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello.",
  title2: "Shivam",
  logo_name: "Sshivam :)",
  nickname: "shivamam",
  full_name: "Shivam Adbhute",
  subTitle:
    "Full Stack Developer, Machine Learning Enthusiast. Always learning.",
  resumeLink:
    "https://drive.google.com/file/d/1mg4D4iQ8xFcsLJb-2LzyUjWtUj3m1ySg/view?usp=drive_link",
  mail: "mailto:shivamam26@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/Sshivam26",
  linkedin: "https://www.linkedin.com/in/shivam-adbhute-87777622a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  gmail: "shivamam26@gmail.com",
  gitlab: " ",
  facebook: " ",
  twitter: "",
  instagram: "https://www.instagram.com/_sshivam.__?igsh=MWR4dnFnaXFjMnA2bQ==",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using ReactJS and Angular",
        "⚡ Developing mobile applications using Flutter and native Android",
        "⚡ Backend development using NodeJS, ExpressJS",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },

        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Took professional level cources",
        "⚡ Experience with good Projects",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            backgroundColor: "transparent",
            color: "#6E6E6E",
          },
        },
      ],
    },
    
  ],
};

const degrees = {
  degrees: [
    {
      title: "Indian Institue Of Technology Guwahati",
      subtitle: "Btech chemical Engineering",
      logo_path: "IITG_logo.png",
      alt_name: "IITG",
      duration: "2021 - present",
      descriptions: [
        "⚡ Studied Advanced Software Development Concepts, Data Management & Warehousing",
        "⚡learned Data Structures and Algorithms,Introduction to Computing, MATLAB",
        "⚡ Worked on projects on courses like Mobile Computing and Web Technologies.",
      ],
      website_link: "https://iitg.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Summer analytics 2023",
      subtitle: "United Latino students Association",
      logo_path: "download.png",
      certificate_link:
        "https://certificate.givemycertificate.com/c/3894d397-8609-4671-b991-7faaf8dec00e",
      alt_name: "CNA",
      color_code: "#ffc475",
    },
    {
      title: "Winter Consulting 2023",
      subtitle: "Consulting And Analytics Club IITG",
      logo_path: "download.png",
      certificate_link:
        "https://certificate.givemycertificate.com/c/e9d8004a-f5d3-41c2-9a03-2e2d44f16bd9",
      alt_name: "CNA",
      color_code: "#ffc475",
    },
    
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "me.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  // blogSection: {
  //   title: "Blogs",
  //   subtitle:
  //     "I don't blog frequently but when I do something awesome, I do try my best to write a blog about it.",
  //   link: "https://medium.com/@shivamam26",
  //   avatar_image_path: "blogs_image.svg",
  // },
};

const projects = {
  data: [
    {
      name: "ChatOasis",
      url: "https://github.com/Sshivam26/ChatOasis",
      description: " Buid a real-time chatting application utilizing the power of MongoDB, Express.js, React, and Node.js.",
      languages: [
        {
          name: "React.js",
          iconifyClass: "logos-react",
        },
        {
          name: "Node.js",
          iconifyClass: "devicon-nodejs",
        },
        {
          name: "Express.js",
          iconifyClass: "devicon-express",
        },
        {
          name: "MongoDB",
          iconifyClass: "logos-mongodb",
        },
      ],
    },
    
  ],
};


export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  projectsHeader,
  contactPageData,
  projects,
};
