import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import WhatsAppButton from '../components/WhatsAppButton';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />
      
      <section className="pt-24 pb-20 px-4 md:px-8 lg:px-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent mb-12 text-center">
            About ERPCloud
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                16+ Years of Excellence in Oracle Training
              </h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                ERPCloud Consulting Services Pvt Ltd is a leading Oracle training institute with over 16 years of industry experience.
                We specialize in real-time project-based training for Oracle Forms, Reports, Database, APEX, Fusion, and Cloud technologies.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-8 rounded-2xl shadow-xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                  <p className="text-gray-600">To bridge the gap between academic learning and industry requirements through hands-on training.</p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                  <p className="text-gray-600">To be the most trusted name in Oracle technology training across India.</p>
                </div>
              </div>
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-12 shadow-2xl h-96 flex items-center justify-center">
                <div className="text-6xl font-bold text-white/20">ERPCloud</div>
              </div>
            </motion.div>
          </div>

          {/* Why Choose Us */}
          <div className="mt-24">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Why Choose ERPCloud?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold mb-4">Expert Trainers</h3>
                <p className="text-gray-600">16+ years industry experience with real-world project expertise.</p>
              </motion.div>
              <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="text-4xl mb-4">💻</div>
                <h3 className="text-2xl font-bold mb-4">Live Projects</h3>
                <p className="text-gray-600">Work on enterprise-grade projects with live server access.</p>
              </motion.div>
              <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-2xl font-bold mb-4">Placement Support</h3>
                <p className="text-gray-600">3000+ placements with dedicated placement cell.</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
    </div>
  );
};

export default About;
