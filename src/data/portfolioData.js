

export const personalInfo = {
  name: "Ayansh Yadav",
  title: "Software Developer",
  role: "B.Tech Computer Science Engineering Student",
  location: "Kanpur, Uttar Pradesh, India",

  tagline: "Java • DSA • Backend • Web Development",

  headline: "Building practical software while learning how systems work.",

  summary:
    "B.Tech Computer Science student focused on Java, Data Structures & Algorithms, Spring Boot, backend development, and web development. Currently preparing for software engineering placements while building practical projects and exploring system design and Forward Deployed Engineering.",

  status: "Preparing for Software Engineering Placements",

  statusSubtext:
    "Building projects and strengthening DSA and backend development",

  email: "hsayanshy252@gmail.com",

  github: "https://github.com/Ayansh252yadav",

  linkedin: "https://www.linkedin.com/in/ayansh-yadav/",

  leetcode: "https://leetcode.com/u/Ayansh252yadav/",

  resumePath: "https://drive.google.com/file/d/1l4PXOM5AAtjK5_c2_mjygDIWH5mncICk/view?usp=drive_link",
};


// ============================================================
// NAVIGATION
// ============================================================

export const navigationLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Journey", href: "#journey" },
  { name: "Education", href: "#education" },
  { name: "Activity", href: "#activity" },
  { name: "Contact", href: "#contact" },
];


// ============================================================
// SKILLS
// ============================================================

export const skillCategories = [
  {
    title: "Programming",
    description:
      "Languages I use for development and problem solving.",

    skills: [
      {
        name: "Java",
        note: "Primary language for DSA and backend development",
      },
      {
        name: "JavaScript",
        note: "Used for React and web development",
      },
      {
        name: "SQL",
        note: "Queries, joins, and relational databases",
      },
    ],
  },

  {
    title: "Backend",
    description:
      "Technologies I use to build backend applications.",

    skills: [
      {
        name: "Spring Boot",
        note: "Building REST APIs and backend applications",
      },
      {
        name: "Spring Security",
        note: "Authentication and authorization",
      },
      {
        name: "REST APIs",
        note: "API development and integration",
      },
      {
        name: "WebSocket",
        note: "Real-time communication",
      },
      {
        name: "WebRTC",
        note: "Exploring real-time peer-to-peer communication",
      },
      {
        name: "Hibernate / JPA",
        note: "ORM and database interaction",
      },
    ],
  },

  {
    title: "Frontend",
    description:
      "Tools I use for building web interfaces.",

    skills: [
      {
        name: "React",
        note: "Component-based web development",
      },
      {
        name: "Tailwind CSS",
        note: "Responsive UI development",
      },
      {
        name: "HTML & CSS",
        note: "Web structure and styling",
      },
    ],
  },

  {
    title: "Databases",
    description:
      "Databases and persistence technologies I work with.",

    skills: [
      {
        name: "MySQL",
        note: "Relational database and SQL",
      },
      {
        name: "MongoDB",
        note: "Document-based database",
      },
      {
        name: "JPA / Hibernate",
        note: "Database persistence in Java applications",
      },
    ],
  },

  {
    title: "Tools",
    description:
      "Tools I use during development.",

    skills: [
      {
        name: "Git & GitHub",
        note: "Version control and source code management",
      },
      {
        name: "IntelliJ IDEA",
        note: "Primary IDE for Java development",
      },
      {
        name: "Postman",
        note: "Testing REST APIs",
      },
      {
        name: "Vite",
        note: "Frontend development and build tooling",
      },
    ],
  },

  {
    title: "Core CS",
    description:
      "Computer science concepts I am currently learning and practicing.",

    skills: [
      {
        name: "Data Structures & Algorithms",
        note:
          "Arrays, Strings, Trees, Graphs, DP, Heaps, and problem solving",
      },
      {
        name: "Object-Oriented Programming",
        note:
          "Classes, inheritance, polymorphism, abstraction, and encapsulation",
      },
      {
        name: "DBMS",
        note:
          "SQL, normalization, relationships, and transactions",
      },
      {
        name: "System Design — Beginner",
        note:
          "Currently learning scalability, caching, APIs, and basic system architecture",
      },
    ],
  },

  {
    title: "AI / GenAI — Exploring",
    description:
      "Technologies I am currently exploring.",

    skills: [
      {
        name: "Spring AI",
        note:
          "Exploring AI integration with Spring Boot",
      },
      {
        name: "RAG",
        note:
          "Learning retrieval-augmented generation concepts",
      },
      {
        name: "Vector Embeddings",
        note:
          "Learning semantic similarity and vector search concepts",
      },
    ],
  },

  {
    title: "Forward Deployed Engineering — Beginner",
    description:
      "An area I am currently exploring.",

    skills: [
      {
        name: "FDE",
        note:
          "Learning how software engineering can be applied to real-world problems",
      },
    ],
  },
];


// ============================================================
// PROJECTS
// ============================================================

export const projects = [
  {
    id: "profilehub",

    title: "ProfileHub",

    featured: true,

    tagline: "Professional Profile-Based Social Platform",

    shortDescription:
      "A full-stack web application where users can create professional profiles, manage their information, create posts, and interact with other users.",

    description:
      "ProfileHub is a full-stack web application built with React and Spring Boot. It allows users to manage profile information such as skills, education, and work experience, while also providing social features such as posts, likes, comments, and following.",

    problemStatement:
      "The project was built to explore how a profile-based social platform can be developed with a separate frontend, backend API, authentication system, relational database, and media handling.",

    architecture:
      "The application uses a React frontend connected to a Spring Boot REST API. MySQL is used for relational data, while media uploads are handled through Cloudinary.",

    techStack: [
      "React",
      "Spring Boot",
      "Spring Security",
      "MySQL",
      "JWT",
      "Google OAuth2",
      "Cloudinary",
      "REST API",
      "Tailwind CSS",
    ],

    features: [
      "User registration and login",
      "Google OAuth2 login",
      "Profile management",
      "Skills, education, and work experience",
      "Profile picture upload",
      "Creating posts",
      "Image and video media uploads",
      "Likes and comments",
      "Following users",
      "User profile pages",
      "Personalized feed",
    ],

    engineeringDecisions: [
      "Separated the React frontend from the Spring Boot backend through REST APIs.",
      "Used MySQL for structured relational data.",
      "Used Cloudinary for media storage instead of storing media files directly in the database.",
      "Used DTOs to transfer data between the backend and frontend.",
    ],

    github:
      "https://github.com/Ayansh252yadav/ProfileHub",

    liveDemo: "https://commitcraft-git-main-stock11.vercel.app/auth",

    metrics: {
      type: "Full Stack Application",
      backend: "Spring Boot / Java",
      frontend: "React / Vite",
      database: "MySQL",
    },
  },

  // ==========================================================
  // COMMITCRAFT HUB
  // ==========================================================

  {
    id: "commitcrafthub",

    title: "CommitCraftHub",

    featured: false,

    tagline: "Backend Application",

    shortDescription:
      "A Spring Boot backend project focused on authentication, REST APIs, database interaction, and user-based access control.",

    description:
      "CommitCraftHub is a backend-focused project built with Spring Boot. The project helped me work with REST APIs, JWT-based authentication, MySQL, JPA/Hibernate, and separation between controller, service, and repository layers.",

    problemStatement:
      "The project was built to practice backend application development, authentication, API design, and relational database interaction using Spring Boot.",

    architecture:
      "The application follows a basic Controller-Service-Repository structure with Spring Boot, Spring Security, JPA/Hibernate, and MySQL.",

    techStack: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "MySQL",
      "JWT",
      "Hibernate / JPA",
      "REST API",
    ],

    features: [
      "User authentication",
      "JWT-based authentication",
      "REST API endpoints",
      "MySQL database integration",
      "JPA/Hibernate persistence",
      "Layered backend structure",
    ],

    engineeringDecisions: [
      "Separated controller, service, and repository responsibilities.",
      "Used DTOs for transferring request and response data.",
      "Used Spring Security for authentication and authorization.",
      "Used MySQL with JPA/Hibernate for persistence.",
    ],

    github:
      "https://github.com/Ayansh252yadav",

    liveDemo: null,

    metrics: {
      type: "Backend Application",
      backend: "Spring Boot / Java",
      database: "MySQL",
      security: "Spring Security / JWT",
    },
  },

  // ==========================================================
  // MEETSPHERE
  // ==========================================================

  {
    id: "meetsphere",

    title: "MeetSphere",

    featured: false,

    tagline: "Real-Time Communication Project",

    shortDescription:
      "A project exploring real-time communication using WebSocket and WebRTC.",

    description:
      "MeetSphere is a project focused on understanding real-time communication on the web. It explores WebSocket for communication between clients and the server and WebRTC concepts for peer-to-peer communication.",

    problemStatement:
      "The project was built to understand how real-time communication works and how WebSocket and WebRTC can be used together in a browser-based application.",

    architecture:
      "The project uses a Spring Boot backend for WebSocket communication and a React-based frontend. WebRTC is used to explore peer-to-peer communication concepts.",

    techStack: [
      "Spring Boot",
      "WebSocket",
      "WebRTC",
      "React",
      "JavaScript",
      "Tailwind CSS",
    ],

    features: [
      "Real-time WebSocket communication",
      "WebRTC exploration",
      "Peer-to-peer communication concepts",
      "Frontend state handling for real-time interactions",
    ],

    engineeringDecisions: [
      "Used WebSocket to explore real-time communication between clients and the backend.",
      "Explored WebRTC for peer-to-peer communication.",
      "Separated frontend interaction logic from backend communication logic.",
    ],

    github:
      "https://github.com/Ayansh252yadav",

    liveDemo: "https://java-meet-sphere.vercel.app/meeting/LKK7W9/live",

    metrics: {
      type: "Real-Time Communication Project",
      backend: "Spring Boot / WebSocket",
      protocol: "WebSocket & WebRTC",
      frontend: "React",
    },
  },
  {
    title: "WatchWise",
    description:
      "A simple movie recommendation engine that uses AI-powered embeddings to recommend movies based on semantic similarity.",
    image: "/projects/watchwise.png",
    technologies: [
      "Java",
      "Spring Boot",
      "Spring AI",
      "Google GenAI",
      "React"
    ],
    github: "https://github.com/Ayansh252yadav/FDE/tree/main/WatchWise",
    live: ""
  },
  {
    title: "Streaming AI",
    description:
      "An AI streaming application built with Spring Boot and Spring AI that streams OpenAI-generated responses to the client in real time.",
    image: "/projects/streaming-ai.png",
    technologies: [
      "Java",
      "Spring Boot",
      "Spring AI",
      "OpenAI",
      "React"
    ],
    github: "https://github.com/Ayansh252yadav/FDE/tree/main/StreamingLec5",
    live: ""
  }
];


// ============================================================
// DEVELOPMENT JOURNEY
// ============================================================

export const journeyMilestones = [
  {
    period: "Present",

    title: "Backend Development & Placement Preparation",

    subtitle:
      "Strengthening DSA and building practical applications",

    description:
      "Currently focusing on Data Structures & Algorithms using Java, backend development with Spring Boot, database concepts, and building practical full-stack applications while preparing for software engineering placements.",

    focusTags: [
      "Java",
      "DSA",
      "Spring Boot",
      "MySQL",
      "React",
    ],
  },

  {
    period: "Recent",

    title: "Full-Stack Application Development",

    subtitle:
      "Building projects with React and Spring Boot",

    description:
      "Worked on projects such as ProfileHub, CommitCraftHub, and MeetSphere to gain practical experience with frontend development, REST APIs, authentication, databases, and real-time communication.",

    focusTags: [
      "ProfileHub",
      "CommitCraftHub",
      "MeetSphere",
      "REST APIs",
      "React",
    ],
  },

  {
    period: "Learning",

    title: "Exploring System Design & FDE",

    subtitle:
      "Beginning to understand larger software systems",

    description:
      "Currently exploring beginner-level system design concepts and Forward Deployed Engineering to understand how software systems can be designed and applied to real-world problems.",

    focusTags: [
      "System Design",
      "FDE",
      "APIs",
      "Scalability",
    ],
  },
];


// ============================================================
// EDUCATION
// ============================================================

export const education = {
  degree: "Bachelor of Technology (B.Tech)",

  field: "Computer Science and Engineering",

  institution: "Kanpur Institute Of Technology",

  location: "Kanpur, Uttar Pradesh, India",

  duration: "2023 — Present",

  summary:
    "Currently pursuing a B.Tech in Computer Science and Engineering while building practical software projects and strengthening programming and software development fundamentals.",

  coursework: [
    "Data Structures & Algorithms",
    "Database Management Systems",
    "Object-Oriented Programming",
    "Software Engineering",
    "Computer Organization & Architecture",
  ],
};


// ============================================================
// DSA ACTIVITY
// ============================================================

export const dsaActivity = {
  title: "Data Structures & Algorithms",

  language: "Java",

  focusDescription:
    "Currently practicing Data Structures & Algorithms in Java as part of my preparation for software engineering placements.",

  topics: [
    {
      name: "Arrays & Strings",
      status: "Practicing",
      note: "Two Pointers, Sliding Window, Prefix Sum",
    },

    {
      name: "Trees",
      status: "Practicing",
      note: "Traversals, Binary Search Trees, Recursion",
    },

    {
      name: "Graphs",
      status: "Practicing",
      note: "BFS, DFS, shortest path concepts",
    },

    {
      name: "Dynamic Programming",
      status: "Learning",
      note: "Memoization, Tabulation, and state transitions",
    },

    {
      name: "Linked Lists",
      status: "Practicing",
      note: "Fast and slow pointers and common operations",
    },

    {
      name: "Stacks & Queues",
      status: "Practicing",
      note: "Basic operations and problem-solving patterns",
    },

    {
      name: "Binary Search",
      status: "Practicing",
      note: "Search space reduction and common patterns",
    },

    {
      name: "Recursion & Backtracking",
      status: "Practicing",
      note: "Recursive problem solving and exploration",
    },
  ],

  leetcodeUrl:
    "https://leetcode.com/u/Ayansh252yadav/",
};