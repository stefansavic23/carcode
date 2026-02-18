import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Stack,
  Paper,
} from '@mui/material';
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
} from '@mui/icons-material';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert(t('contact.successMessage'));
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <EmailIcon />,
      title: t('contact.email'),
      content: t('contact.emailValue'),
      link: 'mailto:info@carcode.com',
    },
    {
      icon: <PhoneIcon />,
      title: t('contact.phone'),
      content: t('contact.phoneValue'),
      link: 'tel:+38766066444',
    },
    {
      icon: <LocationIcon />,
      title: t('contact.location'),
      content: t('contact.locationValue'),
      link: 'https://www.google.com/maps/place/Car+Code+Derventa/@44.9805284,17.9120042,1008m/data=!3m2!1e3!4b1!4m6!3m5!1s0x475dcf004d7e3e97:0xd69aff1c84d93071!8m2!3d44.9805284!4d17.9120042!16s%2Fg%2F11xspcy60r?entry=ttu&g_ep=EgoyMDI2MDIwOC4wIKXMDSoASAFQAw%3D%3D',
    },
  ];

  return (
    <Box
      id="contact"
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
            }}
          >
            {t('contact.title')}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              textAlign: 'center',
              maxWidth: '600px',
              fontWeight: 400,
            }}
          >
            {t('contact.subtitle')}
          </Typography>
        </Stack>

        <Grid container alignContent={"center"} justifyContent={"center"}>
          <Stack spacing={3}>
            {contactInfo.map((info, index) => (
              <Paper
                key={index}
                sx={{
                  p: 3,
                  backgroundColor: 'background.paper',
                  border: '1px solid',
                  borderColor: 'rgba(0, 206, 209, 0.1)',
                  borderRadius: 2,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: 'primary.main',
                    transform: 'translateX(4px)',
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
              </Paper>
            ))}
          </Stack>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;



