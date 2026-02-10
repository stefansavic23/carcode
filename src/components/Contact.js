import { Box, Container, Typography, Grid, Stack, Paper } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
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

const AnimatedContactCard = styled(Paper)(({ delay = 0, isVisible }) => ({
  animation: isVisible ? `${fadeInUp} 0.6s ease-out ${delay}s both` : 'none',
}));

const Contact = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

  const contactInfo = [
    {
      icon: <EmailIcon />,
      title: 'Email',
      content: 'info@carcode.com',
      link: 'mailto:info@carcode.com',
    },
    {
      icon: <PhoneIcon />,
      title: 'Phone',
      content: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: <LocationIcon />,
      title: 'Location',
      content: '123 Automotive Street, City, State 12345',
      link: '#',
    },
  ];

  return (
    <Box
      id="contact"
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
            Get In <Box component="span" sx={{ color: 'primary.main' }}>Touch</Box>
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
            Ready to enhance your vehicle? Contact us today for a consultation and
            discover how we can help unlock your car's potential.
          </Typography>
        </Stack>

        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={6}>
            <Stack spacing={3}>
              {contactInfo.map((info, index) => (
                <AnimatedContactCard
                  key={index}
                  delay={index * 0.15}
                  isVisible={isVisible}
                  sx={{
                    p: 3,
                    backgroundColor: 'background.paper',
                    border: '1px solid',
                    borderColor: 'rgba(0, 206, 209, 0.1)',
                    borderRadius: 2,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: 'primary.main',
                      transform: 'translateX(8px) scale(1.02)',
                      boxShadow: '0 8px 24px rgba(0, 206, 209, 0.15)',
                    },
                  }}
                >
                  <Stack direction="row" spacing={2} alignItems="flex-start">
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: 1.5,
                        backgroundColor: 'rgba(0, 206, 209, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'primary.main',
                        flexShrink: 0,
                      }}
                    >
                      {info.icon}
                    </Box>
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          mb: 0.5,
                          color: 'text.primary',
                        }}
                      >
                        {info.title}
                      </Typography>
                      <Typography
                        component="a"
                        href={info.link}
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                          textDecoration: 'none',
                          '&:hover': {
                            color: 'primary.main',
                          },
                        }}
                      >
                        {info.content}
                      </Typography>
                    </Box>
                  </Stack>
                </AnimatedContactCard>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;



