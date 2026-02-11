import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Code2, Smartphone, Zap, Palette } from 'lucide-react'

export default function Services() {
  const ref = React.useRef(null)
  const inView = useInView(ref)

  const services = [
    {
      icon: Code2,
      title: 'WordPress Development',
      description: 'Custom WordPress solutions with Elementor, Divi, and Gutenberg. Performance optimized and SEO-ready.',
      color: 'orange'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Cross-platform mobile apps using Flutter and React Native. Native apps with platform-specific features.',
      color: 'green'
    },
    {
      icon: Palette,
      title: 'Web Design & Development',
      description: 'Modern responsive websites with React, Next.js, and Flutter Web. Beautiful UI with smooth animations.',
      color: 'orange'
    },
    {
      icon: Zap,
      title: 'No-Code Solutions',
      description: 'Rapid deployment using Bubble.io, FlutterFlow, Framer, and Webflow. Perfect for MVPs and prototypes.',
      color: 'green'
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
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  }

  return (
    <section id="services" className="min-h-screen flex items-center py-20">
      <div className="max-w-7xl mx-auto px-4 w-full">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          <span className="neon-text-orange">Services</span>
          <span className="neon-text-green"> I Offer</span>
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {services.map((service, idx) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={`glass-lg border-2 p-8 rounded-lg transition-all group hover:shadow-2xl ${
                  service.color === 'orange'
                    ? 'hover:border-neon-orange/80'
                    : 'hover:border-neon-green/80'
                }`}
                whileHover={{ y: -15 }}
              >
                <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${
                  service.color === 'orange'
                    ? 'bg-neon-orange/20 text-neon-orange'
                    : 'bg-neon-green/20 text-neon-green'
                }`}>
                  <IconComponent size={32} />
                </div>
                <h3 className={`text-2xl font-bold mb-3 ${
                  service.color === 'orange' ? 'neon-text-orange' : 'neon-text-green'
                }`}>
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
