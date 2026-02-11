import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

export default function Skills() {
  const ref = React.useRef(null)
  const inView = useInView(ref)

  const skillCategories = [
    {
      title: 'WordPress Tools',
      color: 'orange',
      skills: ['Elementor', 'Divi', 'Gutenberg', 'ACF', 'Custom Plugins', 'Theme Development']
    },
    {
      title: 'Web Development',
      color: 'green',
      skills: ['React.js', 'Next.js', 'Flutter Web', 'JavaScript', 'TypeScript', 'Tailwind CSS']
    },
    {
      title: 'Mobile Development',
      color: 'orange',
      skills: ['Flutter', 'React Native', 'NativeScript', 'Lynx', 'Firebase', 'Native Plugins']
    },
    {
      title: 'No-Code Platforms',
      color: 'green',
      skills: ['Bubble.io', 'FlutterFlow', 'Framer', 'Webflow', 'Zapier', 'Make.com']
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <section id="skills" className="min-h-screen flex items-center py-20">
      <div className="max-w-7xl mx-auto px-4 w-full">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          <span className="neon-text-orange">Technical</span>
          <span className="neon-text-green"> Skills</span>
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className={`bg-dark-card border-2 p-8 rounded-lg transition-all hover:shadow-lg ${
                category.color === 'orange'
                  ? 'border-neon-orange/50 hover:border-neon-orange hover:shadow-neon-orange'
                  : 'border-neon-green/50 hover:border-neon-green hover:shadow-neon-green'
              }`}
              style={{
                boxShadow: `0 0 0px ${category.color === 'orange' ? '#FF6B351a' : '#00FF001a'}`
              }}
              whileHover={{
                boxShadow: `0 0 25px ${category.color === 'orange' ? '#FF6B351a' : '#00FF001a'}`
              }}
            >
              <h3 className={`text-2xl font-bold mb-6 ${
                category.color === 'orange' ? 'neon-text-orange' : 'neon-text-green'
              }`}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    className={`px-4 py-2 rounded-full border text-sm font-medium transition-all ${
                      category.color === 'orange'
                        ? 'border-neon-orange/50 text-neon-orange hover:bg-neon-orange/10 hover:border-neon-orange'
                        : 'border-neon-green/50 text-neon-green hover:bg-neon-green/10 hover:border-neon-green'
                    }`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
