import React from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Footer from '../components/Footer';

const ServicesPage = () => {
  return (
    <Box sx={{ backgroundColor: 'background.default', minHeight: '100vh' }}>
      <Navbar position="static" />
      <Services />
      <Footer />
    </Box>
  );
};

export default ServicesPage;
