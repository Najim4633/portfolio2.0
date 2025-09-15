"use client"

import { motion } from 'framer-motion'

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 bg-black z-0">
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

      {/* Floating Geometric Shapes */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${5 + (i * 8)}%`,
            top: `${10 + (i % 4) * 20}%`,
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
            <svg width="40" height="40" className="text-blue-400/20">
              <polygon points="20,5 35,30 5,30" fill="currentColor" stroke="rgba(59,130,246,0.3)" strokeWidth="1"/>
            </svg>
          ) : i % 3 === 1 ? (
            <svg width="40" height="40" className="text-purple-400/20">
              <polygon points="20,2 32,8 32,22 20,28 8,22 8,8" fill="currentColor" stroke="rgba(139,92,246,0.3)" strokeWidth="1"/>
            </svg>
          ) : (
            <div className="w-8 h-8 rounded-full bg-emerald-400/10 border border-emerald-400/30" />
          )}
        </motion.div>
      ))}



      {/* Random Particle Dots - Client-Side Only */}
      {[...Array(20)].map((_, i) => (
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
  )
}
