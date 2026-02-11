import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

export default function About() {
  const ref = React.useRef(null)
  const inView = useInView(ref)

  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  }

  return (
    <section id="about" className="min-h-screen flex items-center py-20">
      <div className="max-w-7xl mx-auto px-4 w-full">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          <span className="neon-text-orange">About</span>
          <span className="neon-text-green"> Me</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={variants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-4"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a passionate <span className="neon-text-orange">WordPress Developer</span> with 5+ years of experience
              building high-performance websites and applications. My expertise spans from custom WordPress development
              to modern full-stack web and mobile solutions.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              I specialize in popular page builders like <span className="neon-text-green">Elementor</span> and <span className="neon-text-green">Divi</span>,
              while also maintaining deep knowledge of WordPress core, <span className="neon-text-orange">Gutenberg</span>, and custom theme development.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Beyond WordPress, I'm skilled in modern web technologies including <span className="neon-text-orange">React.js</span>, 
              <span className="neon-text-orange"> Next.js</span>, and mobile development frameworks like <span className="neon-text-green">Flutter</span>,
              <span className="neon-text-green"> React Native</span>, and <span className="neon-text-green">NativeScript</span>.
            </p>
          </motion.div>

          <motion.div
            className="space-y-4"
            variants={variants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
          >
            <div className="glass-orange p-6 rounded-lg hover:border-neon-orange/80 transition-all">
              <h3 className="text-xl font-bold neon-text-orange mb-3">Experience</h3>
              <p className="text-gray-300">5+ years in web development with proven track record of delivering 100+ projects</p>
            </div>
            <div className="glass-green p-6 rounded-lg hover:border-neon-green/80 transition-all">
              <h3 className="text-xl font-bold neon-text-green mb-3">No-Code Expertise</h3>
              <p className="text-gray-300">Advanced knowledge of Bubble.io, FlutterFlow, Framer, and Webflow</p>
            </div>
            <div className="glass-orange p-6 rounded-lg hover:border-neon-orange/80 transition-all">
              <h3 className="text-xl font-bold neon-text-orange mb-3">Full-Stack Capability</h3>
              <p className="text-gray-300">Frontend, backend, and mobile development across multiple tech stacks</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
