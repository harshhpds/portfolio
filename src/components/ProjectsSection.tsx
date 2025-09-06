import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Bot, TrendingUp, BarChart3, Zap, Star, Users, Target, Rocket, Code, Database, Brain, Activity, Award, ChevronRight } from 'lucide-react';

const projects = [
  {
    title: "InsightGenie: Automated Data Analyst Agent",
    description: "Advanced multi-agent pipeline leveraging CrewAI and Gemini API for automated data analysis. Features specialized agents for data loading, cleaning, EDA, visualization, and report generation with AI-driven insights.",
    icon: BarChart3,
    status: "In Progress",
    techStack: ["CrewAI", "Gemini API", "Python", "Pandas", "Data Visualization", "PDF Generation"],
    features: [
      "Multi-agent architecture with specialized roles",
      "AI-driven insight generation from EDA outputs", 
      "Automated PDF/HTML report generation",
      "Business intelligence and data storytelling"
    ],
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-50 to-pink-50",
    metrics: { agents: "5", accuracy: "92%", reports: "100+" },
    category: "AI/ML"
  },
  {
    title: "TPO Chatbot for VJTI",
    description: "Production-ready Telegram chatbot with Django backend and Gemini API integration. Provides 24/7 student support with vector-based semantic search, OTP authentication, and comprehensive placement assistance.",
    icon: Bot,
    status: "Deployed",
    techStack: ["Django", "Telegram API", "Gemini API", "Vector Search", "PostgreSQL", "Authentication"],
    features: [
      "Vector-based semantic search on placement policies",
      "OTP-based secure authentication system",
      "Company insights and placement statistics",
      "24/7 automated student support"
    ],
    gradient: "from-cyan-500 to-blue-500",
    bgGradient: "from-cyan-50 to-blue-50",
    demoLink: "https://t.me/vjti_tpo_bot",
    githubLink: "https://github.com/harshhpds/vjti-tpo-bot",
    metrics: { users: "500+", uptime: "99.9%", queries: "2k+" },
    category: "Web App"
  },
  {
    title: "TrendSense: Forex & Crypto Trading Bot",
    description: "Intelligent trading insights bot using advanced technical analysis strategies. Implements RSI, EMA, and MACD indicators with real-time alerts and automated trend detection achieving 70%+ accuracy.",
    icon: TrendingUp,
    status: "Live",
    techStack: ["Python", "Alpha Vantage API", "Telegram API", "Technical Analysis", "Real-time Data"],
    features: [
      "RSI, EMA, MACD trading strategies implementation",
      "Bullish/bearish crossover detection with 70%+ accuracy",
      "Real-time trading alerts via Telegram",
      "Automated strategy updates and market analysis"
    ],
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-50 to-emerald-50",
    githubLink: "https://github.com/harshhpds/trendsense-bot",
    metrics: { accuracy: "70%", alerts: "1k+", pairs: "50+" },
    category: "FinTech"
  }
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

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
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [0, -15, 0],
      rotate: [0, 10, -10, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-purple-900 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.7, 0.3],
            x: [0, 60, 0],
            y: [0, -40, 0]
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.8, 0.4],
            x: [0, -50, 0],
            y: [0, 50, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/8 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.6, 0.2],
            rotate: [0, 270, 360]
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6
          }}
        />
      </div>

      {/* Enhanced floating code elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-white/5 font-mono text-sm select-none pointer-events-none"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: Math.random() * 8 }}
          >
            {i % 4 === 0 ? '{ }' : i % 4 === 1 ? '</>' : i % 4 === 2 ? '[]' : '()'}
          </motion.div>
        ))}
        
        {/* Floating tech icons */}
        {[Code, Database, Brain, Activity, Rocket].map((Icon, i) => (
          <motion.div
            key={i}
            className="absolute text-white/10"
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 20}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 12 + i * 2,
              repeat: Infinity,
              delay: i * 2
            }}
          >
            <Icon className="h-8 w-8" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-white/20"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(255,255,255,0.1)" }}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 20 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            >
              <Rocket className="h-5 w-5 text-cyan-400" />
            </motion.div>
            <span className="text-cyan-400 font-semibold">Innovation Showcase</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.4 }}
          >
            Featured <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6 }}
          >
            Innovative AI solutions and production-ready applications that showcase my expertise in 
            machine learning, backend development, and system architecture.
          </motion.p>
          
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto rounded-full mt-6"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-1 gap-8 max-w-6xl mx-auto"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02, 
                y: -10,
                boxShadow: "0 25px 50px rgba(0,0,0,0.3)"
              }}
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
              className="group cursor-pointer"
            >
              <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-500 h-full overflow-hidden relative">
                {/* Animated border gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-lg`}
                  animate={hoveredProject === index ? { opacity: 0.2 } : { opacity: 0 }}
                />
                
                <CardHeader className="pb-4 relative z-10">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      {/* Enhanced project icon */}
                      <motion.div 
                        className={`p-4 rounded-xl bg-gradient-to-r ${project.gradient} shadow-lg group-hover:shadow-2xl transition-all duration-300 relative overflow-hidden`}
                        whileHover={{ rotate: 5, scale: 1.1 }}
                      >
                        <project.icon className="h-8 w-8 text-white relative z-10" />
                        <motion.div
                          className="absolute inset-0 bg-white/20"
                          animate={hoveredProject === index ? { 
                            scale: [1, 1.5, 1],
                            opacity: [0.2, 0.4, 0.2]
                          } : {}}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      </motion.div>
                      
                      <div>
                        <div className="flex items-center space-x-3 mb-2">
                          <CardTitle className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                            {project.title}
                          </CardTitle>
                          <Badge 
                            variant="secondary"
                            className="bg-purple-500/20 text-purple-300 border-purple-500/30 text-xs"
                          >
                            {project.category}
                          </Badge>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                          <Badge 
                            variant={project.status === 'Live' || project.status === 'Deployed' ? 'default' : 'secondary'}
                            className={`${
                              project.status === 'Live' || project.status === 'Deployed' 
                                ? 'bg-green-500 hover:bg-green-600' 
                                : 'bg-yellow-500 hover:bg-yellow-600'
                            } text-white shadow-lg`}
                          >
                            <Zap className="h-3 w-3 mr-1" />
                            {project.status}
                          </Badge>
                          
                          {/* Project metrics */}
                          <div className="flex space-x-2">
                            {Object.entries(project.metrics).map(([key, value]) => (
                              <motion.div
                                key={key}
                                className="bg-white/10 px-2 py-1 rounded-full backdrop-blur-sm"
                                whileHover={{ scale: 1.05 }}
                              >
                                <span className="text-xs text-gray-300">
                                  {value} <span className="text-gray-400">{key}</span>
                                </span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Action buttons with better visibility */}
                    <div className="flex space-x-2">
                      {project.githubLink && (
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                          <Button
                            size="sm"
                            className="bg-slate-800 hover:bg-slate-700 border-2 border-purple-500 hover:border-cyan-500 text-white transition-all duration-300 shadow-lg hover:shadow-xl"
                            onClick={() => window.open(project.githubLink, '_blank')}
                          >
                            <Github className="h-4 w-4" />
                          </Button>
                        </motion.div>
                      )}
                      {project.demoLink && (
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                          <Button
                            size="sm"
                            className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 shadow-lg hover:shadow-xl transition-all duration-300"
                            onClick={() => window.open(project.demoLink, '_blank')}
                          >
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6 relative z-10">
                  <motion.p 
                    className="text-gray-300 leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    {project.description}
                  </motion.p>

                  {/* Enhanced Features */}
                  <div>
                    <div className="flex items-center space-x-2 mb-4">
                      <Target className="h-5 w-5 text-cyan-400" />
                      <h4 className="text-lg font-semibold text-white">Key Features</h4>
                    </div>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {project.features.map((feature, idx) => (
                        <motion.li 
                          key={idx} 
                          className="flex items-start space-x-3 text-gray-300 group/feature"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ delay: 0.8 + index * 0.1 + idx * 0.05 }}
                          whileHover={{ x: 5 }}
                        >
                          <motion.div 
                            className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"
                            whileHover={{ scale: 1.5, boxShadow: "0 0 10px rgba(34, 211, 238, 0.5)" }}
                          />
                          <span className="text-sm group-hover/feature:text-white transition-colors">
                            {feature}
                          </span>
                          <ChevronRight className="h-3 w-3 text-cyan-400 opacity-0 group-hover/feature:opacity-100 transition-opacity" />
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Enhanced Tech Stack */}
                  <div>
                    <div className="flex items-center space-x-2 mb-4">
                      <Code className="h-5 w-5 text-purple-400" />
                      <h4 className="text-lg font-semibold text-white">Tech Stack</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0, rotate: -180 }}
                          animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0, rotate: -180 }}
                          transition={{ 
                            delay: 1 + index * 0.1 + idx * 0.05,
                            type: "spring",
                            stiffness: 200,
                            damping: 10
                          }}
                          whileHover={{ 
                            scale: 1.1, 
                            rotate: 5,
                            boxShadow: "0 5px 15px rgba(255,255,255,0.1)"
                          }}
                        >
                          <Badge 
                            variant="secondary" 
                            className="bg-white/10 text-gray-300 hover:bg-white/20 transition-all duration-300 cursor-default px-3 py-1 border border-white/10 hover:border-white/30"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16"
        >
          <motion.p 
            className="text-gray-300 mb-6 text-lg"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1.4 }}
          >
            Interested in collaborating on innovative projects or discussing technical solutions?
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Users className="mr-2 h-5 w-5" />
                Let's Collaborate
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-slate-800 hover:bg-slate-700 border-2 border-purple-500 hover:border-cyan-500 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                onClick={() => window.open('https://github.com/harshhpds', '_blank')}
              >
                <Github className="mr-2 h-5 w-5" />
                View All Projects
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}