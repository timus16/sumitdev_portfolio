import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function Contact() {
  const ref = React.useRef(null)
  const inView = useInView(ref)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', message: '' })
  }

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

  return (
    <section id="contact" className="min-h-screen flex items-center py-20">
      <div className="max-w-7xl mx-auto px-4 w-full">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          <span className="neon-text-orange">Get In</span>
          <span className="neon-text-green"> Touch</span>
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold neon-text-orange mb-6">Let's Connect!</h3>
            
            <motion.a
              href="mailto:sumit@example.com"
              className="flex items-center gap-4 p-4 bg-dark-card border border-neon-orange/30 rounded-lg hover:border-neon-orange transition-all group"
              whileHover={{ x: 10 }}
            >
              <div className="w-12 h-12 rounded-lg bg-neon-orange/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="text-neon-orange" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="font-bold text-neon-orange">sumit@devmail.com</p>
              </div>
            </motion.a>

            <motion.a
              href="tel:+1234567890"
              className="flex items-center gap-4 p-4 bg-dark-card border border-neon-green/30 rounded-lg hover:border-neon-green transition-all group"
              whileHover={{ x: 10 }}
            >
              <div className="w-12 h-12 rounded-lg bg-neon-green/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone className="text-neon-green" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <p className="font-bold text-neon-green">+1 (555) 123-4567</p>
              </div>
            </motion.a>

            <motion.div
              className="flex items-center gap-4 p-4 bg-dark-card border border-neon-orange/30 rounded-lg"
              whileHover={{ x: 10 }}
            >
              <div className="w-12 h-12 rounded-lg bg-neon-orange/20 flex items-center justify-center">
                <MapPin className="text-neon-orange" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="font-bold text-neon-orange">San Francisco, CA</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-4 bg-dark-card border border-neon-green/30 p-8 rounded-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <label className="block text-sm font-medium neon-text-orange mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-dark-bg text-white border border-neon-orange/30 rounded-lg focus:border-neon-orange focus:outline-none transition-all"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium neon-text-orange mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-dark-bg text-white border border-neon-orange/30 rounded-lg focus:border-neon-orange focus:outline-none transition-all"
                placeholder="Your email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium neon-text-orange mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 bg-dark-bg text-white border border-neon-orange/30 rounded-lg focus:border-neon-orange focus:outline-none transition-all resize-none"
                placeholder="Your message"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px #00FF00' }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-6 py-3 bg-neon-green text-dark-bg font-bold rounded-lg flex items-center justify-center gap-2 transition-all"
            >
              <Send size={20} /> Send Message
            </motion.button>

            {submitted && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-neon-green font-medium"
              >
                ✓ Message sent successfully!
              </motion.p>
            )}
          </motion.form>
        </motion.div>
      </div>
    </section>
  )
}
