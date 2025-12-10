"use client"

// import dynamic from 'next/dynamic'
import { Header } from '@/components/sections/Header'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Skills } from '@/components/sections/Skills'
import { Projects } from '@/components/sections/Projects'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/sections/Footer'

// Dynamic import with SSR disabled to prevent hydration mismatch
// const AnimatedBackground = dynamic(() => 
//   import('@/components/ui/AnimatedBackground').then(mod => ({ default: mod.AnimatedBackground })),
//   { 
//     ssr: false,
//     loading: () => <div className="fixed inset-0 bg-black z-0" /> // Fallback background
//   }
// )

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-black text-white font-serif">
      
      {/* Animated Background - Client-Side Only */}
      {/* <AnimatedBackground /> */}
      
      {/* ALL CONTENT - Higher Z-Index */}
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}
