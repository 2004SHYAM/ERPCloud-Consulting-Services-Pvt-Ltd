import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              ERPCloud
            </h3>
            <p className="text-gray-300 mb-4">
              ERPCloud Consulting Services Pvt Ltd - Your trusted partner for Oracle training and career growth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-white transition">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Instagram</a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/" className="hover:text-blue-400 transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-400 transition">About</Link></li>
              <li><Link to="/courses" className="hover:text-blue-400 transition">Courses</Link></li>
              <li><Link to="/placements" className="hover:text-blue-400 transition">Placements</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Courses</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/courses" className="hover:text-blue-400 transition">Oracle Forms 12c</Link></li>
              <li><Link to="/courses" className="hover:text-blue-400 transition">Oracle Reports 12c</Link></li>
              <li><Link to="/courses" className="hover:text-blue-400 transition">Oracle Database 19c</Link></li>
              <li><Link to="/courses" className="hover:text-blue-400 transition">Oracle APEX</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="text-gray-300 space-y-2">
              <p>📧 info@erpcloud.in</p>
              <p>📞 +91 98765 43210</p>
              <p>📍 Hyderabad, Telangana</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 ERPCloud Consulting Services Pvt Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
