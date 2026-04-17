import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import WhatsAppButton from '../components/WhatsAppButton';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error on change
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) newErrors.phone = 'Phone must be 10 digits';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('');

    // Mock submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('Thank you! Your message has been sent. We will contact you soon.');
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navbar />
      
      <section className="pt-24 pb-20 px-4 md:px-8 lg:px-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent mb-12 text-center">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto leading-relaxed">
            Ready to start your Oracle training journey? Contact us for free counseling and demo class.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Contact Info */}
            <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center">
                      <span className="text-2xl">📧</span>
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <a href="mailto:info@erpcloud.in" className="text-blue-600 hover:underline">info@erpcloud.in</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-600 rounded-2xl flex items-center justify-center">
                      <span className="text-2xl">📞</span>
                    </div>
                    <div>
                      <p className="font-semibold">Phone</p>
                      <a href="tel:+919876543210" className="text-green-600 hover:underline">+91 98765 43210</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-600 rounded-2xl flex items-center justify-center">
                      <span className="text-2xl">📍</span>
                    </div>
                    <div>
                      <p className="font-semibold">Address</p>
                      <p>Hyderabad, Telangana, India</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 rounded-3xl text-white">
                <h3 className="text-2xl font-bold mb-4">Business Hours</h3>
                <p className="text-blue-100">Mon - Sat: 9:00 AM - 8:00 PM</p>
                <p>Sunday: 10:00 AM - 5:00 PM</p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="bg-white p-8 lg:p-12 rounded-3xl shadow-2xl">
              {submitStatus ? (
                <div className="text-center py-12">
                  <div className="w-24 h-24 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-6">
                    <span className="text-4xl">✅</span>
                  </div>
                  <h3 className="text-2xl font-bold text-green-800 mb-4">{submitStatus}</h3>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setSubmitStatus('')}
                    className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
                  >
                    Send Another Message
                  </motion.button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-4 rounded-xl border-2 focus:outline-none focus:ring-4 focus:ring-blue-200 transition-all duration-300 text-lg ${
                        errors.name ? 'border-red-400' : 'border-gray-200 focus:border-blue-500'
                      }`}
                      placeholder="Enter your full name"
                    />
                    {errors.name && <p className="mt-1 text-red-600 text-sm">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-4 rounded-xl border-2 focus:outline-none focus:ring-4 focus:ring-blue-200 transition-all duration-300 text-lg ${
                        errors.email ? 'border-red-400' : 'border-gray-200 focus:border-blue-500'
                      }`}
                      placeholder="your@email.com"
                    />
                    {errors.email && <p className="mt-1 text-red-600 text-sm">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-4 rounded-xl border-2 focus:outline-none focus:ring-4 focus:ring-blue-200 transition-all duration-300 text-lg ${
                        errors.phone ? 'border-red-400' : 'border-gray-200 focus:border-blue-500'
                      }`}
                      placeholder="9876543210"
                    />
                    {errors.phone && <p className="mt-1 text-red-600 text-sm">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Message *</label>
                    <textarea
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-4 rounded-xl border-2 focus:outline-none focus:ring-4 focus:ring-blue-200 transition-all duration-300 text-lg resize-vertical ${
                        errors.message ? 'border-red-400' : 'border-gray-200 focus:border-blue-500'
                      }`}
                      placeholder="Tell us about your training requirements..."
                    />
                    {errors.message && <p className="mt-1 text-red-600 text-sm">{errors.message}</p>}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-6 rounded-2xl font-bold text-xl shadow-xl hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </motion.button>
                </form>
              )}
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

export default Contact;
