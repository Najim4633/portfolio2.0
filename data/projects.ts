// src/data/projects.ts - Portfolio Projects
export const projectsData = [
  {
    id: 1,
    title: "Face Recognition Attendance System",
    description: "Real-time attendance system with 95% accuracy using Python, OpenCV, and machine learning algorithms.",
    longDescription: "Built a comprehensive attendance management system that uses facial recognition to automatically track employee/student attendance. Features real-time face detection, automatic timestamp logging, and a responsive web interface.",
    technologies: ["Python", "OpenCV", "dlib", "SQLite", "JavaScript", "HTML5", "CSS3"],
    features: [
      "95% face recognition accuracy",
      "Real-time detection and logging",
      "Responsive web interface",
      "Automatic timestamp management",
      "SQLite database integration"
    ],
    github: "https://github.com/Najim4633/face-recognition-attendance",
    live: "#", // Add if deployed
    image: "/projects/face-recognition.jpg",
    category: "AI/ML",
    status: "Completed",
    date: "April 2025"
  },
  
  {
    id: 2,
    title: "eAuction Platform",
    description: "Full-featured web-based auction system with real-time bidding, user authentication, and automated timers.",
    longDescription: "Comprehensive auction platform built with Django featuring real-time bidding logic, user management, listing controls, and complete auction lifecycle management with clean, responsive UI.",
    technologies: ["Django", "Python", "SQLite", "Bootstrap", "JavaScript", "HTML5"],
    features: [
      "Real-time bidding system",
      "User authentication & authorization", 
      "Auction lifecycle management",
      "Responsive Bootstrap UI",
      "Automated bidding timers"
    ],
    github: "https://github.com/Najim4633/eauction-platform",
    live: "#",
    image: "/projects/eauction.jpg", 
    category: "Web Development",
    status: "Completed",
    date: "September 2024"
  },
  
  {
    id: 3,
    title: "Online Job Portal",
    description: "Complete job portal solution with role-based access, secure authentication, and job application management.",
    longDescription: "Full-stack job portal built with Java Spring Boot featuring secure user authentication, role-based access control, job posting/tracking, and comprehensive application management workflows.",
    technologies: ["Java", "Spring Boot", "MySQL", "REST APIs", "HTML5", "CSS3"],
    features: [
      "Secure user authentication",
      "Role-based access control",
      "Job posting & tracking system",
      "Application management",
      "RESTful API architecture"
    ],
    github: "https://github.com/Najim4633/job-portal",
    live: "#",
    image: "/projects/job-portal.jpg",
    category: "Backend Development", 
    status: "Completed",
    date: "February 2024"
  }
]

export const projectCategories = [
  "All", "Backend Development", "Web Development", "AI/ML"
]
