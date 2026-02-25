import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Container, Typography } from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

/**
 * Stranica O nama na /about.
 * Layout: label "O NAMA", naslov "Naša priča", uvod (centriran), zatim paragrafi.
 */
const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ backgroundColor: 'background.default', minHeight: '100vh' }}>
      <Navbar position="static" />

      <Box
        component="main"
        sx={{
          py: { xs: 8, sm: 10, md: 12 },
          px: { xs: 2, sm: 3 },
        }}
      >
        <Container maxWidth="md" sx={{ mx: 'auto' }}>
          <Typography
            variant="overline"
            sx={{
              display: 'block',
              textAlign: 'center',
              color: 'primary.main',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              fontWeight: 600,
              fontSize: { xs: '0.7rem', sm: '0.75rem' },
              mb: 1,
            }}
          >
            {t('aboutPage.label')}
          </Typography>
          <Typography
            variant="h1"
            component="h1"
            sx={{
              textAlign: 'center',
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              fontWeight: 700,
              color: 'text.primary',
              mb: 4,
              lineHeight: 1.2,
            }}
          >
            {t('aboutPage.title')}
          </Typography>

          <Typography
            sx={{
              textAlign: 'center',
              color: 'text.primary',
              fontSize: { xs: '1rem', md: '1.05rem' },
              lineHeight: 1.8,
              mb: 3,
              maxWidth: 640,
              mx: 'auto',
            }}
          >
            {t('aboutPage.intro')}
          </Typography>

          <Typography
            sx={{
              textAlign: 'center',
              color: 'text.primary',
              fontSize: { xs: '0.95rem', md: '1rem' },
              lineHeight: 1.85,
              mb: 2.5,
              maxWidth: 640,
              mx: 'auto',
            }}
          >
            {t('aboutPage.p1')}
          </Typography>
          <Typography
            sx={{
              textAlign: 'center',
              color: 'text.primary',
              fontSize: { xs: '0.95rem', md: '1rem' },
              lineHeight: 1.85,
              mb: 2.5,
              maxWidth: 640,
              mx: 'auto',
            }}
          >
            {t('aboutPage.p2')}
          </Typography>
          <Typography
            sx={{
              textAlign: 'center',
              color: 'text.primary',
              fontSize: { xs: '0.95rem', md: '1rem' },
              lineHeight: 1.85,
              maxWidth: 640,
              mx: 'auto',
            }}
          >
            {t('aboutPage.p3')}
          </Typography>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};

export default AboutPage;
