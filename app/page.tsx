// src/app/page.tsx - Use Header component
 import { Header } from '@/components/sections/Header'
 import { Hero } from '@/components/sections/Hero'
 import { About } from '@/components/sections/About'
 import { Skills } from '@/components/sections/Skills'
 import { Projects } from '@/components/sections/Projects'
 import { Contact } from '@/components/sections/Contact'
 import { Footer } from '@/components/sections/Footer'
//bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white
export default function HomePage() {
  return (
    <div className="min-h-screen text-white bg-black">
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
  )
}
