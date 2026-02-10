import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Stack,
} from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import {
  Memory as MemoryIcon,
  Settings as SettingsIcon,
  Speed as SpeedIcon,
  Security as SecurityIcon,
  Build as BuildIcon,
  Analytics as AnalyticsIcon,
} from '@mui/icons-material';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AnimatedCard = styled(Card)(({ delay = 0, isVisible }) => ({
  animation: isVisible ? `${fadeInUp} 0.6s ease-out ${delay}s both` : 'none',
}));

const services = [
  {
    icon: <SpeedIcon />,
    title: 'ECU Remapping',
    description:
      'Professional engine control unit remapping to unlock hidden performance and optimize your vehicle\'s power output.',
  },
  {
    icon: <MemoryIcon />,
    title: 'Chip Tuning',
    description:
      'Advanced chip tuning services to enhance your car\'s performance, fuel efficiency, and driving experience.',
  },
  {
    icon: <SettingsIcon />,
    title: 'Custom Coding',
    description:
      'Tailored coding solutions for your specific vehicle model, including feature activation and customization.',
  },
  {
    icon: <SecurityIcon />,
    title: 'Security Updates',
    description:
      'Keep your vehicle\'s software up-to-date with the latest security patches and performance improvements.',
  },
  {
    icon: <BuildIcon />,
    title: 'Diagnostic Services',
    description:
      'Comprehensive diagnostic analysis to identify and resolve issues with your vehicle\'s electronic systems.',
  },
  {
    icon: <AnalyticsIcon />,
    title: 'Performance Analysis',
    description:
      'Detailed performance analysis and optimization recommendations based on your driving patterns and needs.',
  },
];

const Services = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <Box
      id="services"
      ref={ref}
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'background.default',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={2} alignItems="center" sx={{ mb: 6 }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              fontWeight: 700,
              textAlign: 'center',
              mb: 2,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s ease-out',
            }}
          >
            Our <Box component="span" sx={{ color: 'primary.main' }}>Services</Box>
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              textAlign: 'center',
              maxWidth: '600px',
              fontWeight: 400,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s ease-out 0.2s',
            }}
          >
            Comprehensive car coding solutions tailored to enhance your vehicle's
            performance, efficiency, and functionality.
          </Typography>
        </Stack>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <AnimatedCard
                delay={index * 0.1}
                isVisible={isVisible}
                sx={{
                  height: '100%',
                  backgroundColor: 'background.paper',
                  border: '1px solid',
                  borderColor: 'rgba(0, 206, 209, 0.1)',
                  borderRadius: 3,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px) scale(1.02)',
                    borderColor: 'primary.main',
                    boxShadow: '0 12px 40px rgba(0, 206, 209, 0.2)',
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box
                    sx={{
                      width: 64,
                      height: 64,
                      borderRadius: 2,
                      backgroundColor: 'rgba(0, 206, 209, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 3,
                      color: 'primary.main',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: 'rgba(0, 206, 209, 0.2)',
                        transform: 'rotate(5deg) scale(1.1)',
                      },
                    }}
                  >
                    {React.cloneElement(service.icon, {
                      sx: { fontSize: '2.5rem', transition: 'all 0.3s ease' },
                    })}
                  </Box>
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{
                      fontWeight: 600,
                      mb: 2,
                      color: 'text.primary',
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.7,
                    }}
                  >
                    {service.description}
                  </Typography>
                </CardContent>
              </AnimatedCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;




