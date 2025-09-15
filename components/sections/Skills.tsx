// src/components/sections/Skills.tsx - Clean Skills Section
import { Database, Code, Wrench, Layers } from 'lucide-react'

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
      borderColor: "border-blue-400/20",
      skills: [
        { name: "Java", level: 90 },
        { name: "Python", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "C++", level: 75 }
      ]
    },
    {
      title: "Frameworks & Libraries",
      icon: Layers,
      color: "text-green-400",
      bgColor: "bg-green-400/10",
      borderColor: "border-green-400/20",
      skills: [
        { name: "Spring Boot", level: 85 },
        { name: "Django", level: 80 },
        { name: "React", level: 75 },
        { name: "Flask", level: 70 }
      ]
    },
    {
      title: "Databases",
      icon: Database,
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
      borderColor: "border-purple-400/20",
      skills: [
        { name: "MySQL", level: 85 },
        { name: "SQLite", level: 80 },
        { name: "MongoDB", level: 70 },
        { name: "PostgreSQL", level: 65 }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      color: "text-orange-400",
      bgColor: "bg-orange-400/10",
      borderColor: "border-orange-400/20",
      skills: [
        { name: "Git", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "IntelliJ IDEA", level: 85 },
        { name: "Postman", level: 80 }
      ]
    }
  ]

  const certifications = [
    "Java Full Stack Development - QSpiders",
    "Web Development - IBM", 
    "Python Programming - Let's Upgrade",
    "Database Management Systems - Infosys Springboard"
  ]

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Skills & <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">Technologies</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to build robust applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className={`${category.bgColor} ${category.borderColor} border rounded-2xl p-8 hover:bg-gray-800/30 transition-all duration-300`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 ${category.bgColor} rounded-xl`}>
                  <category.icon className={`w-6 h-6 ${category.color}`} />
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-300">{skill.name}</span>
                      <span className={`text-sm ${category.color} font-medium`}>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full bg-gradient-to-r ${category.color === 'text-blue-400' ? 'from-blue-700 to-blue-400' : 
                          category.color === 'text-green-400' ? 'from-green-700 to-green-400' :
                          category.color === 'text-purple-400' ? 'from-purple-700 to-purple-400' :
                          'from-orange-700 to-orange-400'}`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-gray-900/50 border border-gray-700/50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Certifications</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 p-4 bg-gray-800/30 border border-gray-700/30 rounded-lg hover:bg-gray-800/50 transition-colors"
              >
                <div className="w-2 h-2 bg-emerald-400 rounded-full flex-shrink-0"></div>
                <span className="text-gray-300 text-sm">{cert}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-400 text-lg mb-6">
            Ready to work with these technologies on your next project?
          </p>
          <a 
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            View My Projects
          </a>
        </div>
      </div>
    </section>
  )
}
