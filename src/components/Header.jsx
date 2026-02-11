import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = ['Home', 'About', 'Skills', 'Projects', 'Services', 'Contact']

  return (
    <motion.header 
      className="fixed w-full top-0 z-50 backdrop-blur-md bg-dark-bg/80 border-b border-neon-orange/20"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <motion.div
          className="text-2xl font-bold"
          whileHover={{ scale: 1.1 }}
        >
          <span className="neon-text-orange">&lt;</span>
          <span className="neon-text-green">SumitDev</span>
          <span className="neon-text-orange">/&gt;</span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {menuItems.map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="neon-text-orange font-medium transition-all hover:text-neon-green"
              whileHover={{ scale: 1.1, textShadow: '0 0 10px #00FF00' }}
            >
              {item}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden neon-text-orange"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-dark-card border-t border-neon-orange/20"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="px-4 py-4 space-y-2">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block p-2 neon-text-orange hover:text-neon-green transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
