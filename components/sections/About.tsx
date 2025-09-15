"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Coffee, Lightbulb, Target, GraduationCap } from 'lucide-react'

export function About() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9] as const
      }
    }
  }

  const values = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable and efficient solutions",
      color: "from-blue-400 to-cyan-400"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Always exploring new technologies and methods",
      color: "from-yellow-400 to-orange-400"
    },
    {
      icon: Target,
      title: "Problem Solving",
      description: "Finding elegant solutions to complex challenges",
      color: "from-green-400 to-emerald-400"
    },
    {
      icon: Coffee,
      title: "Continuous Learning",
      description: "Always growing and improving my skills",
      color: "from-purple-400 to-pink-400"
    }
  ]

  const education = [
    {
      degree: "Master of Computer Application",
      school: "MES's Institute, Pune",
      duration: "2023-2025",
      cgpa: "7.88/10",
      description: "Focus: Advanced Java, Spring Boot, System Design"
    },
    {
      degree: "Bachelor of Computer Application", 
      school: "K. J. Somaiya College",
      duration: "2020-2023",
      cgpa: "8.65/10",
      description: "Foundation: Programming, Database Systems, Web Development"
    }
  ]

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(59,130,246,0.1), transparent)',
            filter: 'blur(80px)'
          }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            About{' '}
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Me
            </span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Passionate developer focused on creating efficient backend solutions
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          
          {/* Left Side - Story */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-3xl font-bold text-white">My Journey</h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I&apos;m a passionate <span className="text-blue-400 font-semibold">MCA student</span> with expertise in{' '}
                  <span className="text-emerald-400 font-semibold">Java</span>,{' '}
                  <span className="text-purple-400 font-semibold">Spring Boot</span>, and full-stack development. 
                  I specialize in building scalable backend systems and have hands-on experience with real-world projects.
                </p>
                <p>
                  Currently seeking opportunities as a{' '}
                  <span className="text-blue-400 font-semibold">Java Developer</span> or{' '}
                  <span className="text-emerald-400 font-semibold">Backend Developer</span> to contribute to 
                  innovative tech solutions and continue learning in a practical environment.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-3xl font-bold text-white">What Drives Me</h3>
              <p className="text-gray-300 leading-relaxed">
                I love solving complex problems and turning ideas into functional applications. 
                My approach combines technical expertise with creative problem-solving to deliver 
                solutions that make a real impact.
              </p>
            </motion.div>

            {/* Current Focus */}
            <motion.div 
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <h4 className="text-xl font-semibold text-white mb-4">Currently Focused On</h4>
              <ul className="space-y-3">
                {[
                  { text: "Advanced Spring Boot development", color: "text-green-400" },
                  { text: "System design and architecture", color: "text-blue-400" },
                  { text: "Building scalable REST APIs", color: "text-purple-400" }
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center gap-3"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className={`w-2 h-2 ${item.color.replace('text-', 'bg-')} rounded-full`} />
                    <span className={`${item.color} font-medium`}>{item.text}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Right Side - Values & Education */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-10"
          >
            
            {/* Values Grid */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-white mb-8">Core Values</h3>
              <div className="grid grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 group"
                    whileHover={{ 
                      scale: 1.05,
                      y: -10
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${value.color} p-3 mx-auto mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <value.icon className="w-full h-full text-white" />
                    </motion.div>
                    <h4 className="font-semibold text-white mb-2">{value.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-white mb-8">Education</h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                    whileHover={{ x: 10 }}
                  >
                    <div className="flex items-start gap-4">
                      <motion.div
                        className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-400 to-purple-400 p-3 flex-shrink-0"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <GraduationCap className="w-full h-full text-white" />
                      </motion.div>
                      <div className="flex-1">
                        <h5 className="font-semibold text-white text-lg">{edu.degree}</h5>
                        <p className="text-blue-400 font-medium">{edu.school}</p>
                        <p className="text-gray-400 text-sm mb-2">{edu.duration} • CGPA: {edu.cgpa}</p>
                        <p className="text-gray-300 text-sm">{edu.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
