import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "kelati.dev",
  EMAIL: "kelati.dev@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 1,
  NUM_WORKS_ON_HOMEPAGE: 1,
  NUM_PROJECTS_ON_HOMEPAGE: 1,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Kelati Andemichael is a Web Developer from Seattle, WA.",
};

export const BLOG: Metadata = {
  TITLE: "Creative Porfolio",
  DESCRIPTION: "Examples of multimedia work I have produced",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "twitter-x",
    HREF: "https://twitter.com/kelati_dev",
  },
  { 
    NAME: "github",
    HREF: "https://github.com/kelati-dev"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/kandemichael",
  }
];
