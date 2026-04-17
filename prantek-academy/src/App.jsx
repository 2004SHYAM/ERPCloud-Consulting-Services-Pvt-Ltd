import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import CourseDetails from './pages/CourseDetails';
import Placements from './pages/Placements';
import Contact from './pages/Contact';
import './App.css'; // Create if needed for custom CSS

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/course/:id" element={<CourseDetails />} />
          <Route path="/placements" element={<Placements />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={
            <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center px-4">
              <div className="text-center">
                <h1 className="text-5xl font-bold text-gray-900 mb-4">Page Not Found</h1>
                <a href="/" className="text-blue-600 hover:underline text-xl">Go Home →</a>
              </div>
            </div>
          } />
        </Routes>
        <Footer />
        <ScrollToTop />
        <WhatsAppButton />

      </div>
    </Router>
  );
}

export default App;
