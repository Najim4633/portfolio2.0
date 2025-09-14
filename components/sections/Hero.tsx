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
      <div className="absolute inset-0 bg-black">
        {/* Base gradient background */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(139,92,246,0.4) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(59,130,246,0.3) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(16,185,129,0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 60% 20%, rgba(59,130,246,0.4) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(139,92,246,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 60%, rgba(16,185,129,0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 80%, rgba(16,185,129,0.4) 0%, transparent 50%), radial-gradient(circle at 40% 20%, rgba(139,92,246,0.3) 0%, transparent 50%), radial-gradient(circle at 20% 40%, rgba(59,130,246,0.3) 0%, transparent 50%)'
            ]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Floating Geometric Shapes - Auto Animation */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${10 + (i * 12)}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          >
            {i % 3 === 0 ? (
              // Triangle
              <svg width="40" height="40" className="text-blue-400/20">
                <polygon points="20,5 35,30 5,30" fill="currentColor" stroke="rgba(59,130,246,0.3)" strokeWidth="1"/>
              </svg>
            ) : i % 3 === 1 ? (
              // Hexagon
              <svg width="40" height="40" className="text-purple-400/20">
                <polygon points="20,2 32,8 32,22 20,28 8,22 8,8" fill="currentColor" stroke="rgba(139,92,246,0.3)" strokeWidth="1"/>
              </svg>
            ) : (
              // Circle
              <div className="w-8 h-8 rounded-full bg-emerald-400/10 border border-emerald-400/30" />
            )}
          </motion.div>
        ))}

        {/* Light Beams - Automatic */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
            <motion.div
              key={i}
              className="absolute top-0 left-0 origin-bottom"
              style={{
                rotate: `${angle}deg`,
                height: '200px',
                width: '2px',
                background: `linear-gradient(to top, hsl(${i * 45}, 70%, 60%), transparent)`,
                filter: 'blur(1px)',
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </motion.div>

        {/* Particle dots */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 2, 1]
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      {/* CONTENT - Following Your Exact Hierarchy */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-3 px-6 py-3 mb-8 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium"
        >
          <motion.div 
            className="w-3 h-3 bg-emerald-400 rounded-full"
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
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-tight">
            <span className="block text-white">Najim</span>
            <motion.span 
              className="block bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{ backgroundSize: '200% 200%' }}
            >
              Tamboli
            </motion.span>
          </h1>
        </motion.div>

        {/* 2. ROLE/TITLE - Medium (2xl to 4xl, light/medium) */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-300 mb-8"
        >
          Java Developer & Backend Engineer
        </motion.h2>

        {/* 3. DESCRIPTION - Smaller (xl to 2xl, regular, max-w-3xl) */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12"
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
          {['Java', 'Spring Boot', 'Python', 'MySQL', 'React', 'Git'].map((tech, index) => (
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
            className="group inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg uppercase tracking-wide shadow-xl hover:shadow-2xl transition-all duration-300"
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
            { icon: Linkedin, href: "https://linkedin.com/in/najim-tamboli", color: 'hover:text-blue-400 hover:bg-blue-400/10' },
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
