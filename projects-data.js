// projects-data.js - Project showcase data for Jatin's Portfolio
window.PORTFOLIO_PROJECTS = [
  {
    id: "medilab-healthcare",
    title: "MediLab — Full Stack Clinical & Hospital Management Portal",
    category: "web",
    badge: "IITianCraft Internship Project",
    icon: "activity",
    shortDesc: "End-to-end healthcare platform built with React 19, Node.js/Express, MongoDB, and Tailwind CSS during the IITianCraft internship.",
    longDesc: "MediLab is a full-stack clinical management solution developed during my internship at IITianCraft. It enables patients to explore specialist medical departments, review doctor profiles, book real-time appointments, and visualize clinic operations using Recharts interactive dashboards.",
    techStack: ["React 19", "Node.js", "Express.js", "MongoDB", "Mongoose", "Tailwind CSS", "Recharts", "Lucide React"],
    keyFeatures: [
      "Dynamic Doctor Directory with medical specialty filtering and availability badges",
      "Interactive Appointment Booking system with backend MongoDB storage and validation",
      "Express REST API (`server.js`) handling appointment scheduling, service directories, and inquiries",
      "Responsive analytics dashboard featuring interactive health and clinic charts with Recharts",
      "Modern UI built with React 19, Lucide React icons, and mobile-first Tailwind design"
    ],
    architecture: "Full-stack MERN architecture featuring React 19 Single Page Application connected to an Express.js REST API with Mongoose ODM schemas for doctors, patients, and appointment records.",
    liveUrl: "#",
    githubUrl: "https://github.com/jatinyadav13/medilab-healthcare-system",
    status: "Featured Project",
    sourceLocation: "E:\\iitin craft\\medilab-react",
    stats: {
      framework: "React 19 + Express",
      database: "MongoDB / Mongoose",
      features: "Appointment Engine + Live Charts"
    }
  },
  {
    id: "dandiya-app",
    title: "Regional College Dandiya Night — Event Ticketing & Pass Portal",
    category: "web",
    badge: "Live College Production",
    icon: "ticket",
    shortDesc: "Production event management and digital pass system built with Node.js, Express, and PostgreSQL for Regional College fests.",
    longDesc: "Engineered specifically for Regional College for Education, Research & Technology cultural celebrations. This full-stack web application streamlines student ticket bookings, validates digital entry passes, and provides organizers with real-time attendance reporting powered by a robust PostgreSQL relational database.",
    techStack: ["Node.js", "Express.js", "PostgreSQL (pg)", "HTML5", "Modern CSS", "JavaScript"],
    keyFeatures: [
      "Automated digital pass generation with unique verification identifiers",
      "Real-time PostgreSQL database integration handling concurrent student registrations",
      "Administrative check-in portal for fast pass scanning and entry validation",
      "Optimized query pipeline ensuring zero registration bottlenecks during peak traffic",
      "Secure server-side validation and responsive mobile ticket display"
    ],
    architecture: "Server-side Express.js architecture with PostgreSQL relational tables storing attendees, passes, and security access logs.",
    liveUrl: "#",
    githubUrl: "https://github.com/jatinyadav13/Dandiya_Application",
    status: "Production College App",
    stats: {
      engine: "Node.js + PostgreSQL",
      traffic: "Campus-Wide Rollout",
      repo: "github.com/jatinyadav13/Dandiya_Application"
    }
  },
  {
    id: "smartcrm-platform",
    title: "SmartCRM — Lead Pipeline & Agile Team Coordinator",
    category: "web",
    badge: "IITianCraft Workflow Project",
    icon: "kanban",
    shortDesc: "Comprehensive CRM and sprint coordination dashboard featuring visual sales funnels, lead cards, and meeting calendar views.",
    longDesc: "Born out of the need for structured team task delegation and client tracking at IITianCraft, SmartCRM provides an intuitive interface for managing client stages, tracking team blockers, analyzing conversion metrics, and scheduling sprint reviews.",
    techStack: ["React", "JavaScript ES6+", "Tailwind CSS", "Lucide React", "Context API", "Vite"],
    keyFeatures: [
      "Interactive Sales & Lead Kanban Funnel with draggable status stages",
      "Integrated Calendar View for coordinating sprint milestones and client demos",
      "Live Dashboard KPI cards tracking lead conversion rates and team deliverables",
      "Full contact directory with instant search debouncing and tag filtering",
      "Modern Glassmorphism interface with dark mode optimizations"
    ],
    architecture: "Modular React component hierarchy utilizing centralized Context stores and persistent local cache for instant UI rendering.",
    liveUrl: "#",
    githubUrl: "https://github.com/jatinyadav13/smartcrm-pipeline",
    status: "Completed",
    sourceLocation: "E:\\iitin craft\\smartcrm",
    stats: {
      ui: "Tailwind + Lucide React",
      modules: "Funnel, Calendar, Contacts, Analytics",
      speed: "Vite Powered"
    }
  },
  {
    id: "projecttea-store",
    title: "ProjectTea 2.0 — Python/Flask Microservices & E-Commerce Store",
    category: "python",
    badge: "Python Internship Project",
    icon: "shopping-bag",
    shortDesc: "Scalable Python Flask e-commerce system with SQLAlchemy ORM, Alembic schema migrations, and role-based user/admin routes.",
    longDesc: "Developed during my Python programming immersion, ProjectTea 2.0 demonstrates robust backend software engineering in Python. It includes automated database versioning with Alembic, structured service layers, dynamic product querying, and separate administrative routes for store inventory control.",
    techStack: ["Python", "Flask", "SQLAlchemy", "Alembic Migrations", "REST APIs", "Jinja2 / HTML5"],
    keyFeatures: [
      "Decoupled routing architecture with `admin_route.py` and `user_route.py` controllers",
      "Database schema version control and migrations automated via Alembic",
      "Service layer pattern (`product_service.py`) for clean separation of concerns",
      "Dynamic catalog search, category filtering, and inventory tracking",
      "REST endpoints providing structured JSON payloads for frontend consumption"
    ],
    architecture: "Python Flask MVC application with SQLAlchemy ORM abstraction layer, Alembic database migration tracking, and modular blueprint architecture.",
    liveUrl: "#",
    githubUrl: "https://github.com/jatinyadav13/ProjectTea-Flask-Store",
    status: "Completed",
    sourceLocation: "E:\\ProjectTea2.0",
    stats: {
      backend: "Python 3 + Flask",
      orm: "SQLAlchemy + Alembic",
      endpoints: "Admin & User API Routes"
    }
  },
  {
    id: "wearmint-store",
    title: "Wear-Mint — Next-Gen Smart Wearables Storefront",
    category: "web",
    badge: "IITianCraft Task 2 Project",
    icon: "watch",
    shortDesc: "Modern, high-conversion product landing platform for smart wearables featuring interactive spec breakdowns and review sliders.",
    longDesc: "Crafted during IITianCraft internship Task 2, Wear-Mint showcases high-converting product UI design. Features dynamic battery and health-tracking showcases, interactive customer review carousels, responsive specification tables, and clean semantic code.",
    techStack: ["HTML5 Semantic", "Modern CSS3", "JavaScript ES6+", "Responsive Web Design"],
    keyFeatures: [
      "Interactive 3D-styled hero product showcase with floating feature callouts",
      "Hardware spec spotlights (Heart Rate Sensor, IP68 Water Resistance, Extended Battery)",
      "Dynamic client testimonial slider with dot navigation",
      "Fluid responsive layout tested across mobile, tablet, and desktop viewports"
    ],
    architecture: "Lightweight, performant frontend architecture focused on ultra-fast sub-second load times and 100 Google Lighthouse scores.",
    liveUrl: "#",
    githubUrl: "https://github.com/jatinyadav13/Wear-Mint",
    status: "Live on GitHub",
    stats: {
      lighthouse: "100 Performance Score",
      repo: "github.com/jatinyadav13/Wear-Mint",
      assets: "Custom Smartwatch UI"
    }
  },
  {
    id: "javacare-spring",
    title: "JavaCare — Enterprise Java & Spring Boot API Architecture",
    category: "java",
    badge: "Core Java & Spring Boot",
    icon: "coffee",
    shortDesc: "Multi-tier enterprise RESTful service architecture built with Spring Boot, Spring Security JWT, and MySQL database fundamentals.",
    longDesc: "Architected as the capstone for my full stack Java specialization. Demonstrates robust Object-Oriented Programming (OOP), Spring Boot micro-services, Spring Data JPA repositories, and MySQL relational queries for enterprise workloads.",
    techStack: ["Java 17", "Spring Boot", "Spring Security", "MySQL", "Hibernate JPA", "REST API"],
    keyFeatures: [
      "Role-Based Access Control (Admin, Staff, Client) with secure JWT authentication",
      "Spring Data JPA repository patterns with transactional database guarantees",
      "Sub-100ms response time RESTful API endpoints following MVC architecture",
      "MySQL schema normalization, indexing, and query optimization"
    ],
    architecture: "Three-tier enterprise architecture: Controller layer REST endpoints -> Service layer business logic -> Spring Data JPA repository layer -> MySQL database.",
    liveUrl: "#",
    githubUrl: "https://github.com/jatinyadav13/javacare-spring-boot",
    status: "Core Focus",
    stats: {
      stack: "Java 17 + Spring Boot 3",
      security: "JWT + Spring Security",
      db: "MySQL + JPA Hibernate"
    }
  }
];
