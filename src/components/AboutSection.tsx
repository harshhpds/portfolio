import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Brain, Cloud, GitBranch, BarChart3, GraduationCap, Award, Calendar } from 'lucide-react';

const skills = [
  { name: 'Python', level: 95, icon: Code, color: 'from-yellow-400 to-yellow-600' },
  { name: 'JavaScript', level: 85, icon: Code, color: 'from-yellow-500 to-orange-500' },
  { name: 'Django/Flask', level: 90, icon: Code, color: 'from-green-400 to-green-600' },
  { name: 'PostgreSQL', level: 88, icon: Database, color: 'from-blue-400 to-blue-600' },
  { name: 'Machine Learning', level: 92, icon: Brain, color: 'from-purple-400 to-purple-600' },
  { name: 'Cloud (GCP/AWS)', level: 75, icon: Cloud, color: 'from-cyan-400 to-cyan-600' },
  { name: 'Git/GitHub', level: 90, icon: GitBranch, color: 'from-gray-400 to-gray-600' },
  { name: 'Data Visualization', level: 85, icon: BarChart3, color: 'from-pink-400 to-pink-600' }
];

const techStack = [
  'Python', 'JavaScript', 'SQL', 'Java', 'HTML', 'CSS',
  'Django', 'Flask', 'PostgreSQL', 'MongoDB', 'MySQL',
  'Scikit-Learn', 'TensorFlow', 'Transformers', 'NLP',
  'Google Cloud', 'AWS', 'GitHub', 'Power BI', 'Tableau'
];

const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Veermata Jijabai Technological Institute (VJTI)',
    location: 'Mumbai, India',
    duration: '2024 - Present',
    status: 'Current',
    logo: '/portfolio/logo/vjtilogo.jpg', // VJTI logo placeholder
    highlights: [
      'Specializing in AI & Machine Learning',
      'Advanced coursework in Data Structures & Algorithms',
      'Research focus on LLM integration and Multi-Agent Systems'
    ],
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University College',
    location: 'Mumbai, India',
    duration: '2021 - 2024',
    status: 'Completed',
    cgpa: '9.3',
    logo: '/portfolio/logo/pillailogo.jpg', // College logo placeholder
    highlights: [
      'Graduated with First Class with Distinction',
      'Strong foundation in Programming & Software Engineering',
      'Active participation in coding competitions and hackathons'
    ],
    gradient: 'from-cyan-500 to-blue-500'
  }
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const skillBarVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.3
      }
    })
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Enhanced background decoration */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-0 left-0 w-72 h-72 bg-purple-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-200/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-white/30"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.2 }}
          >
            <GraduationCap className="h-5 w-5 text-purple-600" />
            <span className="text-purple-600 font-semibold">About Me</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-cyan-600 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Bio Section */}
          <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Passionate AI Developer & Data Scientist
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
                  <p>
                    I'm a dedicated MCA student at <span className="font-semibold text-purple-600">VJTI, Mumbai</span>, 
                    specializing in cutting-edge AI technologies including <span className="font-semibold text-cyan-600">LLM integration</span>, 
                    <span className="font-semibold text-purple-600"> RAG systems</span>, and 
                    <span className="font-semibold text-pink-600"> Multi-Agent architectures</span>.
                  </p>
                  <p>
                    With hands-on experience in developing production-ready applications, I've successfully built 
                    <span className="font-semibold text-green-600"> chatbots</span>, 
                    <span className="font-semibold text-blue-600"> CRM systems</span>, and 
                    <span className="font-semibold text-orange-600"> ML-powered solutions</span> that deliver measurable business impact.
                  </p>
                  <p>
                    My expertise spans from <span className="font-semibold text-purple-600">backend development</span> with 
                    Django and PostgreSQL to <span className="font-semibold text-cyan-600">machine learning</span> with 
                    TensorFlow and scikit-learn, enabling me to build end-to-end AI solutions.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Education Section */}
          <motion.div variants={itemVariants}>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Educational <span className="bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">Journey</span>
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-cyan-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="group"
                >
                  <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 h-full">
                    <CardContent className="p-8">
                      {/* Institution Logo and Header */}
                      <div className="flex items-start space-x-4 mb-6">
                        <motion.div 
                          className={`p-3 rounded-xl bg-gradient-to-r ${edu.gradient} shadow-lg flex-shrink-0`}
                          whileHover={{ rotate: 5, scale: 1.1 }}
                        >
                          <img
                            src={edu.logo}
                            alt={`${edu.institution} logo`}
                            className="w-12 h-12 object-contain"
                          />
                        </motion.div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <Badge 
                              variant={edu.status === 'Current' ? 'default' : 'secondary'}
                              className={`${
                                edu.status === 'Current' 
                                  ? 'bg-green-500 hover:bg-green-600 text-white' 
                                  : 'bg-blue-500 hover:bg-blue-600 text-white'
                              }`}
                            >
                              <Award className="h-3 w-3 mr-1" />
                              {edu.status}
                            </Badge>
                            {edu.cgpa && (
                              <span className="text-sm font-bold text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                                CGPA: {edu.cgpa}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Degree Information */}
                      <div className="space-y-4">
                        <h4 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                          {edu.degree}
                        </h4>
                        
                        <div className="space-y-2 text-gray-600">
                          <div className="flex items-center space-x-2">
                            <GraduationCap className="h-4 w-4 text-purple-500" />
                            <span className="font-semibold">{edu.institution}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Calendar className="h-4 w-4 text-cyan-500" />
                            <span>{edu.duration}</span>
                          </div>
                        </div>

                        {/* Highlights */}
                        <div className="space-y-2">
                          <h5 className="font-semibold text-gray-900">Key Highlights:</h5>
                          <ul className="space-y-1">
                            {edu.highlights.map((highlight, idx) => (
                              <li key={idx} className="flex items-start space-x-2 text-sm text-gray-700">
                                <div className={`w-1.5 h-1.5 bg-gradient-to-r ${edu.gradient} rounded-full mt-2 flex-shrink-0`}></div>
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div variants={itemVariants}>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Technical <span className="bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">Skills</span>
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-cyan-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Animated skill bars */}
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 10 }}
                          className="p-2 rounded-lg bg-white/60 backdrop-blur-sm"
                        >
                          <skill.icon className="h-5 w-5 text-gray-600 group-hover:text-purple-600 transition-colors" />
                        </motion.div>
                        <span className="font-semibold text-gray-800">{skill.name}</span>
                      </div>
                      <motion.span 
                        className="text-sm font-medium text-gray-600 bg-white/60 px-3 py-1 rounded-full"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden shadow-inner">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative overflow-hidden`}
                        variants={skillBarVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        custom={skill.level}
                      >
                        <motion.div
                          className="absolute inset-0 bg-white/30"
                          animate={{
                            x: ['-100%', '100%'],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1 + index * 0.2
                          }}
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Tech stack badges */}
              <motion.div variants={itemVariants}>
                <h4 className="text-xl font-semibold text-gray-900 mb-6 text-center">Technologies & Tools</h4>
                <div className="flex flex-wrap gap-3 justify-center">
                  {techStack.map((tech, index) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, scale: 0, rotate: -180 }}
                      animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0, rotate: -180 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: 0.8 + 0.05 * index,
                        type: "spring",
                        stiffness: 200,
                        damping: 10
                      }}
                      whileHover={{ 
                        scale: 1.1, 
                        rotate: 5,
                        boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
                      }}
                    >
                      <Badge 
                        variant="secondary" 
                        className="bg-gradient-to-r from-purple-100 to-cyan-100 text-gray-800 hover:from-purple-200 hover:to-cyan-200 transition-all duration-300 cursor-default px-4 py-2 text-sm font-medium border border-white/50"
                      >
                        {tech}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}