import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Calendar, MapPin, TrendingUp, Code, Database, Brain, Zap, Target, Users, Award, Rocket, Briefcase } from 'lucide-react';

const experiences = [
  {
    position: "Software Developer Intern",
    company: "Preparo Analytics",
    duration: "Dec 2024 – Present",
    location: "Mumbai, India",
    type: "Current",
    achievements: [
      "Spearheaded CRM system development in Django for lead and application management",
      "Automated workflows, CP tagging, and dashboards, boosting counselor efficiency by 25%",
      "Integrated lead scoring, campaign tracking, and notifications to improve conversion rates"
    ],
    skills: ["Django", "CRM Development", "Workflow Automation", "Lead Management", "Dashboard Development"],
    gradient: "from-purple-500 to-pink-500",
    icon: Rocket,
    companyLogo: "/portfolio/logo/preparo-analytics-logo.png",
    companyWebsite: 'https://thepreparo.com/',
    metrics: { efficiency: "25%", leads: "10k+", automation: "80%" }
  },
  {
    position: "Jr. Software Developer",
    company: "Han Pan Data Safe Pvt. Ltd",
    duration: "Jun 2024 – Nov 2024",
    location: "Mumbai, India",
    type: "Full-time",
    achievements: [
      "Designed PostgreSQL schemas and Django models for high-volume ingestion (10k+ records/day)",
      "Optimized queries reducing ingestion latency by 30%",
      "Delivered UI/UX improvements leading to higher client adoption rates"
    ],
    skills: ["PostgreSQL", "Django", "Database Optimization", "High-volume Data Processing", "UI/UX"],
    gradient: "from-cyan-500 to-blue-500",
    icon: Database,
    companyLogo: "/portfolio/logo/hanpanlogo.png",
    companyWebsite: 'https://www.hanpan.in/',
    metrics: { latency: "30%", records: "10k+", adoption: "40%" }
  },
  {
    position: "Software Developer Intern",
    company: "Han Pan Tech LLP",
    duration: "Jul 2023 – May 2024",
    location: "Mumbai, India",
    type: "Internship",
    achievements: [
      "Developed intelligent document processing and web applications using Django",
      "Researched OCR for scanned text extraction and implemented REST APIs for operations",
      "Increased automation test coverage by 40% across internal tools"
    ],
    skills: ["Django", "OCR", "Document Processing", "REST APIs", "Test Automation"],
    gradient: "from-green-500 to-emerald-500",
    icon: Code,
    companyLogo: "/portfolio/logo/hanpanlogo.png",
    companyWebsite: 'https://www.hanpan.in/',
    metrics: { accuracy: "95%", coverage: "40%", apis: "15+" }
  },
  {
    position: "Machine Learning Intern",
    company: "TEACHNOOK",
    duration: "Mar 2023 – Apr 2023",
    location: "Remote",
    type: "Internship",
    achievements: [
      "Built ML model (Random Forest, Logistic Regression) to predict diabetes with 85%+ accuracy",
      "Preprocessed/visualized data using Pandas, Seaborn, Matplotlib",
      "Documented insights in Jupyter notebooks for stakeholder presentations"
    ],
    skills: ["Machine Learning", "Random Forest", "Logistic Regression", "Data Visualization", "Jupyter"],
    gradient: "from-orange-500 to-red-500",
    icon: Brain,
    companyLogo: "/portfolio/logo/technooklogo.png",
    companyWebsite: 'https://upskill.teachnook.com/',
    metrics: { accuracy: "85%", models: "3", insights: "50+" }
  }
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
    hidden: { opacity: 0, x: -50, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
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
      y: [0, -10, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Enhanced background decoration */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.4, 0.7, 0.4],
            x: [0, -25, 0],
            y: [0, 15, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-pink-200/15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: Math.random() * 5 }}
          >
            {i % 3 === 0 ? (
              <div className="w-3 h-3 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full" />
            ) : i % 3 === 1 ? (
              <div className="w-2 h-8 bg-gradient-to-b from-cyan-400/20 to-blue-400/20 rounded-full rotate-45" />
            ) : (
              <div className="w-4 h-4 bg-gradient-to-r from-green-400/25 to-emerald-400/25 rotate-45" />
            )}
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
            className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-white/30"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 20 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Briefcase className="h-5 w-5 text-purple-600" />
            </motion.div>
            <span className="text-purple-600 font-semibold">Professional Journey</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.4 }}
          >
            Professional <span className="bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">Experience</span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6 }}
          >
            A journey through diverse roles in software development, machine learning, and system optimization,
            delivering measurable impact across multiple organizations.
          </motion.p>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-purple-600 to-cyan-600 mx-auto rounded-full mt-6"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          />
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Enhanced Timeline */}
          <motion.div
            className="relative"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Animated timeline line */}
            <motion.div
              className="absolute left-8 top-0 w-1 bg-gradient-to-b from-purple-400 via-cyan-400 to-green-400 rounded-full"
              initial={{ height: 0 }}
              animate={isInView ? { height: "100%" } : { height: 0 }}
              transition={{ duration: 2, delay: 0.5 }}
            />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: 10 }}
                className="relative mb-16 last:mb-0 group"
              >
                {/* Enhanced Timeline dot with company logo */}
                <motion.div
                  className="absolute left-4 flex items-center justify-center"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                  transition={{ delay: 0.8 + index * 0.2, type: "spring", stiffness: 200 }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${exp.gradient} rounded-full p-1 shadow-xl group-hover:shadow-2xl transition-all duration-300`}>
                    <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                      <img
                        src={exp.companyLogo}
                        alt={`${exp.company} logo`}
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                  </div>
                  <motion.div
                    className={`absolute -inset-2 bg-gradient-to-r ${exp.gradient} rounded-full opacity-20 blur-md`}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                  />
                </motion.div>

                {/* Enhanced Content card */}
                <div className="ml-28">
                  <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:transform group-hover:scale-[1.02] overflow-hidden">
                    <div className={`h-1 bg-gradient-to-r ${exp.gradient}`} />
                    <CardContent className="p-8">
                      {/* Enhanced Header with metrics */}
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-3">
                            <motion.div
                              className={`p-2 rounded-lg bg-gradient-to-r ${exp.gradient} shadow-lg`}
                              whileHover={{ rotate: 10, scale: 1.1 }}
                            >
                              <exp.icon className="h-5 w-5 text-white" />
                            </motion.div>
                            <h3 className="text-2xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                              {exp.position}
                            </h3>
                          </div>

                          <div className="space-y-2 text-gray-600">
                            <div className="flex items-center space-x-2">
                              <Building className="h-4 w-4 text-purple-500" />
                              <a
                                href={exp.companyWebsite}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-semibold text-purple-600 hover:underline"
                              >
                                {exp.company}
                              </a>
                            </div>

                            <div className="flex items-center space-x-4">
                              <div className="flex items-center space-x-1">
                                <Calendar className="h-4 w-4 text-cyan-500" />
                                <span className="text-sm">{exp.duration}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <MapPin className="h-4 w-4 text-green-500" />
                                <span className="text-sm">{exp.location}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col items-start lg:items-end space-y-3 mt-4 lg:mt-0">
                          <Badge
                            variant={exp.type === 'Current' ? 'default' : 'secondary'}
                            className={`${exp.type === 'Current'
                                ? 'bg-green-500 hover:bg-green-600 text-white shadow-lg'
                                : 'bg-gray-100 text-gray-700'
                              }`}
                          >
                            <TrendingUp className="h-3 w-3 mr-1" />
                            {exp.type}
                          </Badge>

                          {/* Key Metrics */}
                          <div className="flex flex-wrap gap-2">
                            {Object.entries(exp.metrics).map(([key, value]) => (
                              <motion.div
                                key={key}
                                className="bg-gradient-to-r from-purple-100 to-cyan-100 px-3 py-1 rounded-full"
                                whileHover={{ scale: 1.05 }}
                              >
                                <span className="text-xs font-semibold text-purple-700">
                                  {value} {key}
                                </span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Enhanced Achievements with icons */}
                      <div className="mb-6">
                        <div className="flex items-center space-x-2 mb-4">
                          <Target className="h-5 w-5 text-purple-600" />
                          <h4 className="text-lg font-semibold text-gray-900">Key Achievements</h4>
                        </div>
                        <ul className="space-y-3">
                          {exp.achievements.map((achievement, idx) => (
                            <motion.li
                              key={idx}
                              className="flex items-start space-x-3 group/item"
                              initial={{ opacity: 0, x: -20 }}
                              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                              transition={{ delay: 1 + index * 0.2 + idx * 0.1 }}
                            >
                              <motion.div
                                className={`w-2 h-2 bg-gradient-to-r ${exp.gradient} rounded-full mt-2 flex-shrink-0`}
                                whileHover={{ scale: 1.5 }}
                              />
                              <span className="text-gray-700 leading-relaxed group-hover/item:text-gray-900 transition-colors">
                                {achievement}
                              </span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Enhanced Skills with animated badges */}
                      <div>
                        <div className="flex items-center space-x-2 mb-4">
                          <Zap className="h-5 w-5 text-cyan-600" />
                          <h4 className="text-lg font-semibold text-gray-900">Technologies Used</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, scale: 0, rotate: -180 }}
                              animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0, rotate: -180 }}
                              transition={{
                                delay: 1.2 + index * 0.2 + idx * 0.05,
                                type: "spring",
                                stiffness: 200,
                                damping: 10
                              }}
                              whileHover={{
                                scale: 1.1,
                                rotate: 5,
                                boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
                              }}
                            >
                              <Badge
                                variant="outline"
                                className="border-purple-200 text-purple-700 hover:bg-purple-50 transition-all duration-300 cursor-default px-3 py-1"
                              >
                                {skill}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-center mt-16"
        >
          <motion.p
            className="text-gray-600 mb-6 text-lg"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1.7 }}
          >
            Interested in my professional journey and technical expertise?
          </motion.p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 mx-auto"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Code className="mr-2 h-5 w-5" />
              View My Projects
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}