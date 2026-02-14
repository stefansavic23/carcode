import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import SpeedIcon from '@mui/icons-material/Speed';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import BuildIcon from '@mui/icons-material/Build';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
`;

const AnimatedBox = styled(Box)(({ delay = 0 }) => ({
  animation: `${fadeInUp} 0.8s ease-out ${delay}s both`,
}));

const AnimatedIconBox = styled(Box)(({ delay = 0 }) => ({
  animation: `${fadeIn} 0.6s ease-out ${delay}s both`,
  '&:hover': {
    animation: `${pulse} 0.6s ease-in-out`,
  },
}));

const Hero = () => {
  const { t } = useTranslation();

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
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.65) 50%, rgba(0,0,0,0.8) 100%)',
          pointerEvents: 'none',
          zIndex: 1,
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(0, 206, 209, 0.06) 0%, transparent 60%)',
          pointerEvents: 'none',
          zIndex: 1,
        },
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          minWidth: '100%',
          minHeight: '100%',
          width: 'auto',
          height: 'auto',
          transform: 'translate(-50%, -50%)',
          objectFit: 'cover',
          zIndex: 0,
        }}
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: { xs: '100%', sm: '100%', md: '100%' },
          height: { xs: '100px', sm: '140px', md: '160px' },
          background: 'radial-gradient(ellipse 100% 100% at 0% 100%, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.7) 40%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Stack spacing={4} alignItems="center" textAlign="center">
          <AnimatedBox delay={0.2}>
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
                {t('hero.tagline')}
              </Typography>
            </Box>
          </AnimatedBox>

          <AnimatedBox delay={0.4}>
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
              {t('hero.headline')}
            </Typography>
          </AnimatedBox>

          <AnimatedBox delay={0.6}>
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
                    transform: 'translateY(-2px) scale(1.05)',
                    boxShadow: '0 8px 20px rgba(0, 206, 209, 0.3)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                {t('hero.getStarted')}
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
                    transform: 'translateY(-2px) scale(1.05)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                {t('hero.ourServices')}
              </Button>
            </Stack>
          </AnimatedBox>

          <AnimatedBox delay={0.8}>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={4}
              sx={{ mt: 6, width: '100%', maxWidth: '800px' }}
            >
              <AnimatedIconBox delay={1.0} sx={{ textAlign: 'center', flex: 1 }}>
                <SpeedIcon
                  sx={{
                    fontSize: { xs: '2.5rem', md: '3rem' },
                    color: 'primary.main',
                    mb: 1,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.2) rotate(5deg)',
                    },
                  }}
                />
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                  {t('hero.performance')}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {t('hero.performanceDesc')}
                </Typography>
              </AnimatedIconBox>
              <AnimatedIconBox delay={1.2} sx={{ textAlign: 'center', flex: 1 }}>
                <TrendingUpIcon
                  sx={{
                    fontSize: { xs: '2.5rem', md: '3rem' },
                    color: 'primary.main',
                    mb: 1,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.2) rotate(-5deg)',
                    },
                  }}
                />
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                  {t('hero.efficiency')}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {t('hero.efficiencyDesc')}
                </Typography>
              </AnimatedIconBox>
              <AnimatedIconBox delay={1.4} sx={{ textAlign: 'center', flex: 1 }}>
                <BuildIcon
                  sx={{
                    fontSize: { xs: '2.5rem', md: '3rem' },
                    color: 'primary.main',
                    mb: 1,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.2) rotate(5deg)',
                    },
                  }}
                />
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                  {t('hero.customization')}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {t('hero.customizationDesc')}
                </Typography>
              </AnimatedIconBox>
            </Stack>
          </AnimatedBox>
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;


