import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Bot, TrendingUp, BarChart3, Zap } from 'lucide-react';

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
    bgGradient: "from-purple-50 to-pink-50"
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
    githubLink: "https://github.com/harshhpds/vjti-tpo-bot"
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
    githubLink: "https://github.com/harshhpds/trendsense-bot"
  }
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Innovative AI solutions and production-ready applications that showcase my expertise in machine learning, backend development, and system architecture.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto rounded-full mt-6"></div>
        </motion.div>

        <div className="grid lg:grid-cols-1 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.2 * index }}
            >
              <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 group hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/10">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${project.gradient} shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                        <project.icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                          {project.title}
                        </CardTitle>
                        <div className="flex items-center space-x-2 mt-2">
                          <Badge 
                            variant={project.status === 'Live' || project.status === 'Deployed' ? 'default' : 'secondary'}
                            className={`${
                              project.status === 'Live' || project.status === 'Deployed' 
                                ? 'bg-green-500 hover:bg-green-600' 
                                : 'bg-yellow-500 hover:bg-yellow-600'
                            } text-white`}
                          >
                            <Zap className="h-3 w-3 mr-1" />
                            {project.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      {project.githubLink && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-white/20 text-white hover:bg-white/10 hover:border-white/40"
                          onClick={() => window.open(project.githubLink, '_blank')}
                        >
                          <Github className="h-4 w-4" />
                        </Button>
                      )}
                      {project.demoLink && (
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600"
                          onClick={() => window.open(project.demoLink, '_blank')}
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-gray-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-gray-300">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, idx) => (
                        <Badge 
                          key={idx}
                          variant="secondary" 
                          className="bg-white/10 text-gray-300 hover:bg-white/20 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}