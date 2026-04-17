import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import WhatsAppButton from '../components/WhatsAppButton';
import coursesData from '../data/courses.json';

const CourseDetails = () => {
  const { id } = useParams();
  const course = coursesData.find(c => c.id === parseInt(id));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4" />
          <p className="text-xl text-gray-600">Loading course details...</p>
        </div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Course Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">The course you're looking for doesn't exist.</p>
          <motion.a 
            href="/courses"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all"
            whileHover={{ scale: 1.05 }}
          >
            ← Back to Courses
          </motion.a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navbar />
      
      <section className="pt-24 pb-20 px-4 md:px-8 lg:px-16">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-6xl mx-auto"
        >
          {/* Hero Banner */}
          <div className="relative mb-16">
            <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-3xl p-12 lg:p-20 text-center shadow-2xl">
              <motion.h1 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-lg"
              >
                {course.title}
              </motion.h1>
              <motion.p 
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl max-w-4xl mx-auto mb-8 opacity-90"
              >
                {course.description}
              </motion.p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.4 }}
                  className="bg-white/20 backdrop-blur-sm px-8 py-4 rounded-2xl text-2xl font-bold"
                >
                  Duration: {course.duration}
                </motion.div>
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-3xl font-bold drop-shadow-lg"
                >
                  {course.price}
                </motion.div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Course Features & Curriculum */}
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="space-y-8 lg:sticky lg:top-24 lg:h-fit lg:self-start"
            >
              {/* Features */}
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
                  What You'll Get
                </h2>
                <ul className="space-y-4">
                  {course.features.map((feature, index) => (
                    <motion.li 
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4 text-xl"
                    >
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white font-bold">✓</span>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Curriculum */}
              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-3xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold mb-8 text-gray-900">Course Curriculum</h2>
                <div className="space-y-3">
                  {course.curriculum.map((topic, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all group"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center font-bold text-white flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="font-medium text-gray-800 group-hover:text-blue-600 transition">{topic}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* CTA Sidebar */}
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="lg:self-start"
            >
              <div className="bg-gradient-to-br from-emerald-500 to-green-600 rounded-3xl p-10 text-white shadow-2xl text-center mb-8">
                <div className="text-6xl mb-6">🚀</div>
                <h3 className="text-3xl font-bold mb-4">Ready to Enroll?</h3>
                <p className="text-xl opacity-90 mb-8">Join 7000+ students who transformed their careers</p>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-white text-green-600 py-6 px-8 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 mb-4"
                >
                  Enroll Now - {course.price}
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-white/20 backdrop-blur-sm py-4 px-8 rounded-xl font-semibold text-xl border-2 border-white/30 hover:bg-white hover:text-green-600 transition-all"
                >
                  Book Free Demo
                </motion.button>
              </div>

              {/* Additional Info */}
              <div className="bg-white rounded-3xl p-8 shadow-xl space-y-6">
                <div>
                  <h4 className="text-2xl font-bold mb-3">Course Schedule</h4>
                  <p className="text-gray-600">New batches every <span className="font-bold text-green-600">Monday & Thursday</span></p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-3">Class Mode</h4>
                  <p className="text-gray-600">
                    • Live Online Classes<br/>
                    • Recorded Sessions<br/>
                    • Lifetime Access
                  </p>
                </div>
                <div className="text-center pt-6 border-t">
                  <p className="text-sm text-gray-500 mb-4">Trusted by 3000+ companies</p>
                  <div className="flex gap-4 justify-center flex-wrap">
                    {['TCS', 'Infosys', 'Wipro', 'HCL'].map((company) => (
                      <span key={company} className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg font-semibold text-sm">
                        {company}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
    </div>
  );
};

export default CourseDetails;
