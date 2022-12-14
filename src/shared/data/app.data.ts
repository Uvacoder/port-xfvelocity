import { Page } from "../types/app.types";

export const pageData: Page[] = [
  { component: "Home", id: "home", inView: false },
  { component: "About", id: "about", inView: false },
  {
    component: "Projects",
    id: "buildadream",
    inView: false,
    info: {
      name: "Build A-Dream",
      desc: "This was one of the first projects that I started working on and it's been re-worked multiple times, currently using Vue & Nuxtjs.<br /><br /> This website was built for a family member to help promote their landscaping business.",
      github: "https://github.com/xfvelocity/build-a-dream",
      link: "https://buildadream.co.uk/",
      jira: "https://alex-long-projects.atlassian.net/jira/software/projects/BD/boards/4",
      figma:
        "https://www.figma.com/file/Ti101e0dfTHaOC6k9Plg4I/Build-A-Dream?node-id=0%3A1",
      technologies: ["typescript", "vue", "vuetify", "nuxt"],
      img: "buildadream.png",
    },
  },
  {
    component: "Projects",
    id: "trackit",
    inView: false,
    info: {
      name: "Track IT (PWA)",
      desc: 'This is an updated version of my previous project "Gym Progress Tracker". This is used to help create meal plans throughout the week, track nutrients and build up shopping lists',
      github: "https://github.com/xfvelocity/track-it",
      link: "https://track-it.co.uk/",
      jira: "https://alex-long-projects.atlassian.net/jira/software/projects/TI/boards/3",
      figma:
        "https://www.figma.com/file/KOV22iCoPwxCdkzgeDubL9/Track-IT?node-id=0%3A1",
      technologies: ["typescript", "vue", "vuetify", "firebase"],
      img: "gymtracker.png",
    },
  },
  {
    component: "Projects",
    id: "hostingsolutions",
    inView: false,
    info: {
      name: "Hosting Solutions",
      desc: "HostingSolutions is one of the first websites I ever created. It helped me improve my HTML/CSS skills, and learn about SVG animations",
      github: "https://github.com/xfvelocity/hosting-solutions",
      link: "https://hosting-solutions.herokuapp.com/",
      figma:
        "https://www.figma.com/file/OiXuQZ9nhFYGX4ZBXIMHtn/Hosting-Solutions?node-id=0%3A1",
      technologies: ["html", "css", "javascript", "sass"],
      img: "hostingsolutions.png",
    },
  },
  { component: "Contact", id: "contact", inView: false },
];
