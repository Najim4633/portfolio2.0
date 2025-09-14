"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export function Projects() {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true })

  const projects = [
    {
      title: "Face Recognition System",
      subtitle: "AI/ML • Real-time Processing",
      description: "95% accuracy facial recognition system built with Python, OpenCV, and machine learning algorithms.",
      tech: ["Python", "OpenCV", "SQLite", "JavaScript"]
    },
    {
      title: "eAuction Platform", 
      subtitle: "Web Development • Real-time",
      description: "Full-featured auction system with real-time bidding logic and complete lifecycle management.",
      tech: ["Django", "Python", "Bootstrap", "JavaScript"]
    },
    {
      title: "Online Job Portal",
      subtitle: "Backend Development • Enterprise",
      description: "Complete job portal with role-based access control and comprehensive application workflows.",
      tech: ["Java", "Spring Boot", "MySQL", "REST APIs"]
    }
  ]

  return (
    <section className="py-32 bg-black text-white relative overflow-hidden">
      
      {/* Subtle geometric background */}
      <div className="absolute inset-0">
        <svg className="absolute top-1/4 left-1/4 w-96 h-96 opacity-5" viewBox="0 0 100 100">
          <polygon points="50,5 85,25 85,75 50,95 15,75 15,25" fill="none" stroke="white" strokeWidth="0.5"/>
        </svg>
        <svg className="absolute bottom-1/4 right-1/4 w-64 h-64 opacity-5" viewBox="0 0 100 100">
          <polygon points="50,15 75,35 60,65 40,65 25,35" fill="none" stroke="white" strokeWidth="0.5"/>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-24"
        >
          <h2 className="text-6xl md:text-7xl font-thin tracking-wider text-white mb-8">
            SELECTED WORK
          </h2>
          <div className="h-px w-24 bg-white/30 mx-auto" />
        </motion.div>

        {/* Projects grid */}
        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 1.2, 
                delay: index * 0.3,
                ease: [0.25, 0.1, 0.25, 1] 
              }}
              className="group relative"
            >
              <div className="border-t border-white/10 pt-12">
                <div className="grid md:grid-cols-3 gap-12">
                  
                  {/* Project number */}
                  <div className="text-8xl font-thin text-white/20">
                    0{index + 1}
                  </div>
                  
                  {/* Project info */}
                  <div className="space-y-4">
                    <h3 className="text-3xl font-light text-white tracking-wide">
                      {project.title}
                    </h3>
                    <p className="text-sm uppercase tracking-widest text-gray-400">
                      {project.subtitle}
                    </p>
                    <p className="text-gray-300 font-light leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  
                  {/* Tech stack */}
                  <div className="space-y-4">
                    <h4 className="text-sm uppercase tracking-widest text-gray-400">
                      Technology
                    </h4>
                    <div className="space-y-2">
                      {project.tech.map((tech, i) => (
                        <motion.div
                          key={i}
                          className="text-white font-light"
                          initial={{ opacity: 0, x: 20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: index * 0.3 + i * 0.1 }}
                        >
                          {tech}
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* View project button */}
                    <motion.button
                      className="mt-8 text-sm uppercase tracking-widest text-white/60 hover:text-white transition-colors duration-300 border-b border-white/0 hover:border-white/30"
                      whileHover={{ x: 10 }}
                    >
                      View Project →
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
