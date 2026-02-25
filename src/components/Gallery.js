import { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

/**
 * Carousel gallery: jedna slika u sredini, strelice lijevo/desno za prelazak.
 * Možeš dodati 5+ slika u niz images.
 */
const Gallery = ({ images = [] }) => {
  const [index, setIndex] = useState(0);
  const [imgError, setImgError] = useState(false);

  if (!images || images.length === 0) return null;

  const total = images.length;
  const goPrev = () => {
    setImgError(false);
    setIndex((i) => (i - 1 + total) % total);
  };
  const goNext = () => {
    setImgError(false);
    setIndex((i) => (i + 1) % total);
  };

  const src = images[index];

  return (
    <Box
      component="section"
      aria-label="Galerija radova"
      sx={{
        width: '100%',
        mt: 6,
        position: 'relative',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: { xs: 1, sm: 2 },
          justifyContent: 'center',
        }}
      >
        <IconButton
          onClick={goPrev}
          aria-label="Prethodna slika"
          sx={{
            color: 'primary.main',
            '&:hover': {
              backgroundColor: 'rgba(0, 206, 209, 0.15)',
            },
          }}
        >
          <ChevronLeftIcon fontSize="large" />
        </IconButton>

        <Box
          sx={{
            flex: 1,
            maxWidth: 720,
            overflow: 'hidden',
            borderRadius: 2,
            boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
            minHeight: 200,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {imgError ? (
            <Box sx={{ color: 'text.secondary', py: 4, px: 2 }}>
              Slika nije dostupna
            </Box>
          ) : (
            <Box
              component="img"
              src={src}
              alt={`Slika ${index + 1} od ${total}`}
              loading="lazy"
              sx={{
                width: '100%',
                maxHeight: 420,
                objectFit: 'contain',
                display: 'block',
                transition: 'opacity 0.25s ease',
              }}
              onError={() => setImgError(true)}
            />
          )}
        </Box>

        <IconButton
          onClick={goNext}
          aria-label="Sljedeća slika"
          sx={{
            color: 'primary.main',
            '&:hover': {
              backgroundColor: 'rgba(0, 206, 209, 0.15)',
            },
          }}
        >
          <ChevronRightIcon fontSize="large" />
        </IconButton>
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 0.5,
          mt: 2,
        }}
      >
        {images.map((_, i) => (
          <Box
            key={i}
            onClick={() => {
              setImgError(false);
              setIndex(i);
            }}
            role="button"
            tabIndex={0}
            aria-label={`Slika ${i + 1}`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setIndex(i);
              }
            }}
            sx={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              backgroundColor: i === index ? 'primary.main' : 'rgba(255,255,255,0.25)',
              cursor: 'pointer',
              transition: 'background-color 0.2s ease',
              '&:hover': {
                backgroundColor: i === index ? 'primary.light' : 'rgba(255,255,255,0.4)',
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Gallery;
