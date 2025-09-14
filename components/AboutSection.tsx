'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, GraduationCap, Lightbulb, Users } from 'lucide-react'

const AboutSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  const skills = [
    { name: 'Programming', level: 85 },
    { name: 'Web Development', level: 80 },
    { name: 'Data Structures', level: 75 },
    { name: 'Algorithms', level: 70 },
  ]

  const interests = [
    { icon: Code2, title: 'Software Development', description: 'Building applications and solving complex problems' },
    { icon: Lightbulb, title: 'Innovation', description: 'Exploring new technologies and creative solutions' },
    { icon: Users, title: 'Collaboration', description: 'Working with teams to achieve common goals' },
    { icon: GraduationCap, title: 'Learning', description: 'Continuously expanding knowledge and skills' },
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="gradient-text">About Me</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-dark-600 dark:text-dark-300 max-w-3xl mx-auto"
          >
            A passionate Computer Science student at the University of Wollongong, 
            dedicated to exploring the endless possibilities of technology and coding.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Description */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold mb-4 text-dark-800 dark:text-white">
                My Journey
              </h3>
              <p className="text-dark-600 dark:text-dark-300 leading-relaxed mb-4">
                As a Computer Science student, I'm fascinated by the intersection of 
                technology and problem-solving. My journey began with a curiosity about 
                how things work, which has evolved into a passion for creating innovative 
                solutions through code.
              </p>
              <p className="text-dark-600 dark:text-dark-300 leading-relaxed">
                I believe in the power of technology to make a positive impact on society, 
                and I'm committed to developing my skills to contribute to meaningful projects 
                that can change the world.
              </p>
            </motion.div>

            {/* Skills */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h4 className="text-xl font-semibold text-dark-800 dark:text-white">
                Core Skills
              </h4>
              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-dark-700 dark:text-dark-200 font-medium">
                      {skill.name}
                    </span>
                    <span className="text-primary-600 font-semibold">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-dark-200 dark:bg-dark-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Interests */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {interests.map((interest, index) => (
              <motion.div
                key={interest.title}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 bg-gradient-to-br from-primary-50 to-white dark:from-dark-700 dark:to-dark-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg mr-4">
                    <interest.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-dark-800 dark:text-white">
                    {interest.title}
                  </h4>
                </div>
                <p className="text-dark-600 dark:text-dark-300 text-sm">
                  {interest.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
