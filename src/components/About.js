import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Stack,
  Paper,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const features = [
  'Professional-grade diagnostic equipment',
  'Years of industry experience',
  'Support for all major vehicle brands',
  'Safe and reversible modifications',
  'Comprehensive warranty coverage',
  'Personalized service approach',
];

const stats = [
  { number: '5000+', label: 'Vehicles Tuned' },
  { number: '98%', label: 'Customer Satisfaction' },
  { number: '10+', label: 'Years Experience' },
  { number: '24/7', label: 'Support Available' },
];

const About = () => {
  return (
    <Box
      id="about"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'background.paper',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Stack spacing={3}>
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                  fontWeight: 700,
                }}
              >
                Why Choose <Box component="span" sx={{ color: 'primary.main' }}>CARCODE</Box>?
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: 'text.secondary',
                  fontWeight: 400,
                  lineHeight: 1.8,
                }}
              >
                We are dedicated to providing the highest quality car coding and ECU
                tuning services. Our team of experts combines technical expertise with
                a passion for automotive excellence.
              </Typography>
              <Stack spacing={2} sx={{ mt: 2 }}>
                {features.map((feature, index) => (
                  <Stack key={index} direction="row" spacing={2} alignItems="center">
                    <CheckCircleIcon
                      sx={{
                        color: 'primary.main',
                        fontSize: '1.5rem',
                      }}
                    />
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'text.primary',
                        fontSize: '1.1rem',
                      }}
                    >
                      {feature}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={3}>
              {stats.map((stat, index) => (
                <Grid item xs={6} key={index}>
                  <Paper
                    sx={{
                      p: 3,
                      textAlign: 'center',
                      backgroundColor: 'background.default',
                      border: '1px solid',
                      borderColor: 'rgba(0, 206, 209, 0.2)',
                      borderRadius: 2,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: 'primary.main',
                        transform: 'translateY(-4px)',
                        boxShadow: '0 8px 24px rgba(0, 206, 209, 0.15)',
                      },
                    }}
                  >
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: 700,
                        color: 'primary.main',
                        mb: 1,
                        fontSize: { xs: '2rem', sm: '2.5rem' },
                      }}
                    >
                      {stat.number}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'text.secondary',
                        fontWeight: 500,
                      }}
                    >
                      {stat.label}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;




