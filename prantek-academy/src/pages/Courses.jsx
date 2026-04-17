import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import WhatsAppButton from '../components/WhatsAppButton';
import coursesData from '../data/courses.json';

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [filteredCourses, setFilteredCourses] = useState([]);

  useEffect(() => {
    let filtered = coursesData;
    
    if (searchTerm) {
      filtered = filtered.filter(course => 
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filter !== 'all') {
      filtered = filtered.filter(course => course.duration.includes(filter));
    }

    setFilteredCourses(filtered);
  }, [searchTerm, filter]);

  const durationFilters = ['all', '2', '3', '4'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />
      
      <section className="pt-24 pb-12 px-4 md:px-8 lg:px-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent mb-4 text-center">
            Our Courses
          </h1>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Choose from our comprehensive Oracle training programs designed for beginners to advanced professionals.
          </p>

          {/* Search & Filter */}
          <div className="mb-12 flex flex-col md:flex-row gap-4 justify-center items-center">
            <input
              type="text"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full md:w-96 px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none shadow-lg text-lg"
            />
            <div className="flex gap-2">
              {durationFilters.map((duration) => (
                <button
                  key={duration}
                  onClick={() => setFilter(duration)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    filter === duration
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'bg-white border-2 border-gray-200 hover:border-blue-500 hover:shadow-md'
                  }`}
                >
                  {duration === 'all' ? 'All' : `${duration} Months`}
                </button>
              ))}
            </div>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group cursor-pointer border border-gray-100 overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-6xl opacity-20 font-bold">{course.title.split(' ')[0]}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{course.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{course.description}</p>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {course.duration}
                    </span>
                    <span className="text-2xl font-bold text-gray-900">{course.price}</span>
                  </div>
                  <div className="flex gap-2 mb-6 flex-wrap">
                    {course.features.map((feature, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    View Details →
                  </motion.button>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-20">
                <h3 className="text-3xl font-bold text-gray-500 mb-4">No courses found</h3>
                <p className="text-gray-400">Try adjusting your search or filter</p>
              </div>
            )}
          </div>
        </motion.div>
      </section>

      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
    </div>
  );
};

export default Courses;
