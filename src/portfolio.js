/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/codeOnScreen"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: false, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Nicholas Wright",
  title: "Hi all, I'm Nick",
  subTitle: emoji(
    "As a dedicated software engineering student 🎓, I am actively exploring cutting-edge technologies, including MVC frameworks, .NET development 🛜, Android development 📱, and database management. My enthusiasm lies in collaborative learning and fostering student engagement. I am particularly drawn to the prospect of transitioning into consulting, where I can leverage my problem-solving skills to address diverse challenges for businesses."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1f4Ye04RMktYeYhzHIpejAtyooIsA3LFs/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/clusterpuck",
  linkedin: "https://www.linkedin.com/in/nicholas-g-wright/",
  gmail: "nicholas.g.wright86@gmail.com",
  discord: "https://www.discordapp.com/users/338568342065381378",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Learn to code and code to learn. I love solving problems and finding a more efficient way of completing your task",
  skills: [
    emoji(
      "⚡ Embrace new technologies while learning existing traditions"
    ),
    emoji("⚡ Engaging groups in collaborative and productive workshops "),
    emoji(
      "⚡ Developing framework projects for further expansion."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
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
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Curtin University",
      logo: require("./assets/images/curtinlogo.jpg"),
      subHeader: "Bachelor of Computing: Software Engineering",
      duration: "February 2021 - November 2024",
      desc: "Completed units with development in .NET, MVC, SQL database, Agile Development etc",
      descBullets: [
        "Obtained letter of commendation multiple times",
        "Achieved VC list",
        "Increased student engagement as a ComSSA member and UniPASS employee"
      ]
    },
    {
      schoolName: "Curtin University",
      logo: require("./assets/images/curtinlogo.jpg"),
      subHeader: "Bachelor of Science in Nanotechnology",
      duration: "February 2005 - Novemeber 2012",
      desc: "Completed a Computation Chemistry dissertation on the Chemisorption of Carbon Nanotubes",
      descBullets: ["Covered both chemistry and physics units"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
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
      role: "Intern",
      company: "Programmed/Innovation Central Perth",
      companylogo: require("./assets/images/programmedlogo.png"),
      date: "Novemeber 2022 – February 2023",
      desc: "Developed a sustainability dashboard with Power BI",
      descBullets: [
        "Developed a scheme to interface with multiple existing databases",
        "Cleaned data and provided methods for generic data updates"
      ]
    },
    {
      role: "Intern",
      company: "AVI",
      companylogo: require("./assets/images/avilogo.png"),
      date: "November 2023 – February 2024",
      desc: "Developed a task management application, both a web and mobile application and SQL database."
    },
    {
      role: "Senior Peer Learning Facilitator",
      company: "Curtin, UniPASS",
      companylogo: require("./assets/images/curtinlogo.jpg"),
      date: "Jan 2022 – Present",
      desc: "Planned and ran collaborative weekly workshops guiding computing students through challenging programming concepts."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Personal Projects",
  subtitle: "Some projects I have developed to practice and learn new skills",
  projects: [
    {
      image: require("./assets/images/recipefinder.png"),
      projectName: "Recipe Finder",
      projectDesc: "My first API and React project to find recipes based on ingredients",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://water-traveling-recess.glitch.me/findrecipe"
        }
        //  you can add extra buttons here.
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
      title: "VC List",
      subtitle:
        "Obtained VC List recognition at Curtin University for achieving the top 1% of grades in 2021.",
      image: require("./assets/images/curtinlogo.png"),
      imageAlt: "Curtin University Logo",
      footerLink: [
       
      ]
    }
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

const contactInfo = {
  title: emoji("Contact Me 📱"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "nicholas.g.wright86@gmail.com"
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
  isHireable
};
