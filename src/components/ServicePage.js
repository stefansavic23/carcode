import React, { useEffect, useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import Gallery from './Gallery';

/**
 * Reusable layout for a single service detail page.
 * Props: title, description, images (array of image URLs).
 */
const ServicePage = ({ title, description, images }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(id);
  }, []);

  return (
    <Box
      component="main"
      sx={{
        py: { xs: 6, sm: 8, md: 10 },
        backgroundColor: 'background.default',
        minHeight: '100vh',
        opacity: mounted ? 1 : 0,
        transform: mounted ? 'translateY(0)' : 'translateY(12px)',
        transition: 'opacity 0.5s ease, transform 0.5s ease',
      }}
    >
      <Container maxWidth="md" sx={{ mx: 'auto' }}>
        <header>
          <Typography
            variant="overline"
            sx={{
              color: 'primary.main',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              fontWeight: 600,
              display: 'block',
              mb: 1,
            }}
          >
            Usluga
          </Typography>
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              fontWeight: 700,
              mb: 3,
              lineHeight: 1.2,
            }}
          >
            {title}
          </Typography>
          <Typography
            component="p"
            sx={{
              color: 'text.secondary',
              fontSize: { xs: '1rem', md: '1.1rem' },
              lineHeight: 1.85,
            }}
          >
            {description}
          </Typography>
        </header>

        <Gallery images={images || []} />
      </Container>
    </Box>
  );
};

export default ServicePage;
