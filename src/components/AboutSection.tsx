import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Brain, Cloud, GitBranch, BarChart3 } from 'lucide-react';

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

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-cyan-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Passionate AI Developer & Data Scientist
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
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

                {/* Education highlight */}
                <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-cyan-50 rounded-lg border-l-4 border-purple-500">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-900">Current Education</h4>
                      <p className="text-gray-700">MCA at VJTI, Mumbai (2024 - Present)</p>
                    </div>
                    <div className="text-right">
                      <h4 className="font-semibold text-gray-900">Previous</h4>
                      <p className="text-gray-700">B.Sc Computer Science</p>
                      <p className="text-sm text-purple-600 font-semibold">CGPA: 9.3</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Technical Skills</h3>
            
            {/* Animated skill bars */}
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <skill.icon className="h-5 w-5 text-gray-600 group-hover:text-purple-600 transition-colors" />
                      <span className="font-semibold text-gray-800">{skill.name}</span>
                    </div>
                    <span className="text-sm font-medium text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative overflow-hidden`}
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: 0.2 + 0.1 * index, ease: "easeOut" }}
                    >
                      <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Tech stack badges */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-8"
            >
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Technologies & Tools</h4>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ duration: 0.3, delay: 0.9 + 0.05 * index }}
                  >
                    <Badge 
                      variant="secondary" 
                      className="bg-gradient-to-r from-purple-100 to-cyan-100 text-gray-800 hover:from-purple-200 hover:to-cyan-200 transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}