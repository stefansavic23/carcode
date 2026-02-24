import React from 'react';
import { Box } from '@mui/material';

/**
 * Reusable responsive image gallery.
 * - CSS Grid with auto-fit and minmax for flexible columns.
 * - Hover zoom-in effect, no external libraries.
 */
const Gallery = ({ images = [] }) => {
  if (!images || images.length === 0) return null;

  return (
    <Box
      component="section"
      aria-label="Galerija radova"
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
        gap: { xs: 2, md: 3 },
        width: '100%',
        mt: 6,
      }}
    >
      {images.map((src, index) => (
        <Box
          key={index}
          component="figure"
          sx={{
            margin: 0,
            overflow: 'hidden',
            borderRadius: 2,
            boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
            '&:hover img': {
              transform: 'scale(1.06)',
            },
          }}
        >
          <Box
            component="img"
            src={src}
            alt={`Primjer rada ${index + 1}`}
            loading="lazy"
            sx={{
              width: '100%',
              aspectRatio: '4/3',
              objectFit: 'cover',
              display: 'block',
              transition: 'transform 0.35s ease',
            }}
            onError={(e) => {
              e.target.style.background = 'rgba(0, 206, 209, 0.08)';
              e.target.style.minHeight = 200;
              e.target.alt = 'Slika nije dostupna';
            }}
          />
        </Box>
      ))}
    </Box>
  );
};

export default Gallery;
