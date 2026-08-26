import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  // {
  //   id: "convot",
  //   companyName: "Convot",
  //   type: "Personal",
  //   category: ["Full Stack", "Backend", "Web Dev"],
  //   shortDescription:
  //     "Production-ready AI chatbot platform that crawls, indexes, and embeds knowledge from PDFs/URLs/text to deliver source-grounded answers via a one-line widget.",
  //   techStack: ["Next.js", "React", "Node.js", "Typescript", "Python"],
  //   startDate: new Date("2024-04-01"),
  //   endDate: new Date("2024-08-01"),
  //   companyLogoImg: "/projects/convot/logo.png",
  //   pagesInfoArr: [
  //     {
  //       title: "Ingestion & Retrieval",
  //       description:
  //         "Designed ingestion and retrieval pipelines supporting multiple content sources with secure tenant isolation.",
  //       imgArr: ["/logo.png"],
  //     },
  //   ],
  //   descriptionDetails: {
  //     paragraphs: [
  //       "Convot is a production-ready AI chatbot platform designed to be embedded on any website with a single line widget.",
  //       "It supports crawling and indexing knowledge from PDFs, URLs, and plain text and it returns context-aware, source-grounded answers with integrated analytics.",
  //     ],
  //     bullets: [
  //       "Built a production-ready AI chatbot platform with integrated analytics and a one-line embed widget.",
  //       "Designed ingestion and retrieval pipelines to support multiple sources (PDFs, URLs, text) with tenant isolation.",
  //       "Focused on reliability, security and traceable answers by grounding responses in retrieved sources.",
  //     ],
  //   },
  // },
  {
    id: "arrived",
    companyName: "Arrived",
    type: "Professional",
    category: ["Full Stack", "Web Dev", "FinTech", "PropTech"],
    shortDescription:
      "A modern PropTech investment platform enabling everyday investors to buy shares in rental properties and vacation rentals with low minimums.",
    websiteLink: "https://arrived.com/",
    // githubLink: "",
    techStack: ["Next.js", "React", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL"],
    startDate: new Date("2023-01-01"),
    endDate: new Date("2023-06-01"),
    companyLogoImg: "/projects/arrived/01.png",
    pagesInfoArr: [
      {
        title: "Invest",
        description:
          "Dynamic property marketplace allowing users to browse, filter and purchase fractional shares of single-family rental and vacation properties.",
        imgArr: ["/projects/arrived/02.png"],
      },
      {
        title: "About",
        description:
          "Informational corporate overview highlighting the mission, leadership team, SEC-qualified compliance and how fractional real estate investing works.",
        imgArr: ["/projects/arrived/03.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Arrived is an innovative real estate investing platform backed by world-class investors that makes homeownership and rental property investing accessible to everyone through fractional shares.",
        "Built with a robust full-stack architecture, the platform features a secure, high-performance marketplace where users can browse vetted properties, review financial projections and execute investments seamlessly.",
        "The application integrates secure authentication workflows, portfolio performance tracking, and streamlined checkout processes, ensuring a frictionless digital experience for retail investors.",
      ],
      bullets: [
        "Engineered a high-performance investment marketplace supporting real-time property discovery, detailed financial metrics, and fractional share purchases.",
        "Developed a comprehensive 'About' and educational section designed to build trust, explain SEC-compliant offerings, and outline investment strategies.",
        "Implemented a secure user authentication and dashboard login system for tracking asset portfolios, dividend distributions and account history.",
        "Optimized front-end components and responsive layouts for smooth cross-device interaction and fast asset loading.",
        "Integrated robust backend data management to handle transaction processing, user verification and property investment metrics.",
      ],
    },
  },
  {
    id: "ridgestreetcap",
    companyName: "Ridge Street Capital",
    type: "Personal",
    category: ["Full Stack", "Web Dev", "FinTech", "Webflow"],
    shortDescription:
      "A modern Webflow-powered investment loan web application specializing in fast, flexible financing options including Fix and Flip, DSCR and Construction loans for real estate investors.",
    websiteLink: "https://www.ridgestreetcap.com/",
    // githubLink: "",
    techStack: ["Webflow", "Javascript", "HTML 5", "CSS 3", "FinTech API Integrations"],
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-04-01"),
    companyLogoImg: "/projects/ridgestreetcap/01.png",
    pagesInfoArr: [
      {
        title: "Fix and Flip",
        description:
          "Dedicated landing page and application flow for short-term bridge loans tailored to real estate rehabbers and flippers.",
        imgArr: ["/projects/ridgestreetcap/02.png"],
      },
      {
        title: "DSCR Loans",
        description:
          "Informational and interactive loan application portal focused on Debt Service Coverage Ratio financing for rental property investors.",
        imgArr: ["/projects/ridgestreetcap/03.png"],
      },
      {
        title: "Construction Loans",
        description:
          "Streamlined financing solution pages detailing ground-up construction and major renovation capital draw schedules.",
        imgArr: ["/projects/ridgestreetcap/04.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Ridge Street Capital is a high-performance investment loan web application designed to connect real estate investors with fast, reliable funding options for residential and commercial projects.",
        "Built using Webflow and enhanced with custom JavaScript integrations, the platform delivers an intuitive digital application experience, streamlining complex financial workflows for borrowers.",
        "The application features specialized loan product pathways—including Fix and Flip, DSCR and Construction loans—optimized for conversion, fast loading and seamless cross-device accessibility.",
      ],
      bullets: [
        "Engineered a responsive, high-conversion Webflow investment loan application portal tailored for real estate investors and brokers.",
        "Developed dedicated product pages and interactive calculation workflows for Fix and Flip, DSCR and Construction loans.",
        "Integrated custom JavaScript functionality to streamline user onboarding, document intake and loan inquiry submissions.",
        "Optimized site architecture and asset delivery for lightning-fast performance, superior SEO rankings and seamless mobile responsiveness.",
        "Designed a clean, professional UI emphasizing institutional trust, financial transparency and straightforward capital access.",
      ],
    },
  },
  {
    id: "niya-saas-template",
    companyName: "Niya SaaS Template",
    type: "Personal",
    category: ["Full Stack", "Web Dev", "UI/UX"],
    shortDescription:
      "Production-ready Next.js 15 template for developers and AI startups. Includes authentication, state management, beautiful UI components and everything needed to build scalable SaaS applications.",
    // websiteLink: "",
    // githubLink: "",
    techStack: ["Next.js", "React", "Typescript", "Supabase", "Tailwind CSS"],
    startDate: new Date("2024-08-01"),
    endDate: new Date("2024-10-01"),
    companyLogoImg: "/projects/niya/logo.png",
    pagesInfoArr: [
      // {
      //   title: "Landing Page",
      //   description:
      //     "Modern landing page showcasing the template features, tech stack, and pricing options.",
      //   imgArr: ["/logo.png"],
      // },
      // {
      //   title: "Authentication System",
      //   description:
      //     "Complete authentication system with Supabase, protected routes, and role-based access control.",
      //   imgArr: ["/logo.png"],
      // },
      // {
      //   title: "Dashboard & Components",
      //   description:
      //     "Beautiful UI components with Magic UI, Radix primitives, and comprehensive dashboard templates.",
      //   imgArr: ["/logo.png"],
      // },
    ],
    descriptionDetails: {
      paragraphs: [
        "Niya is a production-ready Next.js 15 template designed for developers and AI startups. Built with modern best practices, it includes everything needed to build scalable SaaS applications.",
        "The template features a complete authentication system with Supabase, beautiful UI components with Magic UI and Radix primitives, state management with Zustand and React Query, and full TypeScript support with Zod validation.",
        "It's optimized for performance, includes SEO-friendly metadata, and provides a solid foundation for rapid prototyping and production deployment.",
      ],
      bullets: [
        "Created a production-ready Next.js 15 template with complete authentication system and protected routes.",
        "Integrated Supabase for database, authentication, and real-time features with full TypeScript support.",
        "Built comprehensive UI component library with Magic UI, Radix primitives, and Tailwind CSS styling.",
        "Implemented state management with Zustand for client state and React Query for server state management.",
        "Designed for developers and AI startups with all essential features to start building SaaS products.",
        "Achieved 30+ GitHub stars and recognition as a comprehensive starter template for modern web applications.",
      ],
    },
  },
  {
    id: "newerarealestate",
    companyName: "Newerarealestate",
    type: "Personal",
    category: ["Full Stack", "Web Dev", "UI/UX"],
    shortDescription:
      "Production-ready, full-service real estate web platform designed to disrupt traditional commission-based models with flat-fee home listings and interactive financial tools.",
    websiteLink: "https://www.newerarealestate.ca/",
    // githubLink: "",
    techStack: ["WordPress", "PHP", "Javascript", "MySQL", "Tailwind CSS"],
    startDate: new Date("2024-08-01"),
    endDate: new Date("2024-10-01"),
    companyLogoImg: "/projects/newerarealestate/1.png",
    pagesInfoArr: [
      {
        title: "Listings",
        description:
          "Robust property catalog and comparison system with advanced filtering and search across multiple regions.",
        imgArr: ["/projects/newerarealestate/4.png"],
      },
      {
        title: "Sellers",
        description:
          "Interactive buyer and seller pages featuring custom financial calculators computing real-time commission savings and agent rebates.",
        imgArr: ["/projects/newerarealestate/5.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "New Era Real Estate is a production-ready, full-service real estate web platform designed to disrupt traditional commission-based models by offering flat-fee home listings and interactive financial calculators.",
        "Built using WordPress, PHP, JavaScript and MySQL, the platform handles extensive property listing catalogs and high-traffic user engagement with managed hosting and performance tuning.",
        "It features dynamic buyer and seller financial calculators, a robust property discovery and comparison system and responsive UI components optimized for fast load times and an intuitive cross-device experience.",
      ],
      bullets: [
        "Engineered a high-performance, SEO-optimized WordPress and PHP web application to handle extensive property listing catalogs and high-traffic user engagement.",
        "Integrated dynamic, interactive buyer and seller financial calculators powered by JavaScript to compute real-time commission savings and agent rebates based on custom property valuations.",
        "Built a robust property discovery and comparison system leveraging MySQL and custom post types, enabling users to seamlessly browse, filter and review active listings across multiple regions.",
        "Implemented responsive, modern UI components with clean CSS layouts, ensuring an intuitive cross-device user experience for both homebuyers and sellers.",
        "Optimized site architecture using managed hosting and performance tuning for fast load times, smooth client-side interactions and production deployment readiness.",
      ],
    },
  },
  {
    id: "gleedentistry",
    companyName: "Glee Dentistry",
    type: "Personal",
    category: ["Web Dev", "Healthcare", "UI/UX"],
    shortDescription:
      "A professional, patient-centric dental practice website featuring comprehensive service offerings and an integrated membership program to enhance oral health accessibility.",
    websiteLink: "https://gleedentistry.com/",
    // githubLink: "",
    techStack: ["WordPress", "PHP", "Javascript", "MySQL", "Responsive CSS"],
    startDate: new Date("2024-08-01"),
    endDate: new Date("2024-10-01"),
    companyLogoImg: "/projects/gleedentistry/1.png",
    pagesInfoArr: [
      {
        title: "Services",
        description:
          "Detailed showcase of general and cosmetic dentistry, including dental implants, veneers, whitening and specialized restorative treatments.",
        imgArr: ["/projects/gleedentistry/2.png"],
      },
      {
        title: "Membership",
        description:
          "Integrated program details providing patients with transparent access to dental care plans and affordable oral health maintenance options.",
        imgArr: ["/projects/gleedentistry/3.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Glee Dentistry is a patient-focused dental practice platform designed to facilitate easy access to cosmetic and restorative dental services while building long-term patient relationships.",
        "Built on a professional WordPress architecture, the site integrates custom service modules, patient intake forms and membership management to streamline the patient journey from discovery to appointment scheduling.",
        "The platform emphasizes a clean, welcoming UI that reflects the clinic's caring approach, optimized for mobile responsiveness and performance to ensure patients can easily find information and book emergency services.",
      ],
      bullets: [
        "Engineered a high-performance, SEO-optimized WordPress site to showcase a comprehensive catalog of general and cosmetic dental procedures.",
        "Developed a structured 'Services' hub that allows patients to explore diverse treatment options like implants, veneers and smile makeovers with clear, educational content.",
        "Implemented a user-friendly 'Membership' section to explain patient care plans making high-quality dental care more accessible and transparent.",
        "Integrated dynamic contact forms and appointment request functionality, ensuring seamless communication for new patients and emergency dental needs.",
        "Optimized site architecture for fast load times and intuitive navigation, resulting in a professional and accessible digital presence for the Encinitas-based clinic.",
      ],
    },
  },
  // {
  //   id: "portfolio-card",
  //   companyName: "Portfolio Card",
  //   type: "Personal",
  //   category: ["Web Dev", "Frontend", "3D Modeling"],
  //   shortDescription:
  //     "Forged an immersive 3D Portfolio Card utilizing the prowess of Three.js and Blender, where art and technology converge in an interactive masterpiece.",
  //   // websiteLink: "https://card.nestorfanelli.xyz/",
  //   // githubLink: "https://github.com/nestorraul631/3d-portfolio-card",
  //   techStack: ["React", "Javascript", "HTML 5", "CSS 3"],
  //   startDate: new Date("2022-03-01"),
  //   endDate: new Date("2022-07-01"),
  //   companyLogoImg: "/projects/card/logo.png",
  //   pagesInfoArr: [
  //     {
  //       title: "Card Views",
  //       description: "Front and back views of the interactive 3D card",
  //       imgArr: ["/projects/card/card_2.png", "/projects/card/card_3.webp"],
  //     },
  //     {
  //       title: "Interactive Elements",
  //       description:
  //         "Custom links embedded in the 3D model with interactive animations",
  //       imgArr: ["/projects/card/card_1.png"],
  //     },
  //     {
  //       title: "3D Model Development",
  //       description: "Blender project showcasing the model creation process",
  //       imgArr: ["/projects/card/card_4.png"],
  //     },
  //   ],
  //   descriptionDetails: {
  //     paragraphs: [
  //       "In my personal, I've ventured into the world of creativity, fashioning a distinctive portfolio card through the utilization of Three.js.",
  //       "This portfolio card transcends convention; it emerges as a captivating 3D model, adorned with meticulous lighting arrangements that conjure a spellbinding visual journey.",
  //       "To materialize this concept, I've harnessed the combined potential of Three.js and Blender, orchestrating a meticulous crafting of the central 3D model that serves as the cornerstone of the card's allure.",
  //       "Yet, the allure extends beyond aesthetics. I've ingeniously interwoven custom links directly into the fabric of Three.js components. Through the creation and seamless integration of novel components, these additions elegantly rest upon the card's surface, mirroring its rotations and delivering an interactive dimension to my portfolio.",
  //       "The portfolio card itself is an opus of motion, perpetually swaying in an auto-rotational dance that unfurls its multifaceted essence. As an enhancement, I've introduced an instinctive user interaction element. A simple, intuitive drag of the card in specific directions grants viewers a comprehensive vantage, enabling exploration from every conceivable angle.",
  //       "At its core, my personal epitomizes technical finesse, artistic expression, and interactive design. The amalgamation of Three.js, Blender's prowess, and the innovation of component integration has birthed not only a portfolio card, but a dynamic encounter leaving an indelible imprint on all who partake.",
  //     ],
  //     bullets: [
  //       "Conceptualized and realized a distinct portfolio card using Three.js, highlighting creative exploration.",
  //       "Crafted a mesmerizing 3D model enhanced by thoughtful lighting arrangements, resulting in a captivating visual voyage.",
  //       "Leveraged the synergy of Three.js and Blender to meticulously sculpt and refine the central 3D model, embodying meticulous attention to detail.",
  //       "Innovatively integrated custom links within Three.js components, introducing an interactive layer via seamlessly incorporated new elements.",
  //       "Enabled an auto-rotating feature for the portfolio card, perpetually showcasing its various facets to observers.",
  //       "Introduced an instinctual user interaction mechanism, allowing viewers to comprehensively explore the card's dimensions through simple, intuitive dragging motions.",
  //       "Represented a fusion of technical prowess, artistic ingenuity, and interactive design in a project that reshapes the boundaries of conventional portfolio representation.",
  //     ],
  //   },
  // },
  // {
  //   id: "the-super-focus",
  //   companyName: "TheSuperFocus",
  //   type: "Personal",
  //   category: ["Full Stack", "Web Dev", "UI/UX"],
  //   shortDescription:
  //     "Pomodoro-inspired productivity web app with real-time sessions and recurring payments.",
  //   techStack: [
  //     "Next.js",
  //     "React",
  //     "Node.js",
  //     "Socket.io",
  //     "Typescript",
  //     "MongoDB",
  //   ],
  //   startDate: new Date("2023-06-01"),
  //   endDate: new Date("2023-12-01"),
  //   companyLogoImg: "/logo.png",
  //   pagesInfoArr: [
  //     {
  //       title: "Realtime Focus Sessions",
  //       description:
  //         "Built real-time focus sessions using sockets to help people stay accountable and productive.",
  //       imgArr: ["/logo.png"],
  //     },
  //   ],
  //   descriptionDetails: {
  //     paragraphs: [
  //       "TheSuperFocus is a productivity web app inspired by the Pomodoro technique, built to help users stay focused and complete deep-work sessions.",
  //       "It includes real-time session support and a paid tier with recurring billing.",
  //     ],
  //     bullets: [
  //       "Built a Pomodoro-inspired productivity web app using real-time sockets.",
  //       "Integrated Razorpay for recurring payments, securing 10+ premium users.",
  //     ],
  //   },
  // },
  {
    id: "built-design",
    companyName: "Builtdesign",
    type: "Professional",
    category: ["Web Dev", "Full Stack", "UI/UX"],
    shortDescription:
      "Developed and optimized a high-performing website catering to over 4000 users, emphasizing efficiency and maintainability.",
    // websiteLink: "https://builtdesign.in",
    techStack: [
      "Next.js",
      "React",
      "Node.js",
      "MongoDB",
      "GraphQL",
      "Nest.js",
      "Typescript",
    ],
    startDate: new Date("2021-07-01"),
    endDate: new Date("2022-07-01"),
    companyLogoImg: "/projects/builtdesign/logo.png",
    pagesInfoArr: [
      {
        title: "Landing Page",
        description:
          "Modern and responsive landing page showcasing company services and portfolio",
        imgArr: [
          "/projects/builtdesign/landing_1.webp",
          "/projects/builtdesign/landing_3.webp",
          "/projects/builtdesign/landing_5.webp",
          "/projects/builtdesign/landing_6.webp",
          "/projects/builtdesign/landing_2.webp",
          "/projects/builtdesign/landing_4.webp",
        ],
      },
      {
        title: "Custom PDF Reader and optimizer",
        description:
          "Specialized PDF viewer with optimization features for improved performance and user experience",
        imgArr: ["/projects/builtdesign/pdf_opt.webp"],
      },
      {
        title: "Clients Dashboard",
        description:
          "Comprehensive client portal with project tracking, document management, and communication tools",
        imgArr: [
          "/projects/builtdesign/cli_dashboard_1.webp",
          "/projects/builtdesign/cli_dashboard_2.webp",
          "/projects/builtdesign/cli_dashboard_3.webp",
        ],
      },
      {
        title: "Admin Dashboard",
        description:
          "Powerful administrative interface for managing users, projects, and system settings",
        imgArr: ["/projects/builtdesign/logo.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "During my time at Builtdesign, I had the opportunity to work on a dynamic and user-focused project that involved designing and optimizing a website catering to a user base of over 4000 individuals. My role as a full-stack web developer was to ensure a seamless experience for users by creating an efficient and maintainable platform.",
        "I collaborated closely with the product team to integrate cutting-edge features, employing technologies like Next.js and React with TypeScript for captivating front-end experiences. Additionally, I contributed significantly to the backend by utilizing Node.js, MongoDB, and GraphQL to design robust APIs and ensure smooth system functionality.",
        "This experience allowed me to enhance my skills in various areas of web development and deliver a high-quality product. I gained proficiency in front-end technologies such as Material UI and Tailwind CSS, as well as backend technologies including Nest.js and MySQL. The project's success in catering to a large user base and providing an intuitive user interface has further motivated me to pursue excellence in web development.",
      ],
      bullets: [
        "Developed and optimized a high-performing website catering to over 4000 users.",
        "Collaborated closely with the product team to implement cutting-edge features.",
        "Created an intuitive admin dashboard to efficiently manage and announce contest winners.",
        "Leveraged Next.js, React with TypeScript for captivating front-end experiences.",
        "Utilized Node.js, MongoDB, and GraphQL to design and manage databases.",
      ],
    },
  },
  {
    id: "the-super-quotes",
    companyName: "The Super Quotes",
    type: "Professional",
    category: ["Mobile Dev", "Full Stack", "UI/UX"],
    shortDescription:
      "Elevated The Super Quotes app with JavaScript, React Native, APIs, Redux magic, and Google Play Store debut.",
    // websiteLink:
    // "https://play.google.com/store/apps/details?id=com.thesuperlife",
    techStack: ["React Native", "Node.js", "MongoDB", "Javascript"],
    startDate: new Date("2021-07-01"),
    endDate: new Date("2022-07-01"),
    companyLogoImg: "/projects/superquotes/logo.png",
    pagesInfoArr: [
      {
        title: "Quotes View Page",
        description:
          "Elegantly designed quotes display with customizable themes and sharing options",
        imgArr: ["/projects/superquotes/app_2.webp"],
      },
      {
        title: "Quotes Download Component",
        description:
          "Feature allowing users to download quotes as beautiful images for social media sharing",
        imgArr: [
          "/projects/superquotes/app_4.webp",
          "/projects/superquotes/app_7.webp",
        ],
      },
      {
        title: "Account Management",
        description:
          "User profile management with favorites, history, and personalization settings",
        imgArr: ["/projects/superquotes/app_6.webp"],
      },
      {
        title: "Interest Selection and Update Page",
        description:
          "Interactive interface for users to select and update their quote preferences and interests",
        imgArr: [
          "/projects/superquotes/app_1.webp",
          "/projects/superquotes/app_3.webp",
        ],
      },
      {
        title: "Responsiveness",
        description:
          "Adaptive design ensuring optimal user experience across various device sizes and orientations",
        imgArr: ["/projects/superquotes/app_5.webp"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        `Venturing into the world of creativity at The Super Quotes was an exhilarating journey. As a passionate developer, I led the charge in crafting a compelling application from inception to completion, using the dynamic duo of JavaScript and React Native.`,
        `The heart of my achievement lay in the seamless integration of APIs, threading a tapestry of data flow that propelled the application's functionality to new heights.`,
        `With the wizardry of Redux, I choreographed a symphony of state management and performance optimization, orchestrating a ballet of responsiveness that wowed users with every interaction.`,
        `A crescendo awaited as I unveiled the culmination of my work on the grand stage of the Google Play Store. The app's debut marked an epoch, opening doors to an expansive audience eager to embrace the charm of The Super Quotes.`,
      ],
      bullets: [
        "Led the end-to-end development of a captivating application using JavaScript and React Native.",
        "Championed the integration of APIs, harmonizing data flow and enhancing application functionality.",
        "Conducted Redux magic to ensure state management and optimize performance, delivering a mesmerizing user experience.",
        "Premiered the application on the Google Play Store, capturing hearts and expanding its user base.",
      ],
    },
  },
  {
    id: "apex-shopping",
    companyName: "Apex Shopping App",
    type: "Personal",
    category: ["Mobile Dev", "Full Stack", "UI/UX"],
    shortDescription:
      "Developed a feature-rich mobile shopping application with admin panel, user authentication, and seamless product management using React Native and Firebase.",
    // githubLink: "https://github.com/nestorraul631/apex-shopping-app",
    techStack: ["React Native", "Javascript", "Redux", "Node.js", "express.js"],
    startDate: new Date("2021-07-14"),
    endDate: new Date("2022-07-01"),
    companyLogoImg: "/projects/apex/logo.png",
    pagesInfoArr: [
      {
        title: "Splash Screen",
        description: "Custom animated splash screen with app branding",
        imgArr: ["/projects/apex/app_7.webp"],
      },
      {
        title: "Login/Signup Authentication",
        description: "Secure user authentication system with Firebase",
        imgArr: ["/projects/apex/app_1.webp"],
      },
      {
        title: "All Products Explore Screen",
        description: "Interactive product browsing with categories and filters",
        imgArr: ["/projects/apex/app_3.webp"],
      },
      {
        title: "Admin Panel",
        description:
          "Comprehensive admin dashboard for product and order management",
        imgArr: ["/projects/apex/app_4.webp", "/projects/apex/app_6.webp"],
      },
      {
        title: "Sidenav Navigation",
        description: "Intuitive side navigation for easy app navigation",
        imgArr: ["/projects/apex/app_5.webp"],
      },
      {
        title: "Firebase Database",
        description:
          "Real-time database structure for efficient data management",
        imgArr: ["/projects/apex/db.webp"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "The Apex Shopping App represents a comprehensive mobile e-commerce solution that I developed from the ground up using React Native and Firebase. This project showcases my ability to create a full-featured shopping application with both user and admin functionalities.",
        "The application features a robust authentication system, allowing users to securely sign up and log in. The product exploration interface is designed with user experience in mind, incorporating smooth navigation and intuitive filtering options.",
        "One of the key highlights is the admin panel, which provides complete control over product management, order processing, and inventory tracking. The integration with Firebase ensures real-time data synchronization and reliable data persistence.",
        "The app's architecture emphasizes scalability and performance, utilizing Redux for state management and following best practices for mobile app development. The UI/UX design focuses on providing a seamless shopping experience across different device sizes.",
      ],
      bullets: [
        "Implemented secure user authentication and authorization using Firebase",
        "Designed and developed an intuitive product browsing and shopping cart system",
        "Created a comprehensive admin panel for product and order management",
        "Integrated real-time data synchronization using Firebase Database",
        "Implemented state management using Redux for optimal performance",
        "Designed responsive UI components following mobile-first principles",
        "Incorporated smooth animations and transitions for enhanced user experience",
      ],
    },
  },
  {
    id: "builtdesign-blogs",
    companyName: "Builtdesign Blogs",
    type: "Professional",
    category: ["Web Dev", "Full Stack", "UI/UX"],
    shortDescription:
      "Crafted Builtdesign's vibrant Blogs Website using Netlify CMS and React for engaging content experiences.",
    // websiteLink: "https://blog.builtdesign.in",
    techStack: ["Next.js", "React", "Node.js", "MongoDB", "Typescript"],
    startDate: new Date("2022-03-01"),
    endDate: new Date("2022-07-01"),
    companyLogoImg: "/projects/builtdesign-blogs/logo.png",
    pagesInfoArr: [
      {
        title: "Blog Landing Page",
        description:
          "Modern and responsive landing page showcasing featured articles",
        imgArr: ["/projects/builtdesign-blogs/blog_2.webp"],
      },
      {
        title: "Blog Listing",
        description:
          "Organized display of all blog posts with search and filtering",
        imgArr: ["/projects/builtdesign-blogs/blog_3.webp"],
      },
      {
        title: "Category Navigation",
        description: "Intuitive category-based navigation system",
        imgArr: ["/projects/builtdesign-blogs/blog_1.webp"],
      },
      {
        title: "Article View",
        description:
          "Clean and readable article layout with rich media support",
        imgArr: [
          "/projects/builtdesign-blogs/blog_4.webp",
          "/projects/builtdesign-blogs/blog_5.webp",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "As part of the Builtdesign platform, I developed a sophisticated blog website that serves as a content hub for the company's thought leadership and industry insights. The project leveraged Next.js and React to create a fast, SEO-friendly platform.",
        "The blog platform features a modern, responsive design that prioritizes readability and user engagement. I implemented a robust content management system using Netlify CMS, enabling the content team to easily publish and manage blog posts.",
        "The architecture includes server-side rendering for optimal performance and SEO, while MongoDB provides flexible content storage. TypeScript ensures code reliability and maintainability throughout the application.",
        "Key features include category-based navigation, search functionality, and a rich text editor for content creation. The platform supports various content types including images, code snippets, and embedded media.",
      ],
      bullets: [
        "Developed a modern blog platform using Next.js and React with TypeScript",
        "Implemented Netlify CMS for efficient content management",
        "Created a responsive design that prioritizes readability and user engagement",
        "Built server-side rendering for optimal performance and SEO",
        "Integrated MongoDB for flexible content storage and management",
        "Developed category-based navigation and search functionality",
        "Implemented rich text editing capabilities for content creation",
      ],
    },
  },

  {
    id: "cirql-dashboard",
    companyName: "Cirql Dashboard",
    type: "Personal",
    category: ["Web Dev", "Frontend", "UI/UX"],
    shortDescription:
      "Created a dashboard project using React and Tailwind CSS, focusing on UI design and routing implementation.",
    // websiteLink: "https://cirql-ui.nestorfanelli.xyz/",
    techStack: ["React", "Tailwind CSS", "Google Auth"],
    startDate: new Date("2023-01-01"),
    endDate: new Date("2023-02-15"),
    companyLogoImg: "/projects/cirql/logo.png",
    pagesInfoArr: [
      {
        title: "Dashboard Home",
        description:
          "Main dashboard view with analytics widgets and data visualization",
        imgArr: ["/projects/cirql/web_1.png", "/projects/cirql/web_2.png"],
      },
      {
        title: "Profile Page",
        description:
          "User profile management interface with customization options",
        imgArr: ["/projects/cirql/web_3.png", "/projects/cirql/web_4.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "For the 'Cirql Dashboard' personal, I aimed to enhance my UI design skills and deepen my understanding of routing within a React application.",
        "I utilized React and Tailwind CSS to craft an intuitive dashboard interface that provides users with an organized overview of data and functionalities. The UI components were thoughtfully designed to ensure a seamless user experience.",
        "Incorporating Google Sign-In Authentication further fortified the project by adding a layer of security and convenience. Users are required to authenticate before accessing certain routes, ensuring the safety of sensitive information.",
        "The routing system was meticulously implemented to enable smooth navigation between different sections of the dashboard, simulating real-world use cases.",
        "Through this project, I've gained valuable insights into UI/UX design principles and the implementation of secure and efficient routing in React applications.",
      ],
      bullets: [
        "Created a user-friendly dashboard project using React and Tailwind CSS.",
        "Implemented Google Sign-In Authentication to ensure secure access to sensitive routes.",
        "Designed UI components to provide an intuitive and visually pleasing experience.",
        "Focused on implementing a smooth routing system to simulate real-world use cases.",
        "Enhanced my skills in UI design, routing, and component architecture.",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);
