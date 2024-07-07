import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import AboutUsPage from "./pages/AboutUsPage";
import PricingPage from "./pages/PricingPage";
import ComingSoonPage from "./pages/ComingSoonPage";
import HomePage from "./pages/HomePage";
import CompanyPage from "./pages/CompanyPage";
import PDFViewer from "./components/PDFViewer";
import { ThemeProvider } from "./contexts/ThemeContext";

const AppContent = () => {
  const location = useLocation();
  const noHeaderFooterPaths = ["/login", "/signup"];
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-white">
      {!noHeaderFooterPaths.includes(location.pathname) && <Header />}
      <main className="flex-grow mt-[6rem]">
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
      {!noHeaderFooterPaths.includes(location.pathname) && <Footer />}
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
};

export default App;
