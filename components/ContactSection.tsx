'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Send } from 'lucide-react'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

const ContactSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()

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

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsSubmitted(true)
    reset()
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'your.email@uowmail.edu.au',
      link: 'mailto:your.email@uowmail.edu.au',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+61 4XX XXX XXX',
      link: 'tel:+614XXXXXXXX',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Wollongong, NSW, Australia',
      link: '#',
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      url: 'https://github.com/nguyenuy1409',
      color: 'hover:text-gray-900 dark:hover:text-white',
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/uynguyen149/',
      color: 'hover:text-blue-600',
    },
    {
      icon: Instagram,
      name: 'Instagram',
      url: 'https://www.instagram.com/uynguyen__/',
      color: 'hover:text-blue-400',
    },
  ]

  return (
    <section id="contact" className="py-20 bg-white dark:bg-dark-800">
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
            <span className="gradient-text">Get In Touch</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-dark-600 dark:text-dark-300 max-w-3xl mx-auto"
          >
            I'm always interested in new opportunities and collaborations. 
            Let's connect and discuss how we can work together!
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold mb-6 text-dark-800 dark:text-white">
                Let's Connect
              </h3>
              <p className="text-dark-600 dark:text-dark-300 mb-8 leading-relaxed">
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                I'd love to hear from you. Feel free to reach out through any of the channels below.
              </p>
            </motion.div>

            {/* Contact Info Cards */}
            <motion.div variants={itemVariants} className="space-y-4">
              {contactInfo.map((info) => (
                <motion.a
                  key={info.title}
                  href={info.link}
                  whileHover={{ x: 10 }}
                  className="flex items-center p-4 bg-gradient-to-r from-primary-50 to-white dark:from-dark-700 dark:to-dark-600 rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg mr-4">
                    <info.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-800 dark:text-white">
                      {info.title}
                    </h4>
                    <p className="text-dark-600 dark:text-dark-300">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold mb-4 text-dark-800 dark:text-white">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 bg-dark-100 dark:bg-dark-700 rounded-lg text-dark-600 dark:text-dark-300 transition-colors duration-200 ${social.color}`}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-gradient-to-br from-primary-50 to-white dark:from-dark-700 dark:to-dark-600 p-8 rounded-xl shadow-lg"
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-semibold mb-6 text-dark-800 dark:text-white"
            >
              Send a Message
            </motion.h3>

            <motion.form
              variants={itemVariants}
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-dark-700 dark:text-dark-200 mb-2">
                    Name *
                  </label>
                  <input
                    {...register('name', { required: 'Name is required' })}
                    type="text"
                    className="w-full px-4 py-3 border border-dark-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-dark-900 dark:text-white transition-colors duration-200"
                    placeholder="Your Name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark-700 dark:text-dark-200 mb-2">
                    Email *
                  </label>
                  <input
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    type="email"
                    className="w-full px-4 py-3 border border-dark-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-dark-900 dark:text-white transition-colors duration-200"
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-dark-700 dark:text-dark-200 mb-2">
                  Subject *
                </label>
                <input
                  {...register('subject', { required: 'Subject is required' })}
                  type="text"
                  className="w-full px-4 py-3 border border-dark-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-dark-900 dark:text-white transition-colors duration-200"
                  placeholder="What's this about?"
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-dark-700 dark:text-dark-200 mb-2">
                  Message *
                </label>
                <textarea
                  {...register('message', { required: 'Message is required' })}
                  rows={5}
                  className="w-full px-4 py-3 border border-dark-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-dark-900 dark:text-white transition-colors duration-200 resize-none"
                  placeholder="Tell me about your project or just say hello!"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-primary-400 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : isSubmitted ? (
                  <>
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
