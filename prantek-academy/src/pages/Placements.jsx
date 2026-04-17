import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import WhatsAppButton from '../components/WhatsAppButton';

const Placements = () => {
  const companies = [
    'TCS', 'Infosys', 'Wipro', 'HCL', 'Cognizant', 'Accenture', 'Capgemini', 'Tech Mahindra', 'L&T Infotech', 'Mphasis'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />
      
      <section className="pt-24 pb-20 px-4 md:px-8 lg:px-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 to-green-900 bg-clip-text text-transparent mb-6">
            Placement Success
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-16 max-w-4xl mx-auto leading-relaxed">
            3000+ students placed in top MNCs with our dedicated placement cell and industry partnerships.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.1 }}>
              <div className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent mb-4">3000+</div>
              <div className="text-2xl font-bold text-gray-900">Successful Placements</div>
            </motion.div>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.2 }}>
              <div className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent mb-4">95%</div>
              <div className="text-2xl font-bold text-gray-900">Placement Rate</div>
            </motion.div>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.3 }}>
              <div className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent mb-4">50+</div>
              <div className="text-2xl font-bold text-gray-900">Recruiter Partners</div>
            </motion.div>
          </div>

          {/* Our Process */}
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">Our Placement Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { icon: '📝', title: 'Resume Building', desc: 'Professional resume preparation' },
                { icon: '💻', title: 'Mock Interviews', desc: 'Live mock interviews with feedback' },
                { icon: '🎯', title: 'Skill Assessment', desc: 'Technical skill evaluation' },
                { icon: '🏢', title: 'Job Referral', desc: 'Direct referrals to 50+ companies' }
              ].map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className="text-5xl mb-6">{step.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Company Logos */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Our Top Recruiters</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-6">
              {companies.map((company, index) => (
                <motion.div
                  key={company}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center h-24 border"
                >
                  <span className="font-bold text-xl text-gray-800 uppercase tracking-wide">{company}</span>
                </motion.div>
              ))}
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

export default Placements;
