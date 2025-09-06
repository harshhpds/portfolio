import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Award, Calendar, Building, ExternalLink, Eye, Star, Loader2 } from 'lucide-react';

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  skills: string[];
  image: string;
  credentialUrl?: string;
  featured: boolean;
}

const certificates: Certificate[] = [
  {
    id: '1',
    title: 'BCG - Data Science Job Simulation',
    issuer: 'Forage',
    date: 'August 2025',
    description: 'Comprehensive certification covering cloud architecture, security, and scalability best practices. Demonstrated expertise in designing distributed systems on AWS platform.',
    skills: ['AWS', 'Cloud Architecture', 'Security', 'Scalability'],
    image: '/portfolio/certificates/BCG - Data Science Job Simulation.jpg',
    credentialUrl: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/SKZxezskWgmFjRvj9/Tcz8gTtprzAS4xSoK_SKZxezskWgmFjRvj9_473gif6H5sYNp8BEq_1755446348151_completion_certificate.pdf',
    featured: true
  },
  {
    id: '2',
    title: 'Google Cloud Professional Data Engineer',
    issuer: 'Google Cloud',
    date: 'January 2024',
    description: 'Advanced certification in data engineering, machine learning pipelines, and big data solutions on Google Cloud Platform.',
    skills: ['GCP', 'Data Engineering', 'BigQuery', 'Machine Learning'],
    image: '/api/placeholder/400/300',
    credentialUrl: 'https://cloud.google.com/certification/',
    featured: true
  },
  {
    id: '3',
    title: 'Machine Learning Specialization',
    issuer: 'Stanford University (Coursera)',
    date: 'November 2023',
    description: 'Comprehensive specialization covering supervised learning, unsupervised learning, and neural networks with hands-on projects.',
    skills: ['Machine Learning', 'Python', 'TensorFlow', 'Neural Networks'],
    image: '/api/placeholder/400/300',
    credentialUrl: 'https://coursera.org/verify/specialization/',
    featured: false
  },
  {
    id: '4',
    title: 'Full Stack Web Development',
    issuer: 'Meta (Facebook)',
    date: 'September 2023',
    description: 'Professional certificate covering modern web development with React, Node.js, and database management.',
    skills: ['React', 'Node.js', 'JavaScript', 'Database Design'],
    image: '/api/placeholder/400/300',
    credentialUrl: 'https://coursera.org/verify/professional-cert/',
    featured: false
  },
  {
    id: '5',
    title: 'Python for Data Science',
    issuer: 'IBM',
    date: 'August 2023',
    description: 'Specialized certification in Python programming for data analysis, visualization, and machine learning applications.',
    skills: ['Python', 'Pandas', 'NumPy', 'Data Visualization'],
    image: '/api/placeholder/400/300',
    credentialUrl: 'https://ibm.com/training/certification/',
    featured: false
  },
  {
    id: '6',
    title: 'Agile Project Management',
    issuer: 'Project Management Institute',
    date: 'June 2023',
    description: 'Professional certification in Agile methodologies, Scrum framework, and project management best practices.',
    skills: ['Agile', 'Scrum', 'Project Management', 'Leadership'],
    image: '/api/placeholder/400/300',
    credentialUrl: 'https://pmi.org/certifications/',
    featured: false
  },
  {
    id: '7',
    title: 'Agile Project Management',
    issuer: 'Project Management Institute',
    date: 'June 2023',
    description: 'Professional certification in Agile methodologies, Scrum framework, and project management best practices.',
    skills: ['Agile', 'Scrum', 'Project Management', 'Leadership'],
    image: '/api/placeholder/400/300',
    credentialUrl: 'https://pmi.org/certifications/',
    featured: false
  }
];

export default function CertificatesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const [loadingStates, setLoadingStates] = useState<{[key: string]: boolean}>({});

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const handleImageLoad = (certId: string) => {
    setLoadingStates(prev => ({ ...prev, [certId]: false }));
  };

  const handleImageLoadStart = (certId: string) => {
    setLoadingStates(prev => ({ ...prev, [certId]: true }));
  };

  return (
    <section id="certificates" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Enhanced background decoration */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
            x: [0, -40, 0],
            y: [0, 40, 0]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6
          }}
        />
      </div>

      {/* Enhanced floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-purple-400/20 to-cyan-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
              rotate: [0, 360, 0]
            }}
            transition={{
              duration: 8 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: "easeInOut"
            }}
          />
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
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Award className="h-5 w-5 text-yellow-400" />
            </motion.div>
            <span className="text-yellow-400 font-semibold">Professional Certifications</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.4 }}
          >
            Certificates & 
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent"> Achievements</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6 }}
          >
            Showcasing my commitment to continuous learning and professional development through 
            industry-recognized certifications and specialized training programs.
          </motion.p>
          
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto rounded-full mt-6"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {certificates.map((certificate) => (
            <motion.div 
              key={certificate.id} 
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                boxShadow: "0 25px 50px rgba(0,0,0,0.3)"
              }}
              className="group cursor-pointer"
            >
              <Card className="bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-500 h-full overflow-hidden">
                <CardContent className="p-0">
                  {/* Certificate Image */}
                  <div className="relative overflow-hidden">
                    {loadingStates[certificate.id] && (
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-800/50 z-10">
                        <Loader2 className="h-8 w-8 animate-spin text-white" />
                      </div>
                    )}
                    <motion.img
                      src={certificate.image}
                      alt={certificate.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      onLoadStart={() => handleImageLoadStart(certificate.id)}
                      onLoad={() => handleImageLoad(certificate.id)}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Featured badge */}
                    {certificate.featured && (
                      <motion.div 
                        className="absolute top-3 right-3"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                      >
                        <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold shadow-lg">
                          <motion.div
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          >
                            <Star className="h-3 w-3 mr-1" />
                          </motion.div>
                          Featured
                        </Badge>
                      </motion.div>
                    )}
                    
                    {/* View overlay */}
                    <motion.div 
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                    >
                      <Button
                        size="sm"
                        className="bg-slate-800/80 backdrop-blur-sm hover:bg-slate-700 border-2 border-purple-500 hover:border-cyan-500 text-white transition-all duration-300 shadow-lg hover:shadow-xl"
                        onClick={() => setSelectedCertificate(certificate)}
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                    </motion.div>
                  </div>

                  {/* Certificate Info */}
                  <div className="p-6 space-y-4">
                    <div>
                      <motion.h3 
                        className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors line-clamp-2"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        {certificate.title}
                      </motion.h3>
                      
                      <div className="flex flex-col space-y-2 text-gray-300 text-sm mb-4">
                        <motion.div 
                          className="flex items-center space-x-2"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          <Building className="h-4 w-4 text-cyan-400" />
                          <span className="font-medium">{certificate.issuer}</span>
                        </motion.div>
                        <motion.div 
                          className="flex items-center space-x-2"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 }}
                        >
                          <Calendar className="h-4 w-4 text-purple-400" />
                          <span>{certificate.date}</span>
                        </motion.div>
                      </div>
                    </div>

                    <motion.p 
                      className="text-gray-400 text-sm leading-relaxed line-clamp-3"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      {certificate.description}
                    </motion.p>

                    {/* Skills */}
                    <motion.div 
                      className="flex flex-wrap gap-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      {certificate.skills.slice(0, 3).map((skill, index) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.7 + index * 0.1 }}
                        >
                          <Badge
                            variant="secondary"
                            className="bg-purple-500/20 text-purple-300 border-purple-500/30 text-xs hover:bg-purple-500/30 transition-colors"
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                      {certificate.skills.length > 3 && (
                        <Badge
                          variant="secondary"
                          className="bg-gray-500/20 text-gray-300 border-gray-500/30 text-xs"
                        >
                          +{certificate.skills.length - 3} more
                        </Badge>
                      )}
                    </motion.div>

                    {/* Action buttons with better visibility */}
                    <motion.div 
                      className="flex space-x-2 pt-4"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                    >
                      <Button
                        size="sm"
                        className="flex-1 bg-slate-800 hover:bg-slate-700 border-2 border-purple-500 hover:border-cyan-500 text-white transition-all duration-300 shadow-lg hover:shadow-xl"
                        onClick={() => setSelectedCertificate(certificate)}
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        Details
                      </Button>
                      {certificate.credentialUrl && (
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                          onClick={() => window.open(certificate.credentialUrl, '_blank')}
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      )}
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
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
            Want to see more of my professional achievements and certifications?
          </motion.p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Award className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Certificate Detail Modal */}
      <Dialog open={!!selectedCertificate} onOpenChange={() => setSelectedCertificate(null)}>
        <DialogContent className="max-w-4xl bg-slate-900/95 backdrop-blur-sm border border-white/20 text-white">
          {selectedCertificate && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  {selectedCertificate.title}
                </DialogTitle>
              </DialogHeader>
              
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                {/* Certificate Image */}
                <motion.div 
                  className="space-y-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="relative overflow-hidden rounded-lg shadow-2xl">
                    <img
                      src={selectedCertificate.image}
                      alt={selectedCertificate.title}
                      className="w-full rounded-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" />
                  </div>
                  
                  {selectedCertificate.credentialUrl && (
                    <Button
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                      onClick={() => window.open(selectedCertificate.credentialUrl, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Credential
                    </Button>
                  )}
                </motion.div>

                {/* Certificate Details */}
                <motion.div 
                  className="space-y-6"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div>
                    <h4 className="text-lg font-semibold text-yellow-400 mb-2">Issuing Organization</h4>
                    <p className="text-gray-300 flex items-center">
                      <Building className="h-4 w-4 mr-2" />
                      {selectedCertificate.issuer}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-yellow-400 mb-2">Date Earned</h4>
                    <p className="text-gray-300 flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {selectedCertificate.date}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-yellow-400 mb-2">Description</h4>
                    <p className="text-gray-300 leading-relaxed">
                      {selectedCertificate.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-yellow-400 mb-3">Skills & Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedCertificate.skills.map((skill, index) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                        >
                          <Badge
                            className="bg-purple-500/20 text-purple-300 border-purple-500/30 hover:bg-purple-500/30 transition-colors"
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}