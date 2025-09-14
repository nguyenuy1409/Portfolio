'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Code, Cpu, Database } from 'lucide-react'

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  const floatingIcons = [
    { Icon: Code, delay: 0 },
    { Icon: Cpu, delay: 0.5 },
    { Icon: Database, delay: 1 },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-primary-50 to-white dark:from-dark-900 dark:to-dark-800">
      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, delay }) => (
        <motion.div
          key={Icon.name}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 4,
            delay,
            repeat: Infinity,
            repeatDelay: 2,
          }}
          className="absolute text-primary-200 dark:text-primary-800"
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${20 + Math.random() * 60}%`,
          }}
        >
          <Icon size={40} />
        </motion.div>
      ))}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          variants={itemVariants}
          className="mb-6"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <span className="gradient-text">Your Name</span>
          </motion.h1>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <h2 className="text-2xl md:text-3xl text-dark-600 dark:text-dark-300 mb-2">
            Computer Science Student
          </h2>
          <p className="text-lg md:text-xl text-dark-500 dark:text-dark-400">
            University of Wollongong
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mb-12"
        >
          <p className="text-xl md:text-2xl text-dark-700 dark:text-dark-200 max-w-3xl mx-auto leading-relaxed">
            Passionate about technology, coding, and building innovative solutions that make a difference.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-200"
          >
            Get In Touch
          </motion.a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-16"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex justify-center"
          >
            <ChevronDown size={32} className="text-primary-600" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection
