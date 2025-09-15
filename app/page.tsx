// src/app/page.tsx - Use Header component
 import { Header } from '@/components/sections/Header'
 import { Hero } from '@/components/sections/Hero'
 import { About } from '@/components/sections/About'
 import { Skills } from '@/components/sections/Skills'
 import { Projects } from '@/components/sections/Projects'
 import { Contact } from '@/components/sections/Contact'
 import { Footer } from '@/components/sections/Footer'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white">
       <Header />
      <main>
        <Hero />
        
        <Skills />
        <Projects />
        <Contact />
        <About />
        </main>
        <Footer />
       
      
    </div>
  )
}
