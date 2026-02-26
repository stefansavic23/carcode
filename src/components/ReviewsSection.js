import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Container, Typography } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import ReviewCard from './ReviewCard';
import { reviews } from '../data/reviews';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AnimatedBox = styled(Box)(({ delay = 0, isVisible }) => ({
  animation: isVisible ? `${fadeInUp} 0.6s ease-out ${delay}s both` : 'none',
}));

const ReviewsSection = () => {
  const { t } = useTranslation();
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.08 });

  return (
    <Box
      id="reviews"
      ref={ref}
      component="section"
      aria-label={t('reviews.sectionLabel')}
      sx={{
        py: { xs: 6, sm: 8, md: 10 },
        backgroundColor: 'background.default',
        scrollMarginTop: { xs: 56, sm: 64 },
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
          <Typography
            component="span"
            sx={{
              display: 'block',
              fontSize: { xs: '0.75rem', sm: '0.8rem' },
              fontWeight: 600,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'primary.main',
              mb: 1,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
              transition: 'opacity 0.5s ease, transform 0.5s ease',
            }}
          >
            {t('reviews.label')}
          </Typography>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontSize: { xs: '1.75rem', sm: '2rem', md: '2.25rem' },
              fontWeight: 700,
              color: 'text.primary',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
              transition: 'opacity 0.5s ease 0.1s, transform 0.5s ease 0.1s',
            }}
          >
            {t('reviews.titlePrefix')}{' '}
            <Box component="span" sx={{ color: 'primary.main' }}>
              {t('reviews.titleHighlight')}
            </Box>
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
            gap: { xs: 3, md: 4 },
            maxWidth: 960,
            mx: 'auto',
          }}
        >
          {reviews.map((review, index) => (
            <AnimatedBox key={review.id} delay={0.15 + index * 0.08} isVisible={isVisible}>
              <ReviewCard
                name={review.name}
                image={review.image}
                date={t(review.dateKey)}
                title={t(review.titleKey)}
                text={t(review.textKey)}
                rating={review.rating}
              />
            </AnimatedBox>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ReviewsSection;
