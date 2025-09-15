"use client"

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { ArrowDown, Download, Github, Linkedin, Mail, MapPin } from 'lucide-react'

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <section id="home" className="min-h-screen relative overflow-hidden flex items-center justify-center">
      
      {/* REAL Background - Automatic Formless.xyz Style */}
     

      {/* CONTENT - Following Your Exact Hierarchy */}
      <div className="mt-17 mb-30 relative z-10 max-w-5xl mx-auto px-6 text-center">

        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-3 px-6 py-3 mb-8 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium"
        >
          <motion.div 
            className=" w-3 h-3 bg-emerald-400 rounded-full"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          Available for Opportunities
        </motion.div>

        {/* 1. NAME - Most Prominent (6xl to 9xl, bold, gradient) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-4 mb-6"
        >
          <h3 className="text-2xl md:text-4xl lg:text-4xl font-bold leading-tight">
            Hi, my name is </h3>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
            <span className="block text-white">Najim  Tamboli</span>
            
          </h1>
        </motion.div>

        {/* 2. ROLE/TITLE - Medium (2xl to 4xl, light/medium) */}
<motion.h2
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.5 }}
  className="block text-[2rem] md:text-[2rem] lg:text-[2.5rem]  font-bold 
             bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent mb-8"
>
  Java Developer & Backend Engineer
</motion.h2>


        {/* 3. DESCRIPTION - Smaller (xl to 2xl, regular, max-w-3xl) */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12"
        >
          Building robust backend solutions with Java, Spring Boot, and modern technologies. 
          Passionate about creating scalable systems and solving complex problems.
        </motion.p>

        {/* Tech Stack Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto mb-12"
        >
          {[`Java`, 'Spring Boot', 'Python', 'MySQL', 'React', 'Git'].map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + index * 0.1 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-gray-300 text-sm font-medium hover:bg-white/10 transition-all duration-300"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        {/* 4. CTA BUTTONS - Prominent (lg to xl, semi-bold, uppercase) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
        >
          <motion.button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="group inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-full font-semibold text-lg uppercase tracking-wide shadow-xl hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Projects
            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </motion.button>
          
          <motion.a
            href="/Najim_Tamboli.pdf"
            target="_blank"
            className="inline-flex items-center gap-3 px-10 py-4 border-2 border-white/20 text-white rounded-full font-semibold text-lg uppercase tracking-wide hover:bg-white/10 hover:border-white/40 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="w-5 h-5" />
            Download Resume
          </motion.a>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-400 mb-8"
        >
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-blue-400" />
            <a href="mailto:najimtamboli671@gmail.com" className="hover:text-blue-400 transition-colors">
              najimtamboli671@gmail.com
            </a>
          </div>
          <div className="hidden sm:block text-gray-600">•</div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-emerald-400" />
            <span>Pune, Maharashtra</span>
          </div>
        </motion.div>

        {/* 5. SOCIAL LINKS - Secondary (1xl to 2xl, smaller) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="flex justify-center gap-6"
        >
          {[
            { icon: Github, href: "https://github.com/Najim4633", color: 'hover:text-white hover:bg-gray-700' },
            { icon: Linkedin, href: "https://www.linkedin.com/in/najim-tamboli-06b10026a/", color: 'hover:text-blue-400 hover:bg-blue-400/10' },
            { icon: Mail, href: "mailto:najimtamboli671@gmail.com", color: 'hover:text-emerald-400 hover:bg-emerald-400/10' }
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              className={`p-4 bg-white/5 backdrop-blur-sm rounded-xl text-gray-400 ${social.color} transition-all duration-300 border border-white/10`}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <social.icon className="w-6 h-6" />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-gray-400 cursor-pointer"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-sm font-medium">Scroll</span>
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  )
}
