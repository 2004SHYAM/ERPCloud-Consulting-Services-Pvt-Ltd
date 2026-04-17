import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
 // import { Menu, X } from 'lucide-react';
  const MenuIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
  const CloseIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            ERPCloud
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`hover:text-blue-600 transition ${location.pathname === '/' ? 'text-blue-600 border-b-2 border-blue-600' : ''}`}>
              Home
            </Link>
            <Link to="/about" className={`hover:text-blue-600 transition ${location.pathname === '/about' ? 'text-blue-600 border-b-2 border-blue-600' : ''}`}>
              About
            </Link>
            <Link to="/courses" className={`hover:text-blue-600 transition ${location.pathname === '/courses' ? 'text-blue-600 border-b-2 border-blue-600' : ''}`}>
              Courses
            </Link>
            <Link to="/placements" className={`hover:text-blue-600 transition ${location.pathname === '/placements' ? 'text-blue-600 border-b-2 border-blue-600' : ''}`}>
              Placements
            </Link>
            <Link to="/contact" className={`hover:text-blue-600 transition ${location.pathname === '/contact' ? 'text-blue-600 border-b-2 border-blue-600' : ''}`}>
              Contact
            </Link>
            <Link 
              to="/courses" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold"
            >
              Enroll Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
{isOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link to="/" className="block px-3 py-2 text-gray-900 hover:text-blue-600" onClick={() => setIsOpen(false)}>Home</Link>
                <Link to="/about" className="block px-3 py-2 text-gray-900 hover:text-blue-600" onClick={() => setIsOpen(false)}>About</Link>
                <Link to="/courses" className="block px-3 py-2 text-gray-900 hover:text-blue-600" onClick={() => setIsOpen(false)}>Courses</Link>
                <Link to="/placements" className="block px-3 py-2 text-gray-900 hover:text-blue-600" onClick={() => setIsOpen(false)}>Placements</Link>
                <Link to="/contact" className="block px-3 py-2 text-gray-900 hover:text-blue-600" onClick={() => setIsOpen(false)}>Contact</Link>
                <Link to="/courses" className="block w-full text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-2 rounded-full mt-2 mx-4 font-semibold" onClick={() => setIsOpen(false)}>Enroll Now</Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
