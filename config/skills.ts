import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
// ==========================================
  // 1. AI & LLM ENGINEERING
  // ==========================================
  {
    name: "AI Agents",
    description: "Orchestrate autonomous workflows and multi-step reasoning systems for complex task execution.",
    rating: 5,
    icon: Icons.aiagents,
  },
  {
    name: "RAG Systems",
    description: "Augment language models with external knowledge bases to deliver accurate, contextual outputs.",
    rating: 5,
    icon: Icons.ragsystems,
  },
  {
    name: "LLM Integrations",
    description: "Seamlessly embed state-of-the-art foundation models into existing application architectures.",
    rating: 5,
    icon: Icons.llmintegrations,
  },
  {
    name: "OpenAI APIs",
    description: "Leverage cutting-edge generative models for natural language processing and multimodal tasks.",
    rating: 5,
    icon: Icons.openai,
  },
  {
    name: "LangChain",
    description: "Compose modular chains and memory structures to power complex artificial intelligence applications.",
    rating: 5,
    icon: Icons.langchain,
  },
  {
    name: "Vector Databases",
    description: "Index high-dimensional embeddings in Pinecone and FAISS for fast semantic retrieval.",
    rating: 5,
    icon: Icons.vectordatabases,
  },

  // ==========================================
  // 2. BACKEND ARCHITECTURE & APIS
  // ==========================================
  {
    name: "Node.js",
    description: "Run JavaScript on the server side, enabling dynamic and responsive applications.",
    rating: 5,
    icon: Icons.nodejs,
  },
  // {
  //   name: "Nest.js",
  //   description: "Create scalable and modular applications with a progressive Node.js framework.",
  //   rating: 4,
  //   icon: Icons.nestjs,
  // },
  {
    name: "Express.js",
    description: "Build web applications and APIs quickly using a fast, unopinionated Node.js framework.",
    rating: 5,
    icon: Icons.express,
  },
  {
    name: "FastAPI",
    description: "Deliver high-performance Python APIs backed by automatic OpenAPI docs and strict type validation.",
    rating: 5,
    icon: Icons.fastapi,
  },
  // {
  //   name: "Django",
  //   description: "Accelerate backend development with a secure, battery-included Python web framework.",
  //   rating: 4,
  //   icon: Icons.django,
  // },
  // {
  //   name: "Socket.io",
  //   description: "Enable real-time, bidirectional communication between clients and servers effortlessly.",
  //   rating: 5,
  //   icon: Icons.socketio,
  // },
  {
    name: "GraphQL",
    description: "Fetch data precisely with a powerful query language for APIs and runtime execution.",
    rating: 5,
    icon: Icons.graphql,
  },
  {
    name: "REST APIs",
    description: "Craft clean, standardized web endpoints following strict architectural conventions.",
    rating: 5,
    icon: Icons.restapi,
  },
  {
    name: "Microservices",
    description: "Decouple massive applications into independently deployable, fault-tolerant domain services.",
    rating: 5,
    icon: Icons.microservices,
  },
  {
    name: "Python",
    description: "Script robust algorithms, data processing pipelines, and machine learning models.",
    rating: 5,
    icon: Icons.python,
  },
  {
    name: "Java",
    description: "Engineer highly stable, object-oriented software built for enterprise scalability.",
    rating: 4,
    icon: Icons.java,
  },
  {
    name: "Go",
    description: "Write concurrent, memory-efficient backend binaries tailored for microservice infrastructure.",
    rating: 4,
    icon: Icons.go,
  },
  // {
  //   name: "Rust",
  //   description: "Build blazing-fast, memory-safe systems software without garbage collection overhead.",
  //   rating: 4,
  //   icon: Icons.rust,
  // },
  {
    name: "C# / .NET",
    description: "Develop performant cross-platform applications within Microsoft's robust ecosystem.",
    rating: 4,
    icon: Icons.csharp,
  },
  {
    name: "C",
    description: "Program low-level systems and resource-constrained environments requiring high execution speed.",
    rating: 4,
    icon: Icons.c,
  },
  {
    name: "PHP / Laravel",
    description: "Rapidly assemble structured web portals utilizing modern server-side rendering paradigms.",
    rating: 4,
    icon: Icons.laravel,
  },
  {
    name: "Ruby on Rails",
    description: "Turn complex domain concepts into functional web applications using opinionated conventions.",
    rating: 4,
    icon: Icons.rubyonrails,
  },

  // ==========================================
  // 3. FRONTEND & MOBILE DEVELOPMENT
  // ==========================================
  {
    name: "TypeScript",
    description: "Enhance JavaScript with static types, making code more understandable and reliable.",
    rating: 5,
    icon: Icons.typescript,
  },
  {
    name: "JavaScript",
    description: "Create interactive and dynamic web experiences with the versatile scripting language.",
    rating: 5,
    icon: Icons.javascript,
  },
  {
    name: "Next.js",
    description: "Effortlessly build dynamic apps with routing, layouts, loading UI, and API routes.",
    rating: 5,
    icon: Icons.nextjs,
  },
  {
    name: "React",
    description: "Craft interactive user interfaces using components, state, props, and virtual DOM.",
    rating: 5,
    icon: Icons.react,
  },
  // {
  //   name: "Redux",
  //   description: "Manage app state effectively using a predictable and centralized state container.",
  //   rating: 5,
  //   icon: Icons.redux,
  // },
  {
    name: "Angular",
    description: "Build dynamic web apps with a TypeScript-based open-source framework by Google.",
    rating: 4,
    icon: Icons.angular,
  },
  // {
  //   name: "React Native",
  //   description: "Develop cross-platform mobile apps using React for consistent and engaging experiences.",
  //   rating: 4,
  //   icon: Icons.react,
  // },
  {
    name: "Tailwind CSS",
    description: "Design beautiful, modern websites faster with a utility-first CSS framework.",
    rating: 5,
    icon: Icons.tailwindcss,
  },
  // {
  //   name: "Material UI",
  //   description: "Create stunning and responsive UIs with a popular React UI framework.",
  //   rating: 4,
  //   icon: Icons.mui,
  // },
  // {
  //   name: "Bootstrap",
  //   description: "Quickly create responsive and appealing web designs using a popular CSS framework.",
  //   rating: 4,
  //   icon: Icons.bootstrap,
  // },
  // {
  //   name: "HTML5",
  //   description: "Structure web content beautifully with the latest version of HyperText Markup Language.",
  //   rating: 5,
  //   icon: Icons.html5,
  // },
  // {
  //   name: "CSS3",
  //   description: "Style web pages creatively with the latest iteration of Cascading Style Sheets.",
  //   rating: 5,
  //   icon: Icons.css3,
  // },

  // ==========================================
  // 4. DATA & STORAGE SOLUTIONS
  // ==========================================
  {
    name: "PostgreSQL",
    description: "Store complex relational data reliably using advanced indexing and JSON querying capabilities.",
    rating: 5,
    icon: Icons.postgresql,
  },
  {
    name: "MySQL",
    description: "Manage and organize relational databases efficiently for data-driven applications.",
    rating: 5,
    icon: Icons.mysql,
  },
  // {
  //   name: "SQL",
  //   description: "Author optimized queries and schema migrations across relational database systems.",
  //   rating: 5,
  //   icon: Icons.sql,
  // },
  {
    name: "MongoDB",
    description: "Store and retrieve data seamlessly with a flexible and scalable NoSQL database.",
    rating: 5,
    icon: Icons.mongodb,
  },
  {
    name: "Redis",
    description: "Accelerate application speeds using an in-memory key-value cache and pub/sub broker.",
    rating: 5,
    icon: Icons.redis,
  },
  {
    name: "Supabase",
    description: "Bootstrap full backend features instantly with open-source Postgres, auth, and edge functions.",
    rating: 5,
    icon: Icons.supabase,
  },

  // ==========================================
  // 5. DEVOPS, CLOUD & INFRASTRUCTURE
  // ==========================================
  {
    name: "AWS",
    description: "Utilize Amazon Web Services to build and deploy scalable, reliable, and secure applications.",
    rating: 4,
    icon: Icons.amazonaws,
  },
  {
    name: "Docker",
    description: "Package applications alongside their dependencies into portable, isolated containers.",
    rating: 5,
    icon: Icons.docker,
  },
  {
    name: "Kubernetes",
    description: "Automate container deployment, scaling, and operational management at scale.",
    rating: 4,
    icon: Icons.kubernetes,
  },
  {
    name: "Terraform",
    description: "Provision cloud resources declaratively through infrastructure-as-code configuration files.",
    rating: 4,
    icon: Icons.terraform,
  },
  {
    name: "Azure",
    description: "Deploy integrated cloud solutions tailored for enterprise hybrid environments.",
    rating: 4,
    icon: Icons.azure,
  },
  {
    name: "GCP",
    description: "Run cloud workloads backed by Google's high-performance compute and data infrastructure.",
    rating: 4,
    icon: Icons.gcp,
  },
  {
    name: "CI/CD",
    description: "Automate testing, build validation, and deployment pipelines to accelerate delivery cycles.",
    rating: 5,
    icon: Icons.cicd,
  },
  {
    name: "Vercel",
    description: "Deploy frontend frameworks and edge functions with zero-configuration continuous integration.",
    rating: 5,
    icon: Icons.vercel,
  },
  {
    name: "Netlify",
    description: "Automate static site builds, serverless function deployments, and global CDN hosting.",
    rating: 4,
    icon: Icons.netlify,
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
