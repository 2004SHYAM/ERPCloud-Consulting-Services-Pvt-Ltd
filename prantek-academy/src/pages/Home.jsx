import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import WhatsAppButton from '../components/WhatsAppButton';
import stats from '../data/stats.json';
import testimonials from '../data/testimonials.json';
import coursesData from '../data/courses.json';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 md:px-8 lg:px-16 min-h-screen flex items-center">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6 leading-tight">
              Expert Oracle Training
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed max-w-2xl">
              Live training with real-time projects, expert trainers, and dedicated placement support. 
              Transform your career with ERPCloud Consulting Services Pvt Ltd.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-purple-700 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Get Free Demo
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                View Courses
              </motion.button>
            </div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            {/* Hero image placeholder */}
            <div className="bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl p-12 shadow-2xl">
              <div className="text-8xl font-bold text-white/20">Oracle Training</div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div key={stat.id} initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: index * 0.1 }}>
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">{stat.label}</div>
                <div className="text-gray-600 font-semibold">{stat.value}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Preview */}
      <section className="py-24 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent mb-6">Popular Courses</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Start your journey with our top Oracle training programs</p>
          </motion.div>
          {/* Import coursesData here if needed, hardcode preview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* First 3 courses preview */}
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="group cursor-pointer hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 p-8 border">
              <div className="h-40 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl mb-6 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                <span className="text-5xl opacity-20 font-bold">FORMS</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Oracle Forms 12c</h3>
              <p className="text-gray-600 mb-4">Master Oracle Forms 12c with real-time projects</p>
              <span className="text-lg font-bold text-orange-600">3 Months</span>
            </motion.div>
            {/* Similar for 2 more */}
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="group cursor-pointer hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden bg-gradient-to-br from-green-50 to-emerald-50 p-8 border">
              <div className="h-40 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl mb-6 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                <span className="text-5xl opacity-20 font-bold">REPORTS</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Oracle Reports 12c</h3>
              <p className="text-gray-600 mb-4">Advanced reporting with Oracle Reports 12c</p>
              <span className="text-lg font-bold text-green-600">2 Months</span>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="group cursor-pointer hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden bg-gradient-to-br from-purple-50 to-violet-50 p-8 border">
              <div className="h-40 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl mb-6 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                <span className="text-5xl opacity-20 font-bold">DB</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Oracle Database 19c</h3>
              <p className="text-gray-600 mb-4">Complete Oracle Database administration training</p>
              <span className="text-lg font-bold text-purple-600">4 Months</span>
            </motion.div>
          </div>
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.6 }} className="text-center mt-12">
            <a href="/courses" className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-5 rounded-3xl font-bold text-xl hover:from-blue-700 hover:to-purple-700 transition-all shadow-xl hover:shadow-2xl">View All Courses →</a>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-slate-100 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Choose ERPCloud?</h2>
            <p className="text-xl text-gray-600">Everything you need for Oracle career success</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '💼', title: 'Placement Assistance', desc: '3000+ placements with dedicated support' },
              { icon: '💻', title: 'Real-time Projects', desc: 'Enterprise grade projects with server access' },
              { icon: '👨‍🏫', title: 'Expert Trainers', desc: '16+ years industry experience' },
              { icon: '🔐', title: '24/7 Server Access', desc: 'Practice anytime, anywhere' }
            ].map((feature, index) => (
              <motion.div key={index} initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: index * 0.1 }} className="text-center group">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6 text-3xl shadow-2xl group-hover:scale-110 transition-all duration-300">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 text-lg">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent mb-6">Student Success Stories</h2>
            <p className="text-xl text-gray-600">What our 7000+ students say</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Rahul Sharma', role: 'Oracle Developer at TCS', text: "ERPCloud's Oracle Forms training transformed my career..." },
              { name: 'Priya Patel', role: 'Database Admin at Infosys', text: 'Excellent trainers with 16+ years experience...' },
              { name: 'Amit Kumar', role: 'APEX Developer', text: 'From zero to hero in Oracle APEX...' },
              { name: 'Sneha Reddy', role: 'Reports Specialist at HCL', text: 'The live projects were game-changers...' },
              { name: 'Vikram Singh', role: 'Fusion Consultant', text: 'Comprehensive SOA coverage...' },
              { name: 'Neha Gupta', role: 'OCI Architect', text: 'Best institute for Oracle Cloud...' }
            ].map((testimonial, index) => (
              <motion.div key={index} initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: index * 0.1 }} className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-2xl font-bold text-white mr-4">★</div>
                  <div>
                    <h4 className="font-bold text-xl">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic mb-6">"{testimonial.text}"</p>
                <div className="flex text-yellow-400 text-2xl">★★★★★</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-slate-100 to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">See ERPCloud in Action</h2>
            <p className="text-xl text-gray-600 mb-12">Watch our student success stories and training highlights</p>
            <div className="bg-black rounded-3xl overflow-hidden shadow-2xl mx-auto w-full max-w-4xl aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                title="ERPCloud Training Overview"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Start Your Career Today</h2>
            <p className="text-2xl opacity-90 mb-12 max-w-2xl mx-auto leading-relaxed">Join thousands of professionals who chose ERPCloud for their Oracle training journey</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a href="/courses" className="bg-white text-blue-600 px-12 py-6 rounded-3xl font-bold text-xl hover:bg-gray-100 transition-all shadow-2xl hover:shadow-3xl" whileHover={{ scale: 1.05 }}>
                Explore Courses
              </motion.a>
              <motion.a href="/contact" className="border-2 border-white px-12 py-6 rounded-3xl font-bold text-xl hover:bg-white hover:text-blue-600 transition-all shadow-2xl hover:shadow-3xl" whileHover={{ scale: 1.05 }}>
                Apply Now
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
    </div>
  );
};

export default Home;
