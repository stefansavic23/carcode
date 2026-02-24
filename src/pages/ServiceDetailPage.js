import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Box, Button, Container, Typography } from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServicePage from '../components/ServicePage';
import { getServiceBySlug } from '../data/services';

/**
 * Dynamic service detail page at /services/:serviceSlug.
 * Renders ServicePage when slug exists, otherwise "Service not found".
 */
const ServiceDetailPage = () => {
  const { serviceSlug } = useParams();
  const service = getServiceBySlug(serviceSlug);

  return (
    <Box sx={{ backgroundColor: 'background.default', minHeight: '100vh' }}>
      <Navbar position="static" />

      {!service ? (
        <Container maxWidth="sm" sx={{ py: { xs: 8, md: 12 }, textAlign: 'center' }}>
          <Typography variant="h4" component="h1" sx={{ fontWeight: 700, mb: 2 }}>
            Usluga nije pronađena
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4 }}>
            Tražena usluga ne postoji ili je uklonjena.
          </Typography>
          <Button component={Link} to="/services" variant="contained" color="primary">
            Nazad na usluge
          </Button>
        </Container>
      ) : (
        <ServicePage
          title={service.title}
          description={service.description}
          images={service.images}
        />
      )}

      <Footer />
    </Box>
  );
};

export default ServiceDetailPage;
