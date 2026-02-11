import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <motion.div
        className="text-center px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6"
        >
          <span className="neon-text-orange">WordPress</span>
          <br />
          <span className="neon-text-green">Full-Stack Developer</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto mb-8 text-gray-300"
        >
          Crafting digital experiences with <span className="neon-text-orange">modern technologies</span> and
          <span className="neon-text-green"> innovative solutions</span>
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px #FF6B35' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-neon-orange text-dark-bg font-bold rounded-lg transition-all"
          >
            View My Work
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px #00FF00' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border-2 border-neon-green text-neon-green font-bold rounded-lg hover:bg-neon-green/10 transition-all"
          >
            Get In Touch
          </motion.button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-16"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="mx-auto text-neon-orange" size={32} />
        </motion.div>
      </motion.div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-neon-orange/10 rounded-full blur-3xl"
          animate={{ y: [0, 50, 0], x: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-neon-green/10 rounded-full blur-3xl"
          animate={{ y: [0, -50, 0], x: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>
    </section>
  )
}
