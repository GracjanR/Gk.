
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import ContactPage from './pages/ContactPage';
import RoadsidePage from './pages/RoadsidePage';
import BoltPage from './pages/BoltPage';
import AdminPage from './pages/AdminPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col selection:bg-yellow-400 selection:text-black">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/kategoria/bolt" element={<BoltPage />} />
            <Route path="/kategoria/:id" element={<CategoryPage />} />
            <Route path="/kontakt" element={<ContactPage />} />
            <Route path="/pomoc-drogowa" element={<RoadsidePage />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </main>
        <Footer />
        
        {/* Floating Call Button for Mobile */}
        <a 
          href="tel:+48881218462" 
          className="fixed bottom-6 right-6 md:hidden bg-green-600 text-white p-4 rounded-full shadow-2xl z-50 animate-bounce"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
        </a>
      </div>
    </Router>
  );
};

export default App;
