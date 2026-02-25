import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Stack,
  Chip,
} from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import NavigationIcon from '@mui/icons-material/Navigation';
import RadioIcon from '@mui/icons-material/Radio';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import ShieldIcon from '@mui/icons-material/Shield';
import SpeedIcon from '@mui/icons-material/Speed';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { featuresWithInfo } from '../data/serviceFeatures';

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

const serviceKeys = [
  'navigation',
  'multimedia',
  'virtualDashboards',
  'lighting',
  'securityComfort',
  'performance',
];

const serviceIcons = [
  <NavigationIcon />,
  <RadioIcon />,
  <DashboardIcon />,
  <LightbulbIcon />,
  <ShieldIcon />,
  <SpeedIcon />,
];

const Services = () => {
  const { t } = useTranslation();
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  const services = serviceKeys.map((key, index) => {
    const features = t(`services.${key}.features`, { returnObjects: true });
    const featuresList = Array.isArray(features) ? features : [];
    const withInfo = featuresWithInfo[key] || [];
    return {
    icon: serviceIcons[index],
    title: t(`services.${key}.title`),
    description: t(`services.${key}.description`),
    features: featuresList.map((text, i) => ({ text, info: withInfo[i] })),
  };
  });

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
            {t('services.titlePrefix')} <Box component="span" sx={{ color: 'primary.main' }}>{t('services.titleHighlight')}</Box>
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
            {t('services.subtitle')}
          </Typography>
        </Stack>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={serviceKeys[index]}>
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
                      mb: 2,
                    }}
                  >
                    {service.description}
                  </Typography>
                  {service.features?.length > 0 && (
                    <Stack direction="row" flexWrap="wrap" gap={1} useFlexGap>
                      {service.features.map((item, i) => (
                        <Chip
                          key={i}
                          label={
                            <Box component="span" sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.5 }}>
                              {item.text}
                              {item.info && (
                                <InfoOutlinedIcon sx={{ fontSize: 14, opacity: 0.8 }} />
                              )}
                            </Box>
                          }
                          size="small"
                          sx={{
                            borderRadius: '9999px',
                            backgroundColor: 'rgba(255,255,255,0.08)',
                            color: 'text.secondary',
                            fontWeight: 500,
                            fontSize: { xs: '0.8rem', sm: '0.85rem' },
                            '& .MuiChip-label': { px: 1.5, py: 0.75 },
                          }}
                        />
                      ))}
                    </Stack>
                  )}
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