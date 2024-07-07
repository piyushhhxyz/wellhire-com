import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import AboutUsPage from './pages/AboutUsPage';
import PricingPage from './pages/PricingPage';
import ComingSoonPage from './pages/ComingSoonPage';
import { ThemeProvider } from './contexts/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
          <Header />
          <main className="flex-grow pt-24"> {/* Increased top padding to accommodate floating header */}
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/about" element={<AboutUsPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/community" element={<ComingSoonPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;