'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Building, ExternalLink } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Frontend Developer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: 'Leading frontend development for enterprise applications, mentoring junior developers, and implementing best practices for code quality and performance.',
      achievements: [
        'Led a team of 5 developers in building a complex dashboard application',
        'Improved application performance by 40% through optimization techniques',
        'Implemented CI/CD pipelines and automated testing strategies'
      ],
      technologies: ['React', 'TypeScript', 'Next.js', 'GraphQL', 'Jest', 'Docker']
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Innovations Inc.',
      location: 'New York, NY',
      period: '2020 - 2022',
      description: 'Developed responsive web applications and collaborated with design and backend teams to deliver high-quality user experiences.',
      achievements: [
        'Built 10+ client websites with modern design principles',
        'Collaborated with UX designers to improve user interface',
        'Reduced page load times by 30% through optimization'
      ],
      technologies: ['React', 'JavaScript', 'CSS3', 'Node.js', 'MongoDB', 'AWS']
    },
    {
      title: 'Junior Frontend Developer',
      company: 'StartupHub',
      location: 'Austin, TX',
      period: '2019 - 2020',
      description: 'Started my journey in frontend development, learning modern web technologies and contributing to various projects.',
      achievements: [
        'Developed responsive landing pages and marketing websites',
        'Learned modern JavaScript frameworks and build tools',
        'Contributed to open-source projects and community'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Git', 'Webpack']
    }
  ]

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'University of Technology',
      location: 'Austin, TX',
      period: '2015 - 2019',
      description: 'Focused on software engineering principles, algorithms, and web development fundamentals.'
    }
  ]

  return (
    <section id="experience" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-gray-100">
            <span className="text-gradient">Experience</span> & Education
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My professional journey and educational background in software development.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Work Experience */}
          <div className="lg:col-span-2">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-100"
            >
              Work Experience
            </motion.h3>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={`${exp.company}-${exp.period}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Timeline line */}
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary-200" />
                  
                  <div className="relative pl-16">
                    {/* Timeline dot */}
                    <div className="absolute left-4 top-2 w-4 h-4 bg-primary-500 rounded-full border-4 border-white dark:border-gray-800 shadow-lg" />
                    
                    <div className="card p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <h4 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2 sm:mb-0">
                          {exp.title}
                        </h4>
                        <span className="text-sm text-primary-600 font-medium bg-primary-50 dark:bg-primary-900/30 dark:text-primary-300 px-3 py-1 rounded-full">
                          {exp.period}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-300">
                        <div className="flex items-center gap-1">
                          <Building size={16} />
                          {exp.company}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          {exp.location}
                        </div>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                        {exp.description}
                      </p>
                      
                      <div className="mb-4">
                        <h5 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Key Achievements:</h5>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-gray-600 dark:text-gray-300 text-sm flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-200 rounded text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-100"
            >
              Education
            </motion.h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={`${edu.school}-${edu.period}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="card p-6">
                    <h4 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-2">
                      {edu.degree}
                    </h4>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 mb-2">
                      <Building size={16} />
                      {edu.school}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 mb-2">
                      <MapPin size={16} />
                      {edu.location}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-primary-600 dark:text-primary-300 font-medium mb-3">
                      <Calendar size={16} />
                      {edu.period}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <h4 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">Certifications</h4>
              <div className="space-y-3">
                {[
                  'AWS Certified Developer Associate',
                  'Google Cloud Professional Developer',
                  'Microsoft Certified: Azure Developer Associate'
                ].map((cert, index) => (
                  <motion.div
                    key={cert}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700"
                  >
                    <div className="w-2 h-2 bg-primary-500 rounded-full" />
                    <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 btn-primary group"
          >
            Download Full Resume
            <ExternalLink 
              size={20} 
              className="group-hover:translate-x-1 transition-transform duration-200" 
            />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
