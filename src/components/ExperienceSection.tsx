import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Calendar, MapPin, TrendingUp } from 'lucide-react';

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
    gradient: "from-purple-500 to-pink-500"
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
    gradient: "from-cyan-500 to-blue-500"
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
    gradient: "from-green-500 to-emerald-500"
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
    gradient: "from-orange-500 to-red-500"
  }
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Professional <span className="bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A journey through diverse roles in software development, machine learning, and system optimization, delivering measurable impact across multiple organizations.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-cyan-600 mx-auto rounded-full mt-6"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 to-cyan-400"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.8, delay: 0.2 * index }}
                className="relative mb-12 last:mb-0"
              >
                {/* Timeline dot */}
                <div className={`absolute left-6 w-4 h-4 bg-gradient-to-r ${exp.gradient} rounded-full border-4 border-white shadow-lg z-10`}></div>
                
                {/* Content card */}
                <div className="ml-20">
                  <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group hover:transform hover:scale-[1.02]">
                    <CardContent className="p-8">
                      {/* Header */}
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                            {exp.position}
                          </h3>
                          <div className="flex items-center space-x-2 mt-2 text-gray-600">
                            <Building className="h-4 w-4" />
                            <span className="font-semibold">{exp.company}</span>
                          </div>
                        </div>
                        <div className="flex flex-col items-start md:items-end space-y-2 mt-4 md:mt-0">
                          <Badge 
                            variant={exp.type === 'Current' ? 'default' : 'secondary'}
                            className={`${
                              exp.type === 'Current' 
                                ? 'bg-green-500 hover:bg-green-600 text-white' 
                                : 'bg-gray-100 text-gray-700'
                            }`}
                          >
                            <TrendingUp className="h-3 w-3 mr-1" />
                            {exp.type}
                          </Badge>
                          <div className="flex items-center space-x-1 text-sm text-gray-500">
                            <Calendar className="h-4 w-4" />
                            <span>{exp.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1 text-sm text-gray-500">
                            <MapPin className="h-4 w-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Achievements</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start space-x-3">
                              <div className={`w-2 h-2 bg-gradient-to-r ${exp.gradient} rounded-full mt-2 flex-shrink-0`}></div>
                              <span className="text-gray-700 leading-relaxed">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Skills */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, idx) => (
                            <Badge 
                              key={idx}
                              variant="outline" 
                              className="border-purple-200 text-purple-700 hover:bg-purple-50 transition-colors"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}