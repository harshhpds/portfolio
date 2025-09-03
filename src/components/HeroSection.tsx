import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Phone, FileText, MessageCircle, Code, Brain, Zap } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

const roles = [
  "AI Developer",
  "Machine Learning Engineer", 
  "Backend Developer",
  "Data Scientist",
  "Multi-Agent Systems Expert"
];

/*const stats = [
  { label: "Projects Completed", value: 50, suffix: "+" },
  { label: "Years Experience", value: 3, suffix: "+" },
  { label: "Technologies Mastered", value: 25, suffix: "+" },
  { label: "Happy Clients", value: 30, suffix: "+" }
];*/

const techIcons = [
  { icon: Code, label: "Full Stack Development" },
  { icon: Brain, label: "AI & Machine Learning" },
  { icon: Zap, label: "Performance Optimization" }
];

export default function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRoleText = roles[currentRole];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRoleText.length) {
          setDisplayText(currentRoleText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  const socialLinks = [
    { icon: Github, href: 'https://github.com/harshhpds', label: 'GitHub', color: 'hover:text-gray-300' },
    { icon: Linkedin, href: 'https://linkedin.com/in/harsh-abhang', label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: Mail, href: 'mailto:harshabhang@gmail.com', label: 'Email', color: 'hover:text-red-400' },
    { icon: Phone, href: 'tel:+919321382858', label: 'Phone', color: 'hover:text-green-400' }
  ];

  const handleResumeDownload = () => {
    window.open('https://drive.google.com/drive/folders/1xEal5LmXBPZEEbA5ObB3oSCsyIu-Su3g?usp=sharing', '_blank');
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 border border-purple-400/20 rotate-45"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              rotate: [45, 405, 45],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Enhanced name with glow effect */}
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6 relative"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent relative">
              Harsh Mohan Abhang
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-pink-400/20 blur-xl -z-10"
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </span>
          </motion.h1>

          {/* Enhanced typing effect with cursor */}
          <motion.div 
            className="h-16 md:h-20 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-2xl md:text-4xl font-semibold text-gray-300">
              <span className="text-cyan-400">{displayText}</span>
              <motion.span 
                className="text-purple-400 ml-1"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                |
              </motion.span>
            </h2>
          </motion.div>

          {/* Tech icons */}
          <motion.div
            className="flex justify-center space-x-8 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            {techIcons.map((tech, index) => (
              <motion.div
                key={tech.label}
                className="flex flex-col items-center group cursor-pointer"
                whileHover={{ scale: 1.1, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <div className="p-3 rounded-full bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm border border-white/10 group-hover:border-white/30 transition-all duration-300">
                  <tech.icon className="h-6 w-6 text-cyan-400 group-hover:text-purple-400 transition-colors" />
                </div>
                <span className="text-xs text-gray-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {tech.label}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced tagline */}
          <motion.p 
            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            MCA student at VJTI specializing in <span className="text-purple-400 font-semibold">AI-driven solutions</span>, 
            <span className="text-cyan-400 font-semibold"> LLM integration</span>, and 
            <span className="text-pink-400 font-semibold"> scalable backend systems</span>
          </motion.p>

          {/* Stats section 
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
              >
                <div className="text-cyan-400 mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

           Enhanced action buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
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
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 relative overflow-hidden group"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <motion.div
                  className="absolute inset-0 bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                />
                <MessageCircle className="mr-2 h-5 w-5 relative z-10" />
                <span className="relative z-10">Contact Me</span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Enhanced social links */}
          <motion.div 
            className="flex justify-center space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 hover:shadow-lg group ${social.color}`}
                whileHover={{ y: -5, rotate: 5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 + index * 0.1 }}
              >
                <social.icon className="h-6 w-6 transition-colors duration-300" />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {social.label}
                </span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Enhanced scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <motion.div 
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center cursor-pointer hover:border-white/50 transition-colors"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.1 }}
          >
            <motion.div 
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}