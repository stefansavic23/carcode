import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';

const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const AnimatedLeft = styled(Box)(({ delay = 0 }) => ({
  animation: `${fadeInLeft} 0.8s ease-out ${delay}s both`,
}));

const AnimatedRight = styled(Box)(({ delay = 0 }) => ({
  animation: `${fadeInRight} 0.8s ease-out ${delay}s both`,
}));

const FeaturedService = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'background.paper',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(0, 206, 209, 0.03) 0%, transparent 50%)',
          pointerEvents: 'none',
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <AnimatedLeft delay={0.2}>
              <Typography
                variant="overline"
                sx={{
                  color: 'primary.main',
                  fontSize: { xs: '0.75rem', md: '0.875rem' },
                  fontWeight: 600,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  mb: 2,
                  display: 'block',
                }}
              >
                {t('featuredService.label')}
              </Typography>
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem', lg: '4rem' },
                  fontWeight: 700,
                  color: 'text.primary',
                  mb: 3,
                  lineHeight: 1.2,
                }}
              >
                {t('featuredService.title')}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  fontSize: { xs: '1rem', md: '1.125rem' },
                  lineHeight: 1.8,
                  mb: 4,
                  maxWidth: '90%',
                }}
              >
                {t('featuredService.description')}
              </Typography>
              <Button
                component={Link}
                to="/services"
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: 'secondary.main',
                  color: 'background.default',
                  px: { xs: 3, md: 4 },
                  py: { xs: 1.25, md: 1.5 },
                  fontSize: { xs: '0.95rem', md: '1rem' },
                  fontWeight: 600,
                  borderRadius: 2,
                  textTransform: 'none',
                  boxShadow: '0 4px 14px rgba(255, 255, 255, 0.15)',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 20px rgba(255, 255, 255, 0.25)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                {t('featuredService.button')}
              </Button>
            </AnimatedLeft>
          </Grid>
          <Grid item xs={12} md={6}>
            <AnimatedRight delay={0.4}>
              <Box
                sx={{
                  position: 'relative',
                  borderRadius: { xs: 3, md: 4 },
                  overflow: 'hidden',
                  boxShadow: '0 20px 60px rgba(0, 206, 209, 0.15)',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, rgba(0, 206, 209, 0.1) 0%, transparent 50%)',
                    zIndex: 1,
                    pointerEvents: 'none',
                  },
                }}
              >
                <Box
                  component="img"
                  src="/bmw.jpeg"
                  alt={t('featuredService.imageAlt')}
                  sx={{
                    width: '100%',
                    height: '500px',
                    display: 'block',
                    objectFit: 'cover',
                    borderRadius: { xs: 3, md: 4 },
                  }}
                  onError={(e) => {
                    // Fallback to a placeholder if image doesn't exist
                    e.target.style.display = 'none';
                    e.target.parentElement.style.background = 'linear-gradient(135deg, rgba(0, 206, 209, 0.2) 0%, rgba(0, 206, 209, 0.05) 100%)';
                    e.target.parentElement.style.minHeight = '400px';
                  }}
                />
              </Box>
            </AnimatedRight>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FeaturedService;
