// src/data/portfolio.ts - Complete Portfolio Data
export const personalData = {
  name: "Najim Tamboli",
  role: "Java Developer & Backend Engineer",
  tagline: "Building robust backend solutions with Java, Spring Boot, and modern technologies",
  bio: "Passionate MCA student with expertise in Java, Spring Boot, and full-stack development. I specialize in building scalable backend systems and have hands-on experience with real-world projects including Face Recognition Systems, Job Portals, and Auction Platforms.",
  email: "najimtamboli671@gmail.com",
  phone: "+91 9503741273",
  location: "Pune, Maharashtra, India",
  avatar: "/images/najim-avatar.jpg", // Add your photo here
  resume: "/Najim_Tamboli.pdf",
  yearsExperience: 2,
  projectsCompleted: 3,
  clientsWorked: 5,
  social: {
    github: "https://github.com/Najim4633",
    linkedin: "https://linkedin.com/in/najim-tamboli",
    twitter: "https://twitter.com/najim_tamboli",
    email: "najimtamboli671@gmail.com"
  }
}

export const skillsData = {
  languages: [
    { name: "Java", level: 90, icon: "/icons/java.svg" },
    { name: "Python", level: 85, icon: "/icons/python.svg" },
    { name: "JavaScript", level: 80, icon: "/icons/javascript.svg" },
    { name: "TypeScript", level: 75, icon: "/icons/typescript.svg" },
    { name: "C++", level: 70, icon: "/icons/cpp.svg" }
  ],
  frameworks: [
    { name: "Spring Boot", level: 85, icon: "/icons/spring.svg" },
    { name: "Django", level: 80, icon: "/icons/django.svg" },
    { name: "React", level: 75, icon: "/icons/react.svg" },
    { name: "Next.js", level: 70, icon: "/icons/nextjs.svg" },
    { name: "Flask", level: 70, icon: "/icons/flask.svg" }
  ],
  databases: [
    { name: "MySQL", level: 85, icon: "/icons/mysql.svg" },
    { name: "PostgreSQL", level: 75, icon: "/icons/postgresql.svg" },
    { name: "MongoDB", level: 70, icon: "/icons/mongodb.svg" },
    { name: "SQLite", level: 80, icon: "/icons/sqlite.svg" }
  ],
  tools: [
    { name: "Git", level: 85, icon: "/icons/git.svg" },
    { name: "Docker", level: 70, icon: "/icons/docker.svg" },
    { name: "VS Code", level: 90, icon: "/icons/vscode.svg" },
    { name: "IntelliJ IDEA", level: 85, icon: "/icons/intellij.svg" },
    { name: "Postman", level: 80, icon: "/icons/postman.svg" }
  ]
}

export const projectsData = [
  {
    id: 1,
    title: "Face Recognition Attendance System",
    description: "Real-time attendance system with 95% accuracy using Python, OpenCV, and machine learning algorithms.",
    longDescription: "Built a comprehensive attendance management system that uses facial recognition to automatically track employee/student attendance. Features real-time face detection, automatic timestamp logging, and a responsive web interface.",
    image: "/projects/face-recognition-thumb.jpg",
    images: [
      "/projects/face-recognition-1.jpg",
      "/projects/face-recognition-2.jpg",
      "/projects/face-recognition-3.jpg"
    ],
    technologies: ["Python", "OpenCV", "dlib", "SQLite", "JavaScript", "HTML5", "CSS3"],
    category: "AI/ML",
    featured: true,
    github: "https://github.com/Najim4633/face-recognition-attendance",
    live: "#",
    date: "April 2025",
    status: "Completed"
  },
  {
    id: 2,
    title: "eAuction Platform",
    description: "Full-featured web-based auction system with real-time bidding, user authentication, and automated timers.",
    longDescription: "Comprehensive auction platform built with Django featuring real-time bidding logic, user management, listing controls, and complete auction lifecycle management with clean, responsive UI.",
    image: "/projects/eauction-thumb.jpg",
    images: [
      "/projects/eauction-1.jpg",
      "/projects/eauction-2.jpg"
    ],
    technologies: ["Django", "Python", "SQLite", "Bootstrap", "JavaScript", "HTML5"],
    category: "Web Development",
    featured: true,
    github: "https://github.com/Najim4633/eauction-platform",
    live: "#",
    date: "September 2024",
    status: "Completed"
  },
  {
    id: 3,
    title: "Online Job Portal",
    description: "Complete job portal solution with role-based access, secure authentication, and job application management.",
    longDescription: "Full-stack job portal built with Java Spring Boot featuring secure user authentication, role-based access control, job posting/tracking, and comprehensive application management workflows.",
    image: "/projects/job-portal-thumb.jpg",
    images: [
      "/projects/job-portal-1.jpg",
      "/projects/job-portal-2.jpg"
    ],
    technologies: ["Java", "Spring Boot", "MySQL", "REST APIs", "HTML5", "CSS3"],
    category: "Backend Development",
    featured: false,
    github: "https://github.com/Najim4633/job-portal",
    live: "#",
    date: "February 2024",
    status: "Completed"
  }
]

export const experienceData = [
  {
    id: 1,
    role: "Java Full Stack Developer",
    company: "QSpiders Training Institute",
    duration: "2024 - 2024",
    type: "Training Program",
    description: "Comprehensive training program covering Java Full Stack development including Spring Boot, REST APIs, database integration, and front-end technologies.",
    responsibilities: [
      "Learned advanced Java concepts and Spring Boot framework",
      "Built REST APIs and integrated with databases",
      "Developed full-stack web applications",
      "Practiced test-driven development and code optimization"
    ],
    technologies: ["Java", "Spring Boot", "MySQL", "HTML5", "CSS3", "JavaScript"],
    logo: "/companies/qspiders.svg"
  },
  {
    id: 2,
    role: "Backend Developer Intern",
    company: "Tech Solutions Pvt Ltd",
    duration: "2023 - 2024",
    type: "Internship",
    description: "Worked on backend development projects and contributed to building scalable web applications.",
    responsibilities: [
      "Developed REST APIs using Spring Boot",
      "Optimized database queries and improved performance",
      "Collaborated with front-end team for API integration",
      "Participated in code reviews and agile development"
    ],
    technologies: ["Java", "Spring Boot", "PostgreSQL", "Git"],
    logo: "/companies/tech-solutions.svg"
  }
]

export const educationData = [
  {
    id: 1,
    degree: "Master of Computer Application",
    school: "MES's Institute Of Management And Career Courses, Pune",
    duration: "2023 - 2025",
    cgpa: "7.88/10",
    description: "Specialized in advanced software development, system design, and modern programming methodologies.",
    subjects: ["Advanced Java", "Spring Boot", "System Design", "Database Management", "Software Engineering"]
  },
  {
    id: 2,
    degree: "Bachelor of Computer Application",
    school: "K. J. Somaiya College of Science, Kopargaon",
    duration: "2020 - 2023",
    cgpa: "8.65/10",
    description: "Foundation in computer science fundamentals, programming languages, and software development.",
    subjects: ["Programming Fundamentals", "Data Structures", "Web Development", "Database Systems", "Software Testing"]
  }
]

export const certificationsData = [
  {
    id: 1,
    name: "Java Full Stack Development",
    issuer: "QSpiders",
    date: "2024",
    credentialId: "QS-JAVA-2024-001",
    image: "/certificates/qspiders-java.jpg"
  },
  {
    id: 2,
    name: "Web Development",
    issuer: "IBM",
    date: "2024",
    credentialId: "IBM-WD-2024-001",
    image: "/certificates/ibm-web.jpg"
  },
  {
    id: 3,
    name: "Python Programming",
    issuer: "Let's Upgrade",
    date: "2023",
    credentialId: "LU-PY-2023-001",
    image: "/certificates/letsupgrade-python.jpg"
  },
  {
    id: 4,
    name: "Database Management Systems",
    issuer: "Infosys Springboard",
    date: "2023",
    credentialId: "IS-DBMS-2023-001",
    image: "/certificates/infosys-dbms.jpg"
  }
]
