import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: '#', label: 'Email' }
  ]

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-card border-t border-neon-orange/20 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-2">
              <span className="neon-text-orange">&lt;</span>
              <span className="neon-text-green">SumitDev</span>
              <span className="neon-text-orange">/&gt;</span>
            </h3>
            <p className="text-gray-400">Building amazing digital experiences with modern technologies.</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-bold neon-text-orange mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-neon-orange transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-neon-orange transition-colors">About</a></li>
              <li><a href="#projects" className="hover:text-neon-orange transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-neon-orange transition-colors">Contact</a></li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-bold neon-text-green mb-4">Connect With Me</h4>
            <div className="flex gap-4">
              {socialLinks.map((link, idx) => {
                const Icon = link.icon
                return (
                  <motion.a
                    key={idx}
                    href={link.href}
                    aria-label={link.label}
                    className="w-10 h-10 rounded-lg bg-neon-orange/20 flex items-center justify-center text-neon-orange hover:bg-neon-orange hover:text-dark-bg transition-all"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={20} />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          className="border-t border-neon-orange/20 pt-8 text-center text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p>&copy; {currentYear} SumitDev. All rights reserved. Built with React, Vite & Tailwind CSS.</p>
        </motion.div>
      </div>
    </footer>
  )
}
