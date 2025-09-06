import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Download, Github, Linkedin, Mail, MapPin, Phone,FileText, MessageCircle, Code, Brain, Zap } from 'lucide-react';

export default function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const handleResumeDownload = () => {
    window.open('/Resume_Harsh_abhang_v1.1.pdf', '_blank');
    //window.open('https://drive.google.com/drive/folders/1xEal5LmXBPZEEbA5ObB3oSCsyIu-Su3g?usp=sharing', '_blank');
  };
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <div className="relative inline-block">
              <motion.div
                className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 p-1 mx-auto"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden">
                  <img
                    src="/api/placeholder/160/160"
                    alt="Harsh Abhang"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </motion.div>
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>

          {/* Name and Title */}
          <motion.div variants={itemVariants} className="mb-8">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-white mb-4"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Harsh <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Abhang</span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-xl md:text-2xl text-gray-300 mb-2"
            >
              Software Developer & AI Enthusiast
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex items-center justify-center space-x-4 text-gray-400 text-sm"
            >
              <div className="flex items-center space-x-1">
                <MapPin className="h-4 w-4" />
                <span>Mumbai, India</span>
              </div>
              <div className="flex items-center space-x-1">
                <Phone className="h-4 w-4" />
                <span>Available for opportunities</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto"
          >
            Passionate about building intelligent systems and scalable web applications. 
            Experienced in Django, Machine Learning, and modern web technologies with a focus on 
            delivering impactful solutions that drive business growth.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={scrollToAbout}
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-purple-500/25 relative overflow-hidden group"
                onClick={handleResumeDownload}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <FileText className="mr-2 h-5 w-5 relative z-10" />
                <span className="relative z-10">View Resume</span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-6 mb-12"
          >
            {[
              { icon: Github, href: "https://github.com/harshhpds", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/harsh-abhang-dev", label: "LinkedIn" },
              { icon: Mail, href: "mailto:harsh.abhang@example.com", label: "Email" }
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-slate-800/80 backdrop-blur-sm border border-purple-500/50 text-white hover:bg-slate-700 hover:border-cyan-500 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 1.2 + index * 0.1 }}
              >
                <social.icon className="h-6 w-6" />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <span className="text-gray-400 text-sm mb-2">Scroll to explore</span>
            <motion.button
              onClick={scrollToAbout}
              className="p-2 rounded-full border-2 border-purple-500/50 text-white hover:bg-purple-500/20 hover:border-cyan-500 transition-all duration-300"
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <ArrowDown className="h-5 w-5" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}