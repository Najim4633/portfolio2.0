// src/components/sections/Contact.tsx - Final Contact Section
"use client"

import { useState } from 'react'
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle } from 'lucide-react'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="contact" className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let&apos;s <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let&apos;s discuss your next project
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Get In Touch</h3>
              <p className="text-gray-300 leading-relaxed">
                I&apos;m always interested in new opportunities and exciting projects. 
                Whether you&apos;re a company looking to hire or just want to connect, I&apos;d love to hear from you.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-gray-900/50 border border-gray-700/50 rounded-xl hover:bg-gray-800/50 transition-colors">
                <div className="p-3 bg-blue-500/10 rounded-xl">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Email</h4>
                  <a href="mailto:najimtamboli671@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                    najimtamboli671@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-900/50 border border-gray-700/50 rounded-xl hover:bg-gray-800/50 transition-colors">
                <div className="p-3 bg-green-500/10 rounded-xl">
                  <Phone className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Phone</h4>
                  <a href="tel:+919503741273" className="text-gray-400 hover:text-green-400 transition-colors">
                    +91 9503741273
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-900/50 border border-gray-700/50 rounded-xl hover:bg-gray-800/50 transition-colors">
                <div className="p-3 bg-purple-500/10 rounded-xl">
                  <MapPin className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Location</h4>
                  <span className="text-gray-400">Pune, Maharashtra, India</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Connect With Me</h4>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/Najim4633"
                  target="_blank"
                  className="flex items-center gap-3 px-6 py-3 bg-gray-800/50 hover:bg-gray-700 rounded-xl text-gray-300 hover:text-white transition-all duration-300 hover:scale-105"
                >
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
                <a 
                  href="https://linkedin.com/in/najim-tamboli"
                  target="_blank"
                  className="flex items-center gap-3 px-6 py-3 bg-gray-800/50 hover:bg-gray-700 rounded-xl text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-105"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900/30 border border-gray-700/50 rounded-2xl p-8">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 focus:outline-none transition-colors"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 focus:outline-none transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 focus:outline-none transition-colors"
                    placeholder="Project Discussion"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Message Sent!</h3>
                <p className="text-gray-400">
                  Thank you for reaching out. I&apos;ll get back to you soon!
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16 space-y-6">
          <h3 className="text-2xl font-bold text-white">
            Ready to start your project?
          </h3>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Let&apos;s build something amazing together. I&apos;m always excited to work on innovative projects 
            and help bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:najimtamboli671@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              Email Me Directly
            </a>
            
            <a 
              href="/Najim_Tamboli.pdf"
              target="_blank"
              className="inline-flex items-center gap-3 px-8 py-4 border-2 border-gray-600 hover:border-blue-400 text-gray-300 hover:text-blue-400 rounded-full font-semibold hover:bg-gray-800/50 transition-all duration-300"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
