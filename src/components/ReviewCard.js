import React from 'react';
import { Box, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

/**
 * Single review card. Props: name, image, date, title, text, rating (1–5).
 */
const ReviewCard = ({ name, image, date, title, text, rating = 5 }) => {
  return (
    <Box
      component="article"
      sx={{
        p: 3,
        borderRadius: 3,
        backgroundColor: 'background.paper',
        border: '1px solid',
        borderColor: 'rgba(0, 206, 209, 0.12)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(0, 206, 209, 0.06)',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        '&:hover': {
          transform: 'scale(1.02)',
          boxShadow: '0 12px 40px rgba(0, 0, 0, 0.5), 0 0 24px rgba(0, 206, 209, 0.12)',
        },
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', mb: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box
            component="img"
            src={image}
            alt=""
            sx={{
              width: 48,
              height: 48,
              borderRadius: '50%',
              objectFit: 'cover',
              backgroundColor: 'rgba(0, 206, 209, 0.15)',
            }}
            onError={(e) => {
              e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=96&background=00CED1&color=fff`;
            }}
          />
          <Box>
            <Typography sx={{ fontWeight: 600, fontSize: '1rem', color: 'text.primary' }}>
              {name}
            </Typography>
            <Typography sx={{ fontSize: '0.8rem', color: 'text.secondary' }}>
              {date}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', gap: 0.25 }} aria-label={`${rating} stars`}>
          {Array.from({ length: 5 }, (_, i) => (
            <StarIcon
              key={i}
              sx={{
                fontSize: '1.25rem',
                color: i < rating ? '#FFC107' : 'rgba(255, 255, 255, 0.2)',
              }}
            />
          ))}
        </Box>
      </Box>
      <Typography
        component="h3"
        sx={{
          fontWeight: 600,
          fontSize: '1rem',
          color: 'text.primary',
          mb: 1.5,
          lineHeight: 1.3,
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          fontSize: '0.9rem',
          color: 'text.secondary',
          lineHeight: 1.65,
          flex: 1,
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default ReviewCard;
