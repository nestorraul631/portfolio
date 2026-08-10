import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "vertex-ai",
    position: "Senior AI & Full Stack Software Engineer",
    company: "Vertex AI Systems Inc.",
    location: "United States, Remote",
    startDate: new Date("2023-02-01"),
    endDate: new Date("2024-03-01"),
    description: [
      "Designed and delivered AI-powered applications for real-world business workflows.",
      "Built intelligent systems that improve knowledge access, decision-making and operational efficiency.",
      "Developed scalable software platforms supporting AI-driven business processes.",
    ],
    achievements: [
      "Designed and delivered AI-powered applications for real-world business workflows.",
      "Built intelligent systems that improve knowledge access, decision-making and operational efficiency.",
      "Developed scalable software platforms supporting AI-driven business processes.",
      "Worked across product, engineering and business teams to deliver production-ready solutions.",
      "Improved system reliability, scalability and usability for enterprise-level adoption.",
    ],
    skills: ["Typescript", "React", "Databricks", "Java", "Python"],
    // companyUrl: "",
    logo: "/experience/vertex.png",
  },
  {
    id: "northpeak-software",
    position: "Senior Full Stack Software Engineer",
    company: "NorthPeak Software, Inc.",
    location: "United State, Remote",
    startDate: new Date("2023-01-01"),
    endDate: new Date("2024-12-01"),
    description: [
      "Designed and built applications supporting core business operations.",
      "Improved system architecture and reliability as platforms grew.",
      "Built automation features to improve operational efficiency.",
    ],
    achievements: [
      "Designed and built applications supporting core business operations.",
      "Improved system architecture and reliability as platforms grew.",
      "Built automation features to improve operational efficiency.",
      "Collaborated remotely with product managers, engineers and stakeholders.",
      "Contributed to technical decisions and long term platform planning."
    ],
    skills: ["FastAPI", "Python", "AWS", "Next.js", "React", "Typescript"],
    // companyUrl: "https://muzecmo.com",
    logo: "/experience/northpeak.jpg",
  },
  {
    id: "self-employed",
    position: "Web Developer Intern",
    company: "Self-Employed",
    location: "Entre Ríos, Argentina",
    startDate: new Date("2022-03-01"),
    endDate: new Date("2022-12-01"),
    description: [
      "Built AI assistants, workflow automation tools and intelligent features using OpenAI APIs, LangChain concepts, Python, FastAPI and modern full-stack technologies.",
      "Developed production-ready web applications with React, Next.js and Node.js, backed by scalable databases and cloud infrastructure.",
      "Improved client business processes through automation and AI-driven solutions.",
    ],
    achievements: [
      "Built AI assistants, workflow automation tools and intelligent features using OpenAI APIs, LangChain concepts, Python, FastAPI and modern full-stack technologies",
      "Developed production-ready web applications with React, Next.js and Node.js, backed by scalable databases and cloud infrastructure.",
      "Improved client business processes through automation and AI-driven solutions.",
      "Managed complete project lifecycles including architecture design, development, deployment and client collaboration."
    ],
    skills: ["React", "Angular", "GraphQL", "AWS", "HTML 5", "CSS 3", "Javascript"],
    // companyUrl: "https://builtdesign.in",
    logo: "/experience/self.jpg",
  },
  {
    id: "innovatech",
    position: "Full Stack Software Engineer",
    company: "Innovatech Solutions",
    location: "Entre Ríos, Argentina",
    startDate: new Date("2019-05-01"),
    endDate: new Date("2022-02-01"),
    description: [
      "Built and improved business applications supporting daily operations.",
      "Designed features based on customer and business requirements.",
      "Connected multiple business systems to improve process efficiency.",
    ],
    achievements: [
      "Built and improved business applications supporting daily operations",
      "Designed features based on customer and business requirements.",
      "Connected multiple business systems to improve process efficiency.",
      "Improved application performance and stability over time."
    ],
    skills: ["React", "Angular", "GraphQL", "AWS", "HTML 5", "CSS 3", "Javascript"],
    // companyUrl: "https://builtdesign.in",
    logo: "/experience/innovatech.jpg",
  },
  {
    id: "nexo-digital",
    position: "Software Developer",
    company: "Nexo Digital Labs",
    location: "Entre Ríos, Argentina",
    startDate: new Date("2016-12-01"),
    endDate: new Date("2019-04-01"),
    description: [
      "Built and enhanced business applications for operational workflows.",
      "Designed features based on client requirements.",
      "Supported database operations and troubleshooting.",
    ],
    achievements: [
      "Built and enhanced business applications for operational workflows",
      "Designed features based on client requirements.",
      "Connected systems to improve process efficiency.",
      "Maintained and improved application performance and stability."
    ],
    skills: ["React", "Angular", "GraphQL", "AWS", "HTML 5", "CSS 3", "Javascript"],
    // companyUrl: "https://builtdesign.in",
    logo: "/experience/nexo.png",
  },
 {
    id: "nexo-digital2",
    position: "Junior Software Developer",
    company: "Nexo Digital Labs",
    location: "Entre Ríos, Argentina",
    startDate: new Date("2016-02-01"),
    endDate: new Date("2016-11-01"),
    description: [
      "Assisted in developing and maintaining business applications.",
      "Implemented new features based on requirements from senior engineers.",
      "Supported database operations and troubleshooting.",
    ],
    achievements: [
      "Assisted in developing and maintaining business applications",
      "Implemented new features based on requirements from senior engineers.",
      "Supported database operations and troubleshooting.",
      "Worked with the team to improve code quality and delivery."
    ],
    skills: ["React", "Angular", "GraphQL", "AWS", "HTML 5", "CSS 3", "Javascript"],
    // companyUrl: "https://builtdesign.in",
    logo: "/experience/nexo.png",
  },
];
