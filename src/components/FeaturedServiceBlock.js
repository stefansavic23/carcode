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

/**
 * Reusable Featured Service block component.
 *
 * @param {string} label - Small uppercase label (e.g. "Naše usluge")
 * @param {string} title - Main title (e.g. "Kodiranje vozila")
 * @param {string} description - Description paragraph
 * @param {string} buttonText - Button label (e.g. "Pogledaj ponudu")
 * @param {string} buttonLink - Button URL (e.g. "/services")
 * @param {string} image - Image URL or path
 * @param {string} imageAlt - Image alt text
 * @param {'left'|'right'} imagePosition - Position of image ("left" or "right")
 * @param {object} sx - Additional MUI sx props for the wrapper
 */
const FeaturedServiceBlock = ({
  label,
  title,
  description,
  buttonText,
  buttonLink = '/services',
  image,
  imageAlt = '',
  imagePosition = 'right',
  sx = {},
}) => {
  const isImageRight = imagePosition === 'right';

  const contentBlock = (
    <AnimatedLeft delay={0.2}>
      {label && (
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
          {label}
        </Typography>
      )}
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
        {title}
      </Typography>
      {description && (
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
          {description}
        </Typography>
      )}
      {buttonText && (
        <Button
          component={Link}
          to={buttonLink}
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
          {buttonText}
        </Button>
      )}
    </AnimatedLeft>
  );

  const imageBlock = image ? (
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
          src={image}
          alt={imageAlt || title}
          sx={{
            width: '100%',
            height: { xs: 300, sm: 400, md: 500 },
            display: 'block',
            objectFit: 'cover',
            borderRadius: { xs: 3, md: 4 },
          }}
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.parentElement.style.background =
              'linear-gradient(135deg, rgba(0, 206, 209, 0.2) 0%, rgba(0, 206, 209, 0.05) 100%)';
            e.target.parentElement.style.minHeight = '400px';
          }}
        />
      </Box>
    </AnimatedRight>
  ) : null;

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
        ...sx,
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6} order={{ xs: 1, md: isImageRight ? 1 : 2 }}>
            {contentBlock}
          </Grid>
          {imageBlock && (
            <Grid item xs={12} md={6} order={{ xs: 2, md: isImageRight ? 2 : 1 }}>
              {imageBlock}
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default FeaturedServiceBlock;
