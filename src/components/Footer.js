import React from 'react';
import { Box, Container, Typography, Stack, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        py: 4,
        backgroundColor: 'background.paper',
        borderTop: '1px solid',
        borderColor: 'rgba(0, 206, 209, 0.1)',
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={2}
          justifyContent="space-between"
          alignItems={{ xs: 'center', md: 'flex-start' }}
        >
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                mb: 1,
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
              variant="body2"
              sx={{
                color: 'text.secondary',
                fontWeight: 300,
                letterSpacing: '0.1em',
              }}
            >
              PROFESSIONAL CARCODING
            </Typography>
          </Box>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={4}
            sx={{ textAlign: { xs: 'center', md: 'left' } }}
          >
            <Box>
              <Typography
                variant="subtitle2"
                sx={{
                  fontWeight: 600,
                  mb: 1,
                  color: 'text.primary',
                }}
              >
                Quick Links
              </Typography>
              <Stack spacing={0.5}>
                <Link
                  href="#home"
                  sx={{
                    color: 'text.secondary',
                    textDecoration: 'none',
                    '&:hover': {
                      color: 'primary.main',
                    },
                  }}
                >
                  Home
                </Link>
                <Link
                  href="#services"
                  sx={{
                    color: 'text.secondary',
                    textDecoration: 'none',
                    '&:hover': {
                      color: 'primary.main',
                    },
                  }}
                >
                  Services
                </Link>
                <Link
                  href="#about"
                  sx={{
                    color: 'text.secondary',
                    textDecoration: 'none',
                    '&:hover': {
                      color: 'primary.main',
                    },
                  }}
                >
                  About
                </Link>
                <Link
                  href="#contact"
                  sx={{
                    color: 'text.secondary',
                    textDecoration: 'none',
                    '&:hover': {
                      color: 'primary.main',
                    },
                  }}
                >
                  Contact
                </Link>
              </Stack>
            </Box>
            <Box>
              <Typography
                variant="subtitle2"
                sx={{
                  fontWeight: 600,
                  mb: 1,
                  color: 'text.primary',
                }}
              >
                Contact
              </Typography>
              <Stack spacing={0.5}>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  info@carcode.com
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  +387 66 066 444
                </Typography>
              </Stack>
            </Box>
          </Stack>
        </Stack>
        <Box
          sx={{
            mt: 4,
            pt: 4,
            borderTop: '1px solid',
            borderColor: 'rgba(0, 206, 209, 0.1)',
            textAlign: 'center',
          }}
        >
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            © {new Date().getFullYear()} CARCODE. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;




