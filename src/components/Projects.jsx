import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { ExternalLink } from 'lucide-react'

export default function Projects() {
  const ref = React.useRef(null)
  const inView = useInView(ref)

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-featured e-commerce platform built with Next.js and Stripe integration',
      tech: ['Next.js', 'React', 'Stripe', 'MongoDB'],
      color: 'orange',
      image: '🛍️'
    },
    {
      title: 'WordPress Corporate Site',
      description: 'Custom WordPress site with Elementor Pro, optimized for conversions',
      tech: ['WordPress', 'Elementor', 'WooCommerce'],
      color: 'green',
      image: '🌐'
    },
    {
      title: 'Mobile App - Flutter',
      description: 'Cross-platform mobile app with Firebase backend and real-time updates',
      tech: ['Flutter', 'Firebase', 'Dart'],
      color: 'orange',
      image: '📱'
    },
    {
      title: 'No-Code SaaS Dashboard',
      description: 'Complex business dashboard built with Bubble.io and third-party integrations',
      tech: ['Bubble.io', 'Zapier', 'API Integrations'],
      color: 'green',
      image: '📊'
    },
    {
      title: 'React Native App',
      description: 'Native iOS and Android app with offline capabilities and push notifications',
      tech: ['React Native', 'Redux', 'Firebase'],
      color: 'orange',
      image: '⚡'
    },
    {
      title: 'Design System & Components',
      description: 'Reusable component library for multiple projects built with React',
      tech: ['React', 'Storybook', 'Tailwind CSS'],
      color: 'green',
      image: '🎨'
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <section id="projects" className="min-h-screen flex items-center py-20">
      <div className="max-w-7xl mx-auto px-4 w-full">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          <span className="neon-text-orange">Featured</span>
          <span className="neon-text-green"> Projects</span>
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className={`bg-dark-card border-2 p-6 rounded-lg transition-all group cursor-pointer ${
                project.color === 'orange'
                  ? 'border-neon-orange/50 hover:border-neon-orange'
                  : 'border-neon-green/50 hover:border-neon-green'
              }`}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="text-5xl mb-4 group-hover:scale-125 transition-transform">{project.image}</div>
              <h3 className={`text-xl font-bold mb-3 ${
                project.color === 'orange' ? 'neon-text-orange' : 'neon-text-green'
              }`}>
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className={`text-xs px-2 py-1 rounded ${
                      project.color === 'orange'
                        ? 'bg-neon-orange/20 text-neon-orange'
                        : 'bg-neon-green/20 text-neon-green'
                    }`}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <motion.button
                whileHover={{ x: 5 }}
                className="flex items-center gap-2 font-medium transition-all"
              >
                View Project <ExternalLink size={16} />
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
