import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MessageCircle } from 'lucide-react';

const socialLinks = [
  {
    icon: Github,
    href: 'https://github.com/harshhpds',
    label: 'GitHub',
    color: 'hover:text-gray-900 hover:bg-gray-100'
  },
  {
    icon: Linkedin,
    href: 'https://linkedin.com/in/harsh-abhang',
    label: 'LinkedIn',
    color: 'hover:text-blue-600 hover:bg-blue-50'
  },
  {
    icon: Mail,
    href: 'mailto:harshabhang@gmail.com',
    label: 'Email',
    color: 'hover:text-red-600 hover:bg-red-50'
  },
  {
    icon: MessageCircle,
    href: 'https://t.me/harsh_abhang',
    label: 'Telegram',
    color: 'hover:text-cyan-600 hover:bg-cyan-50'
  }
];

export default function FloatingSocials() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="fixed left-6 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block"
    >
      <div className="flex flex-col space-y-4">
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-full bg-white/90 backdrop-blur-sm shadow-lg border border-gray-200 text-gray-600 ${social.color} transition-all duration-300 group`}
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 1.2 + index * 0.1 }}
          >
            <social.icon className="h-5 w-5" />
            <span className="sr-only">{social.label}</span>
          </motion.a>
        ))}
        
        {/* Vertical line */}
        <div className="w-px h-20 bg-gradient-to-b from-gray-300 to-transparent mx-auto"></div>
      </div>
    </motion.div>
  );
}