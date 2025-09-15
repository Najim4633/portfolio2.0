// src/components/Footer.tsx
import { Github, Linkedin, Mail,  Heart } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()
  //bg-gray-900/50 border-t
  return (
    <footer className=" border-gray-800 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-green-600 bg-clip-text text-transparent">
              Najim Tamboli
            </h3>
            <p className="text-gray-400 text-sm">
              Java Developer & Backend Engineer passionate about building scalable solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-gray-400 hover:text-blue-400 text-sm">About</a>
              <a href="#skills" className="block text-gray-400 hover:text-blue-400 text-sm">Skills</a>
              <a href="#projects" className="block text-gray-400 hover:text-blue-400 text-sm">Projects</a>
              <a href="#contact" className="block text-gray-400 hover:text-blue-400 text-sm">Contact</a>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Connect</h4>
            <a href="mailto:najimtamboli671@gmail.com" className="flex items-center gap-2 text-gray-400 hover:text-blue-400 text-sm">
              <Mail className="w-4 h-4" />
              najimtamboli671@gmail.com
            </a>
            
            <div className="flex gap-4">
              <a href="https://github.com/Najim4633" target="_blank" className="text-gray-400 hover:text-white">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/najim-tamboli" target="_blank" className="text-gray-400 hover:text-blue-400">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-gray-400 text-sm">&copy; {currentYear} Najim Tamboli. All rights reserved.</span>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-400" />
            <span>Next.js & Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
