import React from 'react';
import { Box, Container, Typography, Button, Stack } from '@mui/material';
import SpeedIcon from '@mui/icons-material/Speed';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import BuildIcon from '@mui/icons-material/Build';

const Hero = () => {
  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        pt: 10,
        pb: 6,
        background: 'linear-gradient(180deg, #000000 0%, #0A0A0A 100%)',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(0, 206, 209, 0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Stack spacing={4} alignItems="center" textAlign="center">

          <Box>
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontSize: { xs: '3rem', sm: '4rem', md: '5.5rem', lg: '6.5rem' },
                fontWeight: 700,
                mb: 2,
                background: 'linear-gradient(135deg, #FFFFFF 0%, #00CED1 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                lineHeight: 1.1,
              }}
            >
              <Box component="span" sx={{ color: 'secondary.main' }}>
                CAR
              </Box>
              <Box component="span" sx={{ color: 'primary.main' }}>
                CODE
              </Box>
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: 'text.secondary',
                fontWeight: 300,
                letterSpacing: '0.1em',
                mb: 4,
                fontSize: { xs: '0.9rem', sm: '1rem', md: '1.2rem' },
              }}
            >
              PROFESSIONAL CARCODING
            </Typography>
          </Box>

          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              maxWidth: '700px',
              fontWeight: 400,
              lineHeight: 1.8,
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
            }}
          >
            Unlock your vehicle's true potential with professional ECU tuning and
            advanced car coding services. Experience enhanced performance, efficiency,
            and customization.
          </Typography>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            sx={{ mt: 2 }}
          >
            <Button
              variant="contained"
              size="large"
              href="#contact"
              sx={{
                backgroundColor: 'primary.main',
                color: 'background.default',
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                '&:hover': {
                  backgroundColor: 'primary.dark',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 20px rgba(0, 206, 209, 0.3)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Get Started
            </Button>
            <Button
              variant="outlined"
              size="large"
              href="#services"
              sx={{
                borderColor: 'primary.main',
                color: 'primary.main',
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                '&:hover': {
                  borderColor: 'primary.light',
                  backgroundColor: 'rgba(0, 206, 209, 0.1)',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Our Services
            </Button>
          </Stack>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={4}
            sx={{ mt: 6, width: '100%', maxWidth: '800px' }}
          >
            <Box sx={{ textAlign: 'center', flex: 1 }}>
              <SpeedIcon
                sx={{
                  fontSize: { xs: '2.5rem', md: '3rem' },
                  color: 'primary.main',
                  mb: 1,
                }}
              />
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                Performance
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Enhanced power & torque
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'center', flex: 1 }}>
              <TrendingUpIcon
                sx={{
                  fontSize: { xs: '2.5rem', md: '3rem' },
                  color: 'primary.main',
                  mb: 1,
                }}
              />
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                Efficiency
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Optimized fuel economy
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'center', flex: 1 }}>
              <BuildIcon
                sx={{
                  fontSize: { xs: '2.5rem', md: '3rem' },
                  color: 'primary.main',
                  mb: 1,
                }}
              />
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                Customization
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Tailored to your needs
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;


