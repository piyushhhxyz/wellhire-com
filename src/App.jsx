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
import HomePage from './pages/HomePage';
import CompanyPage from './pages/CompanyPage';
import PDFViewer from './components/PDFViewer';
import { ThemeProvider } from './contexts/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <Router>
      <div className="min-h-screen flex flex-col bg-gray-900 text-white">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/about" element={<AboutUsPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/community" element={<ComingSoonPage />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/company/:companyId" element={<CompanyPage />} />
              <Route path="/pdf-viewer" element={<PDFViewer />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;