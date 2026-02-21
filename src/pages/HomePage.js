import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeaturedService from '../components/FeaturedService';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const SCROLL_DELAY_MS = 150;

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash?.replace('#', '');
    if (!hash) return;

    const scrollToSection = () => {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    const timer = setTimeout(scrollToSection, SCROLL_DELAY_MS);
    return () => clearTimeout(timer);
  }, [location.pathname, location.hash]);

  return (
    <Box sx={{ backgroundColor: 'background.default', minHeight: '100vh' }}>
      <Navbar position="fixed" />
      <Hero />
      <FeaturedService />
      <About />
      <Contact />
      <Footer />
    </Box>
  );
};

export default HomePage;
