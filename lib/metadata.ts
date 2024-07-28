import { AuthorType, SiteMetaData } from "@/types";

import { socialProfiles } from "./social-data";

export const BASE_URL =
  `https://${process.env.VERCEL_URL}` ||
  process.env.NEXT_PUBLIC_BASE_URL ||
  `http://localhost:${process.env.PORT || 3000}`;

export const defaultAuthor: AuthorType = {
  name: "Sajjad Zarepour",
  handle: "Experienced at Node.js/Express",
  socialProfiles,
  email: "sajadzarepur@gmail.com",
  website: "https://devsajjad.ir",
  jobTitle: "Developer Experience at Node.js / Express",
  availableForWork: true,
  location: {
    city: "Iran - Mashhad",
    media: "/city.jpg",
  },
};

const defaultTitle = `${defaultAuthor.name} | Developer Experience at Node.js / Express`;
const defaultDescription = `I'm ${defaultAuthor.name} . Here is my expriences and What I'm learning about becoming a better developer, and growing a career in tech..`;

const siteMetadata: SiteMetaData = {
  title: {
    template: `%s | ${defaultTitle}`,
    default: defaultTitle,
  },
  description: defaultDescription,
  siteRepo: "https://github.com/theDevSajjad/my-blog",
  newsletterProvider: "DevSajjad",
  newsletterUrl: "https://devsajjad.ir/posts",
  analyticsProvider: "umami",
  defaultTheme: "system",
  activeAnnouncement: false,
  announcement: {
    buttonText: "Support on DevHunt →",
    link: "https://devhunt.org/tool/modern-developer-blog-template-digital-garden-starter",
  },
  postsPerPage: 10,
  postsOnHomePage: 8,
  projectsOnHomePage: 4,
};

export default siteMetadata;
